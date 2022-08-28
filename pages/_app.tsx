import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProvider, useGlobalContext } from "../context";
import { useDisclosure } from "@chakra-ui/react";
import ModalComponent from "../components/Modal"
function MyApp({ Component, pageProps }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {displayModal, showModal} = useGlobalContext()
  return (
    <ChakraProvider>
      <AppProvider>
        <ModalComponent
          text="Display Modal"
          {...{ isOpen: showModal, onClose: () => displayModal(false), onOpen:()=>displayModal(true) }}
        />{" "}
        {/* for the modal you wanted*/}
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  );
}

export default MyApp;
