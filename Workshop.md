This is my solution to the [Umoja3 Bounty](https://events.reach.sh/decentralized-umoja-3)

The Solution is a microblog called Mono Blog. It allows people to make blog post directly on the algorand blockchain network.
The live url can be found here [monoblog](https://mono-microblog.vercel.app/)

I made use of Next js, chakra UI and reach events to build this application. It's completely mobile responsive and works on all devices.


# Workshop: Micro Blog

In this workshop, we'll go through A Bounty Hack submission, the MicroBlog Dapp.
The Dapp consists of two actors `Blogger` and `Readers`. The `Blogger`s are responsible for managing blogs they create and have different privileges. They interact with the contract and create blogs that can be viewed by anyone from anywhere.
The `Readers` are the actors who consume the content.

This workshop assumes that you've completed  the API tutorial; because it relies heavily on the use of APIs for its functionality.

We assume that you’ll go through this workshop in a directory named ~/reach/microBlog:

`$ mkdir -p ~/reach/microBlog`

And that you have a copy of Reach installed in ~/reach so you can write

`$ ../reach version`

You should start by initializing your project

`$ ../reach init`

This creates two files `index.rsh` and `index.mjs`

## Problem Analysis

Centralized Blogging platforms exercise too much control over Creators in the blogging space, they can censor posts, shadow ban creators and do a lot more damage to the average creator. They collect all the profits while leaving content creators to battle for scraps. Mono Blog aims to solve this problem by giving creators a censorship-resistant way to publish their ideas while also allowing them to be rewarded directly without intermediaries.

When building the Dapp we asked ourselves a couple of questions:

```
How many unique participant will interact with our Dapp?

What steps do each participant have to take to successfully use our Dapp?

Do they need any Information beforehand?

Who can interact with our contract ?

Will there be fees for using services?

Will there be exchange of funds between participants
```

**Question Answers!**

- Our application involves 3 roles: The Deployer of the contract, the Creators Of the Blogs, and the readers that are allowed to donate.

- The steps taken by each participant

  - Deployer: The deployer is responsible for deploying the contract to the blockchain.
  - Blogger: This is the creator that aims to use the contract to share their ideas. They interact with the contract and post, edit and delete blogs.
  - Reader: These participants view the blogs and can perform actions such as tipping.

- No prior information is needed

- Anyone with a blockchain wallet would be able to interact with it

- There will be an initial one-time fee for bloggers when they initially connect to our contract

- Readers can tip their favorite creators

Problem analysis is a crucial step that helps us understand what our application is supposed to be doing. Remember, programming in general, and Reach in particular, does not solve problems for you; instead, programs encode automatic solutions to problems you've already solved. Compared to normal languages, Reach does do a bit automatically for you: it automatically discovers problems you may not have realized your program had. You still have to solve them yourself though! But, at least you know about them because of Reach

## Data Definition

Humans and their social systems deal with information, but computers can only interact with data, which is merely a representation of information using particular structures, like numbers, arrays, and so on. After problem analysis, we know what information our program will deal with, but next, we need to decide how to translate that information into concrete data.

For the next step, we are going to define the data type equivalents of the values used in our answers from the previous section.

We define the constants and helpers we use throughout the DApp

```js
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
```

And our participant interfaces and APIs and events consist of:

```js
const Mevent = Maybe(eventDataType);

const blogger = {
  createblog: Fun([fxdStr, title], UInt),
  edit: Fun([fxdStr, title, UInt], Null),
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
const Deployer = { ready: Fun([], Null) };


const A = Participant("Deployer", Deployer);
const Blogger = API("blogger", blogger);
const Reader = API("reader", reader);
const Rand = API({ end: Fun([], Bool) });
const E = Events("notify", event);
```

At this point, you can modify your JavaScript file (index.mjs) to contain definitions of these values, although you may want to use a placeholder for the actual value. When you're writing a Reach program, especially in the early phases, you should have these two files open side-by-side and update them in tandem as you're deciding on the participant interact interface and API structure.

## Communication Construction

A fundamental aspect of a decentralized application is the pattern of communication and transfer among the participants, including the consensus network. For example, who initiates the application? Who responds next? Is there a repeated segment of the program that occurs over and over again? We should explicitly write down this structure as comments in our program. For our current program it would be something like:

```md
1. Deployer Deploys the contract. It then alerts the Frontend of it's current state.
2. APIS(Blogger) are able to connect to contract and create a blog.
3. APIS(Blogger) sees there is a problem in the blog then they make some edits.
4. API(Reader) can look at all the blogs created by observing the events that are propagated by the contract.
5.  API(Reader) loves the blog and chooses to donate some amount of Tokens to the creator.
```

## Interactions

A key concept of Reach programs is that they are concerned solely with the communication and consensus portions of a decentralized application. Frontends are responsible for all other aspects of the program. Thus, eventually, a Reach programmer needs to insert calls into their code to send data to and from the frontend via the participant interact interfaces and APIs that they defined during the Data Definition step.

Here's how our program looks

```js
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


```

Running
` ../reach compile`
gives us a message telling us that all our theorems are true

## Testing 

We navigate to our index.mjs file and proceed with running tests

The Test (index.mjs) would look something like this

```js
import { loadStdlib, ask } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";

if (
  process.argv.length < 3 ||
  ["Deployer", "Blogger"].includes(process.argv[2]) == false
) {
  console.log("Usage: reach run index [Deployer|Blogger]");
  process.exit(0);
}
const role = process.argv[2];

const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(1000);

const Blogger = async (info, name = "Unknown") => {
  const acc = await stdlib.newTestAccount(startingBalance);
  const ctc = acc.contract(backend, info);

  const createblog = async (blob, title) => {
    try {
      const response = await ctc.apis.blogger.createblog(blob, title);
      console.log(response);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  const edit = async (blob, title, index) => {
    try {
      const response = await ctc.apis.blogger.edit(blob, title, index);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  const tip = async (amt, index) => {
    try {
      const response = await ctc.apis.reader.tip(stdlib.parseCurrency(amt), index);
      console.log(parseInt(response));
    } catch (error) {
      console.error(error);
    }
  };
  const likeOrDislike = async (bool, index) => {
    try {
      const response = await ctc.apis.reader.likeOrDislike(bool, index);
     
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getBalance = async () => {
    return await stdlib.balanceOf(acc);
  };

  const displayBalance = async () => {
    console.log(`${name}'s balance: ${fmt(await getBalance())}`);
  };
  const getLog = (f) => async () => {
    const { when, what } = await ctc.e.game_state.over.next();
    const lastTime = await ctc.e.game_state.over.lastTime();
    console.log("what", what[0], parseInt(what[1]), parseInt(lastTime));
    return what;
  };
  const view = async (index) => {
    try {
      const response = await ctc.apis.reader.view(index);
      console.log("You successfully view", response);
    } catch (error) {
      console.log("Unable to view, and error occured: ", error);
    }
  };
  return {
    createblog,
    edit,
    tip,
    likeOrDislike,
    getBalance,
    displayBalance,
    getLog,
    view,
  };
};


