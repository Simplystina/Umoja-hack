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
