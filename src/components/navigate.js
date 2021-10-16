import React, { useState } from "react";
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
import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Stat } from "@chakra-ui/react";
import { StatLabel } from "@chakra-ui/react";
import { StatNumber } from "@chakra-ui/react";
import { StatHelpText } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { RadioGroup } from "@chakra-ui/react";
import { Radio } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Maps from "./body/map";

export default function Navigate() {
  const { colorMode, toggleColorMode } = useColorMode();
  // console.log(countyName);
  const changeToWhiteheader = useColorModeValue("#1A202C", "white");
  // const changeToWhite = useColorModeValue("#1A202C", "#CBD5E0");
  const changeToBlack = useColorModeValue("#CBD5E0", "#1A202C");
  const whiteColor = useColorModeValue("#CBD5E0", "#1A202C");
  const blackColor = useColorModeValue("#1A202C", "#CBD5E0");

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpenD, onOpenD, onCloseD } = useDisclosure();

  const [ctyName, setCtyName] = React.useState("Walla Walla");

  function getCountyName(countyName) {
    setCtyName(countyName);
  }
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
            // p="1%"
            flexDir="column"
            overflow="auto"
            minH="7vH"
            backgroundColor="white"
            color="black"
          >
            <Grid templateColumns="repeat(5, 1fr)" gap={2}>
              <Box w="100%">
                <Select
                  size="sm"
                  // minHeight="111%"
                  p={0}
                  placeholder="SELECT COUNTY"
                >
                  <option value="Walla Walla">Walla Walla</option>
                  <option value="Fresno">Fresno</option>
                  <option value="Canyon">Canyon</option>
                </Select>
              </Box>
              <Box w="100%">
                <RadioGroup defaultValue="1">
                  <Stack>
                    <Radio size="sm" value="1">
                      MidCentury (2030 - 2070)
                    </Radio>
                    <Radio size="sm" marginTop="-3%" value="2">
                      EndCentury (2070 - 2099)
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>
              <Box w="100%">
                <RadioGroup defaultValue="1">
                  <Stack>
                    <Radio size="sm" value="1">
                      RCP 4.5
                    </Radio>
                    <Radio size="sm" value="2">
                      RCP 8.5
                    </Radio>
                  </Stack>
                </RadioGroup>
              </Box>
              <Box w="100%" />
              <Box w="100%" />
            </Grid>
          </Flex>
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
              <Maps getcountyName={getCountyName} />
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
            minH="21vH"
            backgroundColor="white"
            color="black"
          >
            <Grid templateColumns="repeat(4, 1fr)" gap={3}>
              <Box w="100%" h="10">
                <Flex>
                  <Avatar src="http://bit.ly/sae-adebayo" />
                  <Box width="100%" align="center" ml="3">
                    <Text color="gray" fontSize="smaller">
                      SELECTED COUNTY
                      {/* <Badge ml="1" colorScheme="green">
                        New
                      </Badge> */}
                    </Text>
                    <Text fontWeight="bold" fontSize="large" color="teal">
                      {ctyName}
                    </Text>
                  </Box>
                </Flex>
                <Center height="30px">
                  <Divider
                    type="dashed"
                    align="center"
                    ml="14"
                    mt="-2"
                    orientation="vertical"
                  />
                </Center>
                <Flex>
                  <Avatar src="http://bit.ly/sage-debayo" />
                  <Box width="100%" align="center" ml="3">
                    <Text color="gray" fontSize="smaller">
                      CLOSEST ANALOG
                      {/* <Badge ml="1" colorScheme="green">
                        New
                      </Badge> */}
                    </Text>
                    <Text fontWeight="bold" fontSize="large" color="teal">
                      Umatilla
                    </Text>
                  </Box>
                </Flex>
              </Box>

              <Box w="100%" h="10">
                <Stack direction="row" h="100px" p={4}>
                  <Divider orientation="vertical" />
                  <Text align="left">
                    For higher emissions, Walla Walla's climate in 2080 will
                    feel most like today's climate near Fresno, California.
                  </Text>
                </Stack>
              </Box>
              <Box w="100%" h="10">
                <Stack direction="row" h="100px" p={4}>
                  <Divider orientation="vertical" />
                  <Text align="left">
                    For higher emissions, Walla Walla's climate in 2080 will
                    feel most like today's clinate near Fresno, California.
                  </Text>
                </Stack>
              </Box>
              <Box w="100%" h="10">
                <Stat mt="6">
                  <StatLabel>MAHALONOBIS</StatLabel>
                  <StatNumber color="teal">100</StatNumber>
                  <StatHelpText>DISTANCE</StatHelpText>
                </Stat>
              </Box>
            </Grid>
          </Flex>
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
            {/* <Button onClick={toggleColorMode}>
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button> */}
            {/* <Button backgroundColor="white">
              <Text fontSize="2xl">F&V CAMO</Text>
            </Button> */}
            <Box bg="teal" w="100%" p={2} fontSize="2xl" color="white">
              F&V CAMO
            </Box>
            <Grid templateColumns="repeat(2, 1fr)" mt={1} gap={2}>
              <Box w="100%" h="10">
                <Button
                  w="100%"
                  colorScheme="teal"
                  variant="outline"
                  onClick={onOpen}
                  fontSize="sm"
                >
                  VIEW CHARTS
                </Button>
                <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                      We can display some charts here, If needed! Or else do it
                      on a new page
                    </DrawerHeader>
                    <DrawerBody>
                      <p>
                        Lorem ipsum dolor sit amet Consectetur adipiscing elit
                        Integer molestie lorem at massa Facilisis in pretium
                        nisl aliquet
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet Consectetur adipiscing elit
                        Integer molestie lorem at massa Facilisis in pretium
                        nisl aliquet
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet Consectetur adipiscing elit
                        Integer molestie lorem at massa Facilisis in pretium
                        nisl aliquet
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet Consectetur adipiscing elit
                        Integer molestie lorem at massa Facilisis in pretium
                        nisl aliquet
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet Consectetur adipiscing elit
                        Integer molestie lorem at massa Facilisis in pretium
                        nisl aliquet
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet Consectetur adipiscing elit
                        Integer molestie lorem at massa Facilisis in pretium
                        nisl aliquet
                      </p>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>
              <Box w="100%" h="10">
                <Button
                  w="100%"
                  colorScheme="teal"
                  variant="outline"
                  fontSize="sm"
                >
                  RESULTS
                </Button>
                {/* <Button onClick={onOpenD}>Open Modal</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <p>adfd</p>
                    </ModalBody>

                    <ModalFooter>
                      <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                      </Button>
                      <Button variant="ghost">Secondary Action</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal> */}
              </Box>
            </Grid>
            <Flex>
              {/* <Avatar src="http://bit.ly/sae-adebayo" /> */}
              <Box width="100%" mt="6" ml="3">
                <Text align="center" color="gray" ml="-1" fontSize="sm">
                  STATE
                </Text>
                <Text
                  align="center"
                  fontWeight="bold"
                  fontSize="x-large"
                  color="teal"
                  mt="-2"
                >
                  WA
                </Text>
                <Divider />
              </Box>
            </Flex>

            <Grid templateColumns="repeat(5, 1fr)" gap={4}>
              <GridItem colSpan={2} h="10">
                <Text
                  align="right"
                  fontWeight="bold"
                  color="teal"
                  mr="1"
                  fontSize="large"
                  mt="1"
                >
                  -112.43
                </Text>
                <Text align="right" fontSize="smaller" color="gray" mt="-2">
                  LONGITUDE
                </Text>
              </GridItem>
              <Divider mt="5" />
              <GridItem colStart={4} colEnd={6} h="10">
                <Text
                  align="left"
                  fontWeight="bold"
                  color="teal"
                  ml="-1"
                  fontSize="large"
                  mt="1"
                >
                  -112.43
                </Text>
                <Text
                  align="left"
                  fontSize="smaller"
                  color="gray"
                  mt="-2"
                  ml="1"
                >
                  LATITUDE
                </Text>
              </GridItem>
            </Grid>

            <UnorderedList align="left" p="5%" minH="7vH">
              <ListItem mt="2%">
                Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
                molestie lorem at massa Facilisis in pretium nisl aliquet
              </ListItem>

              <ListItem mt="2%">
                Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
                molestie lorem at massa Facilisis in pretium nisl aliquet
              </ListItem>
              <ListItem mt="2%">
                Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
                molestie lorem at massa Facilisis in pretium nisl aliquet
              </ListItem>
              <ListItem mt="2%">
                Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
                molestie lorem at massa Facilisis in pretium nisl aliquet
              </ListItem>
              {/* <ListItem mt="2%">
                Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
                molestie lorem at massa Facilisis in pretium nisl aliquet
              </ListItem>
              <ListItem mt="2%">
                Lorem ipsum dolor sit amet Consectetur adipiscing elit Integer
                molestie lorem at massa Facilisis in pretium nisl aliquet
              </ListItem> */}
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
