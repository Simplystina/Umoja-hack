import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Textarea,
  Flex,
  Stack,
  Img,
  Button,
  HStack,
  Input,
} from "@chakra-ui/react";
import { AiFillPicture } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import Posts from "../components/posts";
import { useRouter } from "next/router";
import { AiOutlineTwitter, AiFillHeart} from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
// @ts-ignore
import { useGlobalContext } from "../context";
import { getStringFromErr } from "../helper/index";
let i = 0;

export type logType = {
  blog: string[];
  blogger: string[];
  dislikes: {
    _hex: string;
    _isBigNumber: boolean;
  };
  index: {
    _hex: string;
    _isBigNumber: boolean;
  };
  likes: {
    _hex: string;
    _isBigNumber: boolean;
  };
  title: string[];
};

const Dashboard = () => {
  const router = useRouter();
  const [event, setEvent] = useState("" as any);
  const [title, setTitle] = useState("");
  const [blob, setBlob] = useState("");
  const [previewData, setPreviewData] = useState<Array<logType>>([]);
  const {
    DisconnectWallet,
    wallet,
    Api,
    isConnected,
    connectWallet,
    displayModal,
  } = useGlobalContext();
  const hanldeConnect = async () => {
    if (isConnected) {
      DisconnectWallet();
      router.push("/");
    } else {
      await connectWallet();
      setEvent("new")
    }
  };

  const getData = async () => {
    console.log("starting");
    let data = [] as any;
  
    try {
      const log: logType = await Api?.getLog()();
      if (log) {
        data.push(log);
        console.log({ data });
        setPreviewData([...previewData, log]);
      }
    } catch (error) {
      const err = getStringFromErr(error);
      // displayModal(true, err);
      console.log({ error });
    }

    // setPreviewData([...previewData, data]);
  };
    useEffect(() => {
    (async () => {
      if (isConnected) {
        try {
          await Api.ctc.e.notify.created.monitor((e) => {
            setEvent(e);
            setPreviewData((prev) => {
              const newmap = prev?.map((item) => {
                const { index } = item;
                // console.log({index, p:e.what[0].index})
                // @ts-ignore
                if (!(parseInt(index) === parseInt(e.what[0].index))) {
                  return item;
                }
              });
              return [e.what[0], ...newmap];
            });
            console.log(e);
          });
        } catch (error) {
          setEvent("");
          console.log(error);
        }
      }
    })();
  }, [event]);
      // useEffect(() => {
      //   (async () => {
      //     if (isConnected) {
      //       try {
      //         await Api.ctc.e.notify.created.monitor((e) => {
      //           setEvent(e);
      //           setPreviewData((prev) => {
      //             const newmap = prev?.map((item) => {
      //               const { index } = item;
      //               // console.log({index, p:e.what[0].index})
      //               // @ts-ignore
      //               if (!(parseInt(index) === parseInt(e.what[0].index))) {
      //                 return item;
      //               }
      //             });
      //             return [e.what[0], ...newmap];
      //           });
      //           console.log(e);
      //         });
      //       } catch (error) {
      //         setEvent("");
      //         console.log(error);
      //       }
      //     }
      //   })();
      // }, [event]);
  useEffect(() => {
    isConnected && getData();

    console.log({ previewData });
  }, [previewData]);
  const handleSubmit = async () => {
    !isConnected && (await connectWallet());
    try {
      displayModal(true, "Creating blog, \nplease sign transaction");
      await Api.createblog(blob, title);
      displayModal(true, "Created");
      // await Api.ctc.e.notify.created.monitor((e) => {
      //   setEvent(e);
      //   console.log(e);
      // });
    } catch (error) {
      displayModal(
        true,
        "You encountered an error when trying to perfom action"
      );
      console.log({ error });
    }
  };
  // const deploy = async (acc: any) => {
  //   try {
  //     const ctc =
  //       (await acc?.contract(backend)) ?? (await wallet?.contract(backend));
  //     await Promise.all([
  //       await backend.Deployer(ctc, {
  //         ready: async () => {
  //           console.log(
  //             `Contract info: ${JSON.stringify(await ctc.getInfo())}`
  //           );
  //         },
  //       }),
  //     ]);
  //     await createAsyncTimeout(90);
  //     // setContractInfo(await ctc.getInfo());
  //     console.log(await ctc.getInfo());
  //   } catch (error) {
  //     console.log({ error });
  //   }
  // };
  // React.useEffect(() => {
  //   (async () => {
  //     if (i < 1) {
  //       const acct = await connectWallet();
  //       await deploy(acct);
  //       i++;
  //     }
  //   })();
  // }, []);
  return (
    <Box bg="#ffffff" pos="relative">
      <Flex p={["15px 20px","20px 30px","20px 50px"]} justifyContent="space-between">
        <Img
          src="https://monoassets.com/f/118499/x/53bf3c69fd/logo.svg"
          alt="logo"
          w = {["70px", "150px", "150px"]}
        />
        <Text display={["none","block"]} fontWeight={700}>Micro Blog</Text>
        <Button
        
          onClick={hanldeConnect}
          bg={isConnected? "red" : "blue"}
          color="white"
          _hover={{ border: isConnected? "1px solid red" : "1px solid blue", bg: "#fff", color: "red" }}
          borderRadius={12}
        >
          {isConnected ? "logout" : "login"}{" "}
        </Button>
      </Flex>
      <Flex w={["90%","70%"]} m="10px auto">
        <Box
          bg="white"
          border="1px solid royalblue"
          p="3"
          w="100%"
          borderRadius={10}
        >
          <Input
            border="none"
            fontSize={["16px","20px","30px"]}
            fontWeight="500"
            placeholder="Title..."
            onChange={(e: any) => setTitle(e.target.value)}
          ></Input>
          <Textarea
            border="none"
            fontSize={["12px","16px","24px"]}
            fontWeight="500"
            placeholder="Write a post..."
            onChange={(e: any) => setBlob(e.target.value)}
          ></Textarea>
          <Flex
            m="0 30px"
            fontSize={["20px","25px"]}
            color="#9AA0B4"
            justifyContent="space-between"
          >
            <AiFillPicture /> <FiSend className="send-post" onClick={() => handleSubmit()} />
          </Flex>
        </Box>
      </Flex>
      <Stack p={["30px 0 20px 0","40px 0"]} w="70%" m={["30px auto 110px auto","30px auto 80px auto","10px auto 150px auto"]} spacing={[6,8,12]}>
        {previewData?.map((props, idx) => {
          return <Posts key={idx} {...props} />;
        })}
        
        {/*<Posts />
        <Posts /> */}
      </Stack>
      <Flex pos="fixed"  w="100%" bottom={0} flexDir={["column", "column", "row"]} bg="#000000" justifyContent="space-between" p={["10px 10px", "20px 30px", "30px 80px"]}>
        <Text fontSize={["14px", "16px", "18px"]} flexWrap="wrap" display="flex" textAlign="center" color="#ffffff">
          MonoBlog created with{" "}
          <span style={{ margin: "5px" }}>
            <AiFillHeart />
          </span>{" "}
          by CharlDinm
        </Text>
        <HStack mt={["20px", "10px", "0px"]} spacing={[2,4,6]}>
          <Text fontSize={["14px", "16px", "18px"]} display="flex" textAlign="center" color="#ffffff">
            {" "}
            <span style={{ margin: "5px" }}>
              <AiOutlineTwitter />
            </span>{" "}
            Twitter
          </Text>
          <Text fontSize={["14px", "16px", "18px"]} display="flex" alignItems="center" textAlign="center" color="#ffffff">
            {" "}
            <span style={{ margin: "5px" }}>
              <ImLinkedin2 />
            </span>{" "}
            LinkedIn
          </Text>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Dashboard;