const [accAlice, accBob] = await stdlib.newTestAccounts(2, startingBalance);

console.log("Hello, Deployer and Blogger!");

console.log("Launching...");

console.log("Starting backends...");

if (role == "Deployer") {
  try {
    const ctc = await accAlice.contract(backend);
    console.log("You the deployer");
    await backend.Deployer(ctc, {
      ready: async () => {
        console.log(`Contract info: ${JSON.stringify(await ctc.getInfo())}`);
      },
    });
  } catch (error) {
    console.log({ error });
  }
}
if (role == "Blogger") {
  try {
    const info = await ask.ask("Paste contract info:", (s) => JSON.parse(s));
    const newUSer = await Blogger(info);
    const user1 = await Blogger(info);
    const user2 = await Blogger(info);
    const user3 = await Blogger(info);

    const idx = await newUSer.createblog(
      "Nothing lroernkosndfkon dskfn m dnfskondkfs ksdnfkodnsk",
      "The lorem"
    );
   await newUSer.view(idx)
   await newUSer.edit("New blob", "Changed", idx);
   await newUSer.view(idx)
   // Create a map to call all
  } catch (error) {
    console.log(error);
  }
}
ask.done();
console.log("Goodbye!!!!!!");

```


Open up two terminal instances (Deployer and Blogger) and run the following

```bash
../reach run index Deployer

```
then in the second terminal
```bash
../reach run index Blogger
```

Copy the contract info from the Deployer terminal and paste into the Blogger terminal and observe what happens on the terminal.
## Discussion

And that it 🥳️🎉️

Congrats on finishing this workshop. You implemented a micro Blog that can be deployed to the blockchain, see if you can deploy it to a Testnet.

If you found this workshop rewarding please let us know on [the Discord Community](https://discord.gg/AZsgcXu).

Thanks!!
