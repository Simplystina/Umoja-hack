import {
  Flex,
  Avatar,
  Text,
  Box,
  HStack,
  Input,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  
  AiTwotoneEdit,

} from "react-icons/ai";
import { BsFillHeartFill, BsCash } from "react-icons/bs";
import { logType } from "../pages/dashboard";
import { useGlobalContext } from "../context";

const Posts = ({ blog, blogger, dislikes, index, likes, title }: logType) => {
  const [active, setActive] = useState(true);
  const { Api, displayModal } = useGlobalContext();
  const [tip, setTip] = useState(0);

  const handleTip = async () => {
    try {
      displayModal(true, "Your transaction is going through, check your wallet")
      // @ts-ignore
      await Api.tip(tip, parseInt(index));
      displayModal(
        true,
        "Your transaction was successful"
      );

    } catch (error) {
        displayModal(true, "Your transaction Failed");
    }
  };

  const Comp = () => {
    return (
      <>
        <Text>You are about to tip this blogger</Text>
        <Input
          type={"number"}
          placeholder="Enter amount to tip"
          onChange={(e: any) => setTip(e.target.value)}
        />
        <Button onClick={handleTip}>Tip</Button>
      </>
    );
  };
  return (
    <Flex pos="relative">
      <Avatar
        size={["sm","md"]}
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        mr={["10px","20px"]}
      />
      <Box w="100%">
        <Box>
          <Flex justifyContent="space-between">
            <Text fontSize={["16px","20px","24px"]} fontWeight="700" color="#2E3037">
              {title[1].replace(/\0/g, "")}
            </Text>
            <BsThreeDotsVertical
              color="#5C6578"
              onClick={() => setActive(!active)}
            />
          </Flex>
          {active && (
            <Box
              boxShadow="0.1px 0.1px 1px 1px rgba(0, 0, 0, 0.03)"
              bg="white"
              borderRadius="10px"
              pos="absolute"
              p={[2,3]}
              right="2"
            >
              {/* <HStack>
                <AiFillDelete color="red" />{" "}
                <Text fontSize="10px">Delete Post</Text>
              </HStack> */}
              {blogger[1] == Api.acc && (
                <HStack>
                  <AiTwotoneEdit color="green" />{" "}
                  <Text fontSize={["8px","10px"]}>Edit Post</Text>
                </HStack>
              )}
            </Box>
          )}
        </Box>
        <Text
          mt="10px"
          fontSize={["10px","12px","16px"]}
          fontWeight="400"
          color="#525963"
          lineHeight={["16px","20px","26px"]}
        >
          {blog[1].replace(/\0/g, "")}
        </Text>
        <HStack mt="20px" onClick={() => displayModal(true, <Comp />)}>
          <BsCash fontSize="15px" color="#FF3D00" />{" "}
          <Text color="#000000" fontWeight="700" fontSize={["10px","12px","14px"]}>
            Tip
          </Text>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Posts;
