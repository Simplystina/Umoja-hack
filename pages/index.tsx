import React, { useState } from "react";
import {
  Box,
  HStack,
  Img,
  Flex,
  Text,
  Stack,
  Button,
  Input,
  InputGroup,
  InputLeftElement, Drawer,
  DrawerBody,
 
  DrawerHeader,
  DrawerOverlay,
  DrawerContent, useDisclosure, VStack
} from "@chakra-ui/react";
import { EmailIcon, BellIcon } from "@chakra-ui/icons";
import { AiOutlineTwitter, AiFillHeart } from "react-icons/ai";
import { ImLinkedin2 } from "react-icons/im";
import { useRouter } from "next/router";
import { useGlobalContext } from "../context";
import { AiOutlineMenuUnfold } from "react-icons/ai"

const Index = () => {
  const router = useRouter();
  const {
    connectWallet: connect,
    DisconnectWallet,
    isConnected,
  } = useGlobalContext();
  const connectWallet = async () => {
    !isConnected ? await connect() : (DisconnectWallet());
    router.push("/dashboard");
  };

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box>
      <Box>
        <Flex display={["none", "none", "flex"]} p="20px 50px" justifyContent="space-between">
          <Img
            src="https://monoassets.com/f/118499/x/53bf3c69fd/logo.svg"
            alt="logo"
          />
          <HStack spacing={8}>
            <Text fontWeight={500}>Why Mono Blog</Text>
            <Text fontWeight={500}>About Mono</Text>
            <Text fontWeight={500}>Developers</Text>
          </HStack>
          <Button
            onClick={connectWallet}
            bg="royalblue"
            color="white"
            _hover={{
              border: "1px solid royalblue",
              bg: "#fff",
              color: "royalblue",
            }}
            borderRadius={12}
          >
            {!isConnected ? "Login wallet" : "Logout"}
          </Button>
        </Flex>
        <Flex display={["flex", "flex", "none"]} justifyContent="space-between" p={["10px 20px", "10px 30px", "20px 50px"]}>
          <Img
            src="https://monoassets.com/f/118499/x/53bf3c69fd/logo.svg"
            alt="logo"
            w={["50px","100px"]}
          />
          <Button fontSize={["10px", "20px"]} colorScheme='blue' size={["xs", "sm"]} onClick={onOpen}>
            <AiOutlineMenuUnfold />
          </Button>
        </Flex>
        <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'><Img
              src="https://monoassets.com/f/118499/x/53bf3c69fd/logo.svg"
              alt="logo"
            />
            </DrawerHeader>
            <DrawerBody>
              <VStack m="10px 0" align="flex-start" spacing={4}>
                <Text fontWeight={500}>Why Mono Blog</Text>
                <Text fontWeight={500}>About Mono</Text>
                <Text fontWeight={500}>Developers</Text>
              </VStack>
              <Button
                onClick={connectWallet}
                bg="royalblue"
                color="white"
                _hover={{
                  border: "1px solid royalblue",
                  bg: "#fff",
                  color: "royalblue",
                }}
                borderRadius={12}
                p="20px 40px"
              >
                {!isConnected ? "Login wallet" : "Logout"}
              </Button>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
      <Flex justifyContent="center">
        <Box
          borderRadius={10}
          p={["20px", "30px", "70px"]}
          mt={["20px","50px","80px"]}
          w={["90%", "80%", "80%", "60%"]}
          bg="rgba(128, 128, 128, 0.247)"
        >
          <Text fontSize={["24px", "30px", "36px"]} fontWeight="bold" color="#000000">
            Mono Blog is Live on the Blockchain
          </Text>
          <Text m="15px 0" color="#808080dd" fontWeight={600} fontSize={["14px", "16px", "18px"]}>
            We're very excited to introduce mono blog to you. The first and most secure blog that works 
            on the Algorand blockchain network. It enables you to keep your post collections
            in check from anywhere in the world. No database connection, no second party
            and you information is assured to be completely secure.
          </Text>
        </Box>
      </Flex>
      <Box
        p={["20px", "50px", "70px"]}
        mt="40px"
        bgImage="url(https://mono.co/images/subscribe-bg.png)"

        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Box w="100%" maxW={["100%", "100%", "80%", "50%"]} >
          <Text lineHeight={["39px", "45px", "63px"]} fontSize={["32px", "36px", "42px", "48px"]} fontWeight="800" color="#ffffff">
            Subscribe to the Mono Blog
          </Text>
          <Text color="#ffffff" fontSize={["14px", "16px", "20px"]}>
            Get notifications about blog posts, events and
            announcements, products and other materials.
          </Text>
          <Stack direction={["column", "row"]} m="20px 0" spacing={5}>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none">
                 <EmailIcon color="gray.300" />
              </InputLeftElement>
              <Input type="tel" placeholder="Email" />
            </InputGroup>
            <Button
              onClick={connectWallet}
              p="25px"
              rightIcon={<BellIcon />}
              bg="royalblue"
              color="white"
              _hover={{
                border: "1px solid royalblue",
                bg: "#fff",
                color: "royalblue",
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box bg="#000000" p={["100px 30px", "50px 0"]}>
        <Text
          fontSize={["32px", "36px", "40px", "48px"]}
          fontWeight="800"
          color="#ffffff"
          textAlign="center"
        >
          Start creating contents with Mono
        </Text>
        <Text
          m="0 auto"
          maxW={["100%", "70%"]}
          fontSize={["16px", "20px", "24px"]}
          fontWeight="400"
          color="#ffffff"
          textAlign="center"
        >
          Access high-quality data on the blockchain and start processing information
          directly.
        </Text>
        <Flex color="royalblue" m="30px 0" justifyContent="center">
          <Button
            onClick={connectWallet}
            bg="royalblue"
            color="white"
            _hover={{
              border: "1px solid royalblue",
              bg: "#fff",
              color: "royalblue",
            }}
          >
            Start now for free
          </Button>
        </Flex>
      </Box>
      <Box h="0.5px" w="90%" bg="#808080b9"></Box>
      <Flex flexDir={["column", "column", "row"]} bg="#000000" justifyContent="space-between" p={["20px 10px", "30px 30px", "50px 80px"]}>
        <Text fontSize={["14px", "16px", "18px"]} flexWrap="wrap" display="flex" textAlign="center" color="#ffffff">
          MonoBlog created with{" "}
          <span style={{ margin: "5px" }}>
            <AiFillHeart />
          </span>{" "}
          by CharlDinm
        </Text>
        <HStack mt={["20px", "10px", "0px"]} spacing={[4,8]}>
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

export default Index;
