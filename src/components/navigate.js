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
import Maps from "./body/map";

export default function Navigate() {
  const { colorMode, toggleColorMode } = useColorMode();

  const changeToWhiteheader = useColorModeValue("#1A202C", "white");
  // const changeToWhite = useColorModeValue("#1A202C", "#CBD5E0");
  const changeToBlack = useColorModeValue("#CBD5E0", "#1A202C");
  const whiteColor = useColorModeValue("#CBD5E0", "#1A202C");
  const blackColor = useColorModeValue("#1A202C", "#CBD5E0");

  const { isOpen, onOpen, onClose } = useDisclosure();

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
                <Select size="md" p={0} placeholder="SELECT COUNTY">
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
                    <Radio size="sm" value="2">
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
            color="black"
          >
            <Grid templateColumns="repeat(4, 1fr)" gap={3}>
              <Box w="100%" h="10">
                <Flex>
                  <Avatar src="http://bit.ly/sae-adebayo" />
                  <Box ml="3">
                    <Text fontSize="sm">
                      SELECTED COUNTY
                      {/* <Badge ml="1" colorScheme="green">
                        New
                      </Badge> */}
                    </Text>
                    <Text fontWeight="bold" color="teal">
                      Walla Walla
                    </Text>
                  </Box>
                </Flex>
                <Center height="50px">
                  <Divider type="dashed" orientation="vertical" />
                </Center>
                <Flex>
                  <Avatar src="http://bit.ly/sage-debayo" />
                  <Box ml="3">
                    <Text fontSize="sm">
                      CLOSEST ANALOG
                      {/* <Badge ml="1" colorScheme="green">
                        New
                      </Badge> */}
                    </Text>
                    <Text fontWeight="bold" color="teal">
                      Fresno
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
                <Stat mt="7">
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
                >
                  VIEW CHARTS
                </Button>
                <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerHeader borderBottomWidth="1px">
                      Basic Drawer
                    </DrawerHeader>
                    <DrawerBody>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                      <p>Some contents...</p>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
              </Box>
              <Box w="100%" h="10">
                <Button w="100%" colorScheme="teal" variant="outline">
                  RESULTS
                </Button>
              </Box>
            </Grid>
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
