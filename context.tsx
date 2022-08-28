import React, {
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  loadStdlib,
  ALGO_WalletConnect as WalletConnect,

  ALGO_PeraConnect
} from "@reach-sh/stdlib";
// @ts-ignore
import * as backend from "./contract/index.main.mjs";
// import * as backend from "..//smartcontract/index.main.mjs";
import { useRouter } from "next/router.js";
let i = 1;
let j = 0;

const ctcInfo = { type: "BigNumber", hex: "0x065d5b26" };

// @ts-ignore
const reach = loadStdlib("ALGO");


reach.setWalletFallback(
  reach.walletFallback({
    providerEnv: "TestNet",
    WalletConnect,
  })
);
export type modalType = "launch" | "message" | "createblog" | "none";

const AppContext = React.createContext(
  {} as {
    state: any;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setState: React.Dispatch<React.SetStateAction<{}>>;
    wallet: any;
    setWallet: React.Dispatch<React.SetStateAction<{}>>;
    modalMessage: any;
    setModalMessage: React.Dispatch<any>;
    view: modalType;
    setView: React.Dispatch<React.SetStateAction<modalType>>;
    createAsyncTimeout: (
      seconds: number,
      executable?: () => any
    ) => Promise<void>;
    displayModal: (
      show: boolean,
      message?: string | JSX.Element,
      options?: {
        type: modalType;
      }
    ) => void;
    isConnected: boolean;
    setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
    Api: {
      createblog: (blob: string, title: string) => Promise<any>;
      tip: (amount: number, index: number) => Promise<any>;
      edit: (blob: string, title: string, index: number) => Promise<any>;
      getBalance: () => Promise<number | any>;
      displayBalance: () => Promise<void>;
      likeOrDislike: (bool: boolean, index: number) => Promise<any>;
      getLog: () => () => Promise<any>;
      getChange: () => () => Promise<any>;
      acc: any;
      ctc:any
    };
    turnOffPopup: (seconds: number, executable?: () => any) => Promise<void>;
    connectWallet: () => Promise<void>;
    DisconnectWallet: () => void;
  }
);
export const AppProvider = ({ children }: PropsWithChildren) => {
  const [whenHappen, setWhenHappen] = useState(0);
  const [isConnected, setIsConnected] = useState(false);
  const [state, setState] = useState({});
  const [wallet, setWallet] = useState({} as any);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("Hello" as any);
  const [view, setView] = useState<modalType>("none");
  const router = useRouter();
  const [Api, setApi] = useState(
    {} as {
      createblog: (blob: string, title: string) => Promise<any>;
      tip: (amount: number, index: number) => Promise<any>;
      edit: (blob: string, title: string, index: number) => Promise<any>;
      getBalance: () => Promise<number | any>;
      likeOrDislike: (bool: boolean, index: number) => Promise<any>;
      getLog: () => () => Promise<any>;
      getChange: () => () => Promise<any>;
      displayBalance: () => Promise<void>;
      acc: any;
      ctc: any;
    }
  );

  const displayModal = (
    show: boolean,
    message?: string | JSX.Element,
    options?: { type: modalType }
  ) => {
    setShowModal(show);
    setView(options?.type ?? show ? "message" : "none");
    setModalMessage(message ?? "");
  };
  const turnOffPopup = async (seconds: number, executable?: () => any) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        displayModal(false);
        executable && executable();
        resolve(null);
      }, seconds * 1000)
    );
  };
  const connectWallet = async () => {
    try {
      const acct = await FUND();
      setWallet(acct.acc);
      setApi(acct);
      setIsConnected(true);
      console.log(acct);
      return acct.acc;
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

  const createAsyncTimeout = async (seconds: number) => {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve(null);
      }, seconds * 1000)
    );
  };

  const DisconnectWallet = async () => {
    window.localStorage.removeItem("walletconnect");
    setIsConnected(false);
    // router.reload();
  };

  const FUND = async () => {
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(
      backend,
      // @ts-ignore
      reach.bigNumberToNumber(ctcInfo)
    );

    const createblog = async (blob: string, title: string) => {
      try {
        // const pay = reach.parseCurrency();
        const res = await ctc.apis.blogger.createblog(blob, title);
        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const edit = async (blob: string, title: string, index: number) => {
      try {
        const res = await ctc.apis.blogger.edit(blob, title, index);
        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    const tip = async (amount: number, index: number) => {
      try {
        const amt = reach.parseCurrency(amount);
        const res = await ctc.apis.reader.tip(amt, index);
        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };
    const likeOrDislike = async (bool: boolean, index: number) => {
      try {
        const res = await ctc.apis.reader.likeOrDislike(bool, index);
        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    const getBalance = async () => {
      return await reach.balanceOf(acc);
    };

    const displayBalance = async () => {
      const bal = await getBalance();
      console.log(`s balance: ${reach.formatCurrency(bal, 4)}`);
    };

    const getLog = () => async () => {
      const eventData = await ctc.e.notify.created.next();

      const { when, what } = eventData;
      const lastTime = await ctc.e.notify.created.lastTime();
      console.log({ what });
      setWhenHappen(parseInt(when));
      return what[0][1];
    };
      const getChange = () => async () => {
        const eventData = await ctc.e.notify.created.next();

        const { when, what } = eventData;
        const lastTime = await ctc.e.notify.created.lastTime();
        console.log({ what });
        setWhenHappen(parseInt(when));
        return what[0][1];
      };

    return {
      createblog,
      edit,
      tip,
      likeOrDislike,
      getBalance,
      displayBalance,
      acc,
      getLog,
      getChange,
      ctc
    }
  };
  useEffect(() => {
    console.log({ whenHappen });
  }, [whenHappen]);



  const deploy = async (acc: any) => {
    try {
      const ctc =
        (await acc?.contract(backend)) ?? (await wallet?.contract(backend));
      await Promise.all([
        await backend.Deployer(ctc, {
          ready: async () => {
            console.log(
              `Contract info: ${JSON.stringify(await ctc.getInfo())}`
            );
          },
        }),
      ]);
      await createAsyncTimeout(90);
      // setContractInfo(await ctc.getInfo());
      console.log(await ctc.getInfo());
    } catch (error) {
      console.log({ error });
    }
  };
  React.useEffect(() => {
    (async () => {
      if (i < 1) {
        const acct = await connectWallet();
        await deploy(acct);
        i++;
      }
    })();
  }, []);
  return (
    <AppContext.Provider
      value={{
        Api,
        turnOffPopup,
        DisconnectWallet,
        createAsyncTimeout,
        connectWallet,
        state,
        setState,
        wallet,
        setWallet,
        modalMessage,
        setModalMessage,
        showModal,
        setShowModal,
        view,
        setView,
        displayModal: displayModal,
        isConnected,
        setIsConnected,
 
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => useContext(AppContext);
