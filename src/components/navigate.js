import { React } from "react";
import Header from "./header/header";
import {
  Flex,
  // Spacer,
  useColorMode,
  useColorModeValue,
  // AspectRatio,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import {
  // List,
  ListItem,
  // ListIcon,
  // OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import Maps from "./body/map";

export default function Navigate() {
  const { colorMode, toggleColorMode } = useColorMode();

  const changeToWhiteheader = useColorModeValue("#1A202C", "white");
  // const changeToWhite = useColorModeValue("#1A202C", "#CBD5E0");
  const changeToBlack = useColorModeValue("#CBD5E0", "#1A202C");
  const whiteColor = useColorModeValue("#CBD5E0", "#1A202C");
  const blackColor = useColorModeValue("#1A202C", "#CBD5E0");

  return (
    <Flex flexDir="column" h="100vh">
      {/* -----------------------header -----------------------*/}
      <Flex
        flexDir="column"
        bg={changeToWhiteheader}
        color={whiteColor}
        h="7vh"
        // backgroundColor="black"
      >
        <Header />
      </Flex>
      {/* -----------------------body -----------------------*/}
      <Flex
        h="100vh"
        p="0.5%"
        bg={changeToBlack}
        color={blackColor}
        flexDir="row"
        overflow="hidden"
        maxW="2000px"
      >
        {/* -----------------------75% (includes filter + map + bottom area)----------------------- */}
        <Flex
          w="76%"
          flexDir="column"
          alignItems="center"
          backgroundColor="#EDF2F7"
          color="white"
        >
          {/* -----------------------filter -----------------------*/}
          <Flex
            w="100%"
            p="1%"
            flexDir="column"
            overflow="auto"
            minH="7vH"
            backgroundColor="white"
          ></Flex>
          {/* -----------------------filter & map - gap-----------------------*/}
          <Flex
            w="100%"
            p="0.1%"
            flexDir="column"
            overflow="auto"
            minH="1vH"
            bg={changeToBlack}
            color={blackColor}
          ></Flex>
          {/* -----------------------map -----------------------*/}
          <Flex
            w="100%"
            flexDir="column"
            overflow="auto"
            minH="60vH"
            // backgroundColor="#4A5568"
          >
            {/* <AspectRatio
              border="4px"
              rounded="md"
              boxShadow="outline"
              borderColor="black"
              ratio={22 / 9}
            > */}
            <div>
              <Maps />
            </div>
            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
                alt="demo"
              /> */}
            {/* </AspectRatio> */}
          </Flex>
          {/* -----------------------horizontal white space -----------------------*/}
          <Flex
            w="100%"
            p="0.5%"
            flexDir="column"
            overflow="auto"
            minH="1vH"
            bg={changeToBlack}
            color={blackColor}
          ></Flex>
          {/* -----------------------bottom area -----------------------*/}
          <Flex
            w="100%"
            p="1%"
            flexDir="column"
            overflow="auto"
            minH="24vH"
            backgroundColor="white"
          ></Flex>
        </Flex>

        {/* -----------------------vertical white gap -----------------------*/}
        <Flex
          w="0.5%"
          flexDir="column"
          alignItems="center"
          bg={changeToBlack}
          color={blackColor}
        ></Flex>

        {/* -----------------------right side bar -----------------------*/}
        <Flex
          w="24%"
          flexDir="column"
          justifyContent="space-between"
          backgroundColor="white"
        >
          <Flex w="100%" p="1%" flexDir="column" overflow="auto" minH="7vH">
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
            <UnorderedList p="5%" minH="7vH">
              <ListItem mt="2%">
                Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
                molestie lorem at massa Facilisis in pretium nisl aliquet
              </ListItem>

              <ListItem float="left" mt="2%">
                Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
                molestie lorem at massa Facilisis in pretium nisl aliquet
              </ListItem>
              <ListItem mt="2%">
                Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
                molestie lorem at massa Facilisis in pretium nisl aliquet
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
