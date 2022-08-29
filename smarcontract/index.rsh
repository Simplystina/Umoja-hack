"reach 0.1";
const fxdStr = Bytes(280);
const title = Bytes(9);
const MAddr = Maybe(Address);
const MByte = Maybe(fxdStr);
const TOTAL_BLOGS = 11;
const mkArr = (len, data) => Array.replicate(len, data);



const eventDataType = Struct([
  ["blog", MByte],
  ["title", Maybe(title)],
  ["blogger", MAddr],
  ["index", UInt],
  ["likes", UInt],
  ["dislikes", UInt],
]);

const defaultEventData = eventDataType.fromObject({
  blog: MByte.None(),
  title: Maybe(title).None(),
  blogger: MAddr.None(),
  likes: 0,
  index: 0,
  dislikes: 0,
});

const Mevent = Maybe(eventDataType);

const blogger = {
  createblog: Fun([fxdStr, title], UInt),
  edit: Fun([fxdStr, title,UInt], Null),
};
const reader = {
  tip: Fun([UInt, UInt], Null),
  likeOrDislike: Fun([Bool, UInt], Null),
  view: Fun([UInt], eventDataType),
};
const event = {
  created: [eventDataType],
  edited: [UInt, eventDataType],
};
const view = {
  view: eventDataType,
};
const Deployer = { ready: Fun([], Null), };

export const main = Reach.App(() => {
  setOptions({ untrustworthyMaps: true, connectors: [ALGO] });

  const A = Participant("Deployer", Deployer);
  const Blogger = API("blogger", blogger);
  const Reader = API("reader", reader);
  const Rand = API({ end: Fun([], Bool) });
  const E = Events("notify", event);
  // const V = View("view", view);
  init();

  A.publish();
  commit()
  A.interact.ready();
  A.publish();
  const bloggerInfo = new Set();

  const INIT_STATE = [mkArr(TOTAL_BLOGS, defaultEventData), 0, 0, true];
  const [blog, bal, index, keepGoing] = parallelReduce([...INIT_STATE])
    .invariant(balance() == bal)
    .while(keepGoing)
    .define(() => {})
    .api(
      Blogger.createblog,
      (_, a) => {
        check(true, "");
      },
      (_, a) => (bloggerInfo.member(this) ? 0 : 100000),
      (blob, titl, k) => {
        k(index);
        const isMember = bloggerInfo.member(this);
        const newBal = isMember ? 0 : 100000;

        const newBlog = eventDataType.fromObject({
          blog: MByte.Some(blob),
          title: Maybe(title).Some(titl),
          blogger: MAddr.Some(this),
          likes: 0,
          dislikes: 0,
          index,
        });

        E.created(newBlog);

        const newBlogArray = blog.set(index % TOTAL_BLOGS, newBlog);

        return [newBlogArray, bal + newBal, index + 1, keepGoing];
      }
    )
    .api(
      Blogger.edit,
      (_, a, n) => {
        check(true, "");
      },
      (_, a, n) => 0,
      (blob, titl, idx, k) => {
        const tempBlog = blog[idx % TOTAL_BLOGS];
        const { likes, index: blogIndex, dislikes } = Struct.toObject(tempBlog);

        const newBlog = eventDataType.fromObject({
          blog: MByte.Some(blob),
          title: Maybe(title).Some(titl),
          blogger: MAddr.Some(this),
          likes,
          dislikes,
          index: blogIndex,
        });

        const newBlogArray = blog.set(blogIndex % TOTAL_BLOGS, newBlog);
        k(null);
        E.edited(idx, newBlog);
        return [newBlogArray, bal, index, keepGoing];
      }
    )
    .api(
      Reader.tip,
      (tip, idx) => {
        check(true, "");
        // check();
      },
      (tip, idx) => tip,
      (tip, idx, k) => {
        const tempBlog = blog[idx % TOTAL_BLOGS];
        const { blogger: currentBlogger } = Struct.toObject(tempBlog);
        transfer(tip).to(fromSome(currentBlogger, this));
        k(null);
        return [blog, bal, index, keepGoing];
      }
    )
    .api(
      Reader.likeOrDislike,
      (_, n) => {
        check(true, "");
      },
      (_, n) => 0,
      (bool, idx, k) => {
        const tempBlog = blog[idx % TOTAL_BLOGS];
        const {
          blog: blob,
          likes,
          dislikes,
          title: titl,
        } = Struct.toObject(tempBlog);

        const newBlog = eventDataType.fromObject({
          blog: blob,
          title: titl,
          blogger: MAddr.Some(this),
          likes: bool ? likes + 1 : likes,
          dislikes: bool ? dislikes : dislikes + 1,
          index: idx,
        });

        const newBlogArray = blog.set(idx % TOTAL_BLOGS, newBlog);
        k(null);
        return [blog, bal, index, keepGoing];
      }
    )
    .api(
      Reader.view,
      (_) => {
        check(true, "");
      },
      (_) => 0,
      (idx, k) => {
        const tempBlog = blog[idx % TOTAL_BLOGS];

        k(tempBlog);
        return [blog, bal, index, keepGoing];
      }
    )
    .api(
      Rand.end,
      () => {
        check(true, "");
      },
      () => 0,
      ( k) => {
        k(true)
        return [blog, bal, index, false];
      }
    )
    .timeout(false);

  transfer(balance()).to(A);
  commit();

  exit();
});
