import React from "react";
import Header from "./header/header";
import {
  Flex,
  // Spacer,
  // useColorMode,
  useColorModeValue,
  // AspectRatio,
} from "@chakra-ui/react";
// import { Button } from "@chakra-ui/react";
import {
  // List,
  ListItem,
  // ListIcon,
  // OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
// import { Badge } from "@chakra-ui/react";
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

import Maps from "./body/map";
import US_Counties from "./body/counties.json";
import RightDrawer from "./drawer";
// import _map from "lodash/map";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

export default function Navigate() {
  // const { colorMode, toggleColorMode } = useColorMode();
  const changeToWhiteheader = useColorModeValue("#1A202C", "white");
  const changeToBlack = useColorModeValue("#CBD5E0", "#1A202C");
  // const whiteColor = useColorModeValue("#CBD5E0", "#1A202C");
  const blackColor = useColorModeValue("#1A202C", "#CBD5E0");

  const [ctyName, setCtyName] = React.useState("WALLA WALLA");
  const [closestAnalog, setClosestAnalog] = React.useState("UMATILLA");
  const [stateId, setStateId] = React.useState("1");
  const [countyLat, setCountyLat] = React.useState([46.593606, -118.228928]);
  const [analogLatLong, setAnalogLatLong] = React.useState([
    46.593606,
    -118.228928,
  ]);
  const [countyCoordinates, setCountyCoordinates] = React.useState([
    [
      [-118.228928, 46.593606],
      [-118.241611, 46.295072],
      [-118.116139, 46.295455],
      [-118.116493, 46.207912],
      [-117.991292, 46.207843],
      [-117.996911, 46.000787],
      [-118.126197, 46.000282],
      [-118.131019, 46.00028],
      [-118.228941, 46.000421],
      [-118.236584, 46.000418],
      [-118.25253, 46.000459],
      [-118.256368, 46.000439],
      [-118.314982, 46.000453],
      [-118.36779, 46.000622],
      [-118.37836, 46.000574],
      [-118.470756, 46.000632],
      [-118.497027, 46.00062],
      [-118.537119, 46.00084],
      [-118.569392, 46.000773],
      [-118.57571, 46.000718],
      [-118.579906, 46.000818],
      [-118.637725, 46.00097],
      [-118.639332, 46.000994],
      [-118.658717, 46.000955],
      [-118.67787, 46.000935],
      [-118.987129, 45.999855],
      [-118.941075, 46.029339],
      [-118.980933, 46.146296],
      [-119.041418, 46.192856],
      [-118.972827, 46.238705],
      [-118.777228, 46.290177],
      [-118.746199, 46.359512],
      [-118.633826, 46.414022],
      [-118.615592, 46.504543],
      [-118.452637, 46.596973],
      [-118.228928, 46.593606],
    ],
  ]);
  const [analogCoordinates, setAnalogCoordinates] = React.useState([
    [
      [-117.996911, 46.000787],
      [-117.977766, 46.000695],
      [-117.977688, 45.860558],
      [-117.972922, 45.860586],
      [-117.973666, 45.816978],
      [-118.045003, 45.817098],
      [-118.066823, 45.688365],
      [-118.117153, 45.688498],
      [-118.117053, 45.470754],
      [-118.198158, 45.470453],
      [-118.197957, 45.427153],
      [-118.428469, 45.428951],
      [-118.428268, 45.355151],
      [-118.697684, 45.345153],
      [-118.696782, 45.257653],
      [-118.655777, 45.196855],
      [-118.546678, 45.196951],
      [-118.548568, 45.080756],
      [-118.519063, 44.995956],
      [-119.163882, 44.995887],
      [-119.146402, 45.082963],
      [-119.14537, 45.516055],
      [-119.248276, 45.516102],
      [-119.248241, 45.601873],
      [-119.434639, 45.602771],
      [-119.432067, 45.913629],
      [-119.37613, 45.920974],
      [-119.322509, 45.933183],
      [-119.25715, 45.939926],
      [-119.225745, 45.932725],
      [-119.19553, 45.92787],
      [-119.169496, 45.927603],
      [-119.12612, 45.932859],
      [-119.093221, 45.942745],
      [-119.027056, 45.969134],
      [-119.008558, 45.97927],
      [-118.987129, 45.999855],
      [-118.67787, 46.000935],
      [-118.658717, 46.000955],
      [-118.639332, 46.000994],
      [-118.637725, 46.00097],
      [-118.579906, 46.000818],
      [-118.57571, 46.000718],
      [-118.569392, 46.000773],
      [-118.537119, 46.00084],
      [-118.497027, 46.00062],
      [-118.470756, 46.000632],
      [-118.37836, 46.000574],
      [-118.36779, 46.000622],
      [-118.314982, 46.000453],
      [-118.256368, 46.000439],
      [-118.25253, 46.000459],
      [-118.236584, 46.000418],
      [-118.228941, 46.000421],
      [-118.131019, 46.00028],
      [-118.126197, 46.000282],
      [-117.996911, 46.000787],
    ],
  ]);
  const [sendLat, setSendLat] = React.useState(39.828175);
  const [sendLong, setSendLong] = React.useState(-98.5795);
  const [sendAnalogLat, setSendAnalogLat] = React.useState(39.828175);
  const [sendAnalogLong, setSendAnalogLong] = React.useState(-98.5795);
  // const [sendCnty, setSendCnty] = React.useState("1");
  // const [sendAnalog, setSendAnalog] = React.useState("1");
  // const [sendState, setSendState] = React.useState("1");

  // const [timeFrame, setTimeFrame] = React.useState("");
  const [model, setModel] = React.useState("CanESM2");

  const counties = US_Counties;

  const modelNames = [
    "BNU-ESM",
    "CanESM2",
    "CNRM-CMS",
    "CSIRO-Mk3-6-0",
    "GFDL-ESM2G",
    "GFDL-ESM2M",
    "HadGEM2-CC365",
    "HadGEM2-ES365",
    "IPSL-CSMA-LR",
    "IPSL-CSMA-MR",
    "ISPL-CMSB-LR",
    "MIROC-ESM",
    "MIROC-ESM-CHEM",
    "MIROCS",
    "MRI-CGCM3",
    "NorESM1-M",
  ];

  function getCountyName1(
    countyName,
    state_id,
    cntLatLong,
    analogLatLong,
    analog,
    coordinates,
    analogCoordinates
  ) {
    setCtyName(countyName);
    setStateId(state_id);
    setCountyLat(cntLatLong);
    setAnalogLatLong(analogLatLong);
    setClosestAnalog(analog);
    setSendLat(parseFloat(cntLatLong[0]));
    setSendLong(parseFloat(cntLatLong[1]));
    setSendAnalogLat(parseFloat(analogLatLong[0]));
    setSendAnalogLong(parseFloat(analogLatLong[1]));
    setCountyCoordinates(coordinates);
    setAnalogCoordinates(analogCoordinates);
  }
  function storeName(v) {
    v = v.split(",");
    setSendLat(parseFloat(v[0]));
    setSendLong(parseFloat(v[1]));
    setSendAnalogLat(parseFloat(v[2]));
    setSendAnalogLong(parseFloat(v[3]));
    setCtyName(v[4]);
    setClosestAnalog(v[5]);
    setStateId(v[6]);
    setCountyLat([parseFloat(v[0]), parseFloat(v[1])]);
    // setCountyCoordinates(v[7]);
  }

  function storeModel(m) {
    setModel(m);
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex flexDir="column" h="100vh">
      {/* <Button mt={4} onClick={onOpen}>
        Open Modal
      </Button>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>aDF</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}

      {/* -----------------------header -----------------------*/}
      <Flex
        flexDir="column"
        // bg={changeToWhiteheader}
        // color={whiteColor}
        color="white"
        // bgGradient={[
        //   "linear(to-tr, teal.300, yellow.400)",
        //   "linear(to-t, blue.200, teal.500)",
        //   "linear(to-b, orange.100, purple.300)",
        // ]}
        // bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
        h="6vh"
        // bgGradient="linear(to-l, #7928CA, #FF0080)"
        backgroundColor="black"
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
            minH="4vH"
            backgroundColor="white"
            color="black"
          >
            <Grid templateColumns="repeat(5, 1fr)" gap={0}>
              <Box backgroundColor="teal" color="white" w="100%">
                <Text fontSize="md" p="1">
                  FILTER
                </Text>
              </Box>
              <Box w="100%">
                <Select
                  onClick={(e) => {
                    storeName(e.target.value);
                  }}
                  textAlign="center"
                  size="sm"
                  p={0}
                  placeholder={ctyName}
                >
                  {counties.features.map((cnty) => {
                    return (
                      <option
                        key={cnty.properties.NAME}
                        value={[
                          cnty.properties.LATLONG,
                          cnty.properties.ANALOG,
                          cnty.properties.NAME,
                          cnty.properties.CLOSESTANALOG,
                          cnty.properties.STATE,
                          // cnty.geometry.coordinates,
                        ]}
                      >
                        {cnty.properties.NAME}, {cnty.properties.STATE}
                      </option>
                    );
                  })}
                </Select>
              </Box>
              <Box w="100%">
                <Select size="sm" p={0} placeholder="TIMEFRAME">
                  <option value="[2020,2050]">1990 - 2020</option>
                  <option value="[2020,2050]">2020 - 2050</option>
                  <option value="[2040,2070]">2040 - 2070</option>
                </Select>
              </Box>
              <Box w="100%">
                <Select size="sm" p={0} placeholder="EMISSION SCENARIO">
                  {/* <option value="historical">RCP 4.5</option> */}
                  <option value="rcp45">RCP 4.5</option>
                  <option value="rcp85">RCP 8.5</option>
                </Select>
              </Box>
              <Box w="100%">
                <Select
                  align="center"
                  size="sm"
                  p={0}
                  placeholder={model}
                  onClick={(e) => {
                    storeModel(e.target.value);
                  }}
                >
                  {modelNames.map((indvModel, index) => (
                    <option key={indvModel} value={indvModel}>
                      {indvModel}
                    </option>
                  ))}
                </Select>
              </Box>
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
          <Flex w="100%" flexDir="column" overflow="auto" minH="60vH">
            <div>
              <Maps
                getcountyName={getCountyName1}
                sendLat={sendLat}
                sendLong={sendLong}
                sendAnalogLat={sendAnalogLat}
                sendAnalogLong={sendAnalogLong}
                countyCoordinates={countyCoordinates}
                analogCoordinates={analogCoordinates}
              />
            </div>
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
                    <Text fontWeight="bold" fontSize="large" color="red">
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
                      {closestAnalog}
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
            <Box bg="teal" w="100%" p={2} fontSize="2xl" color="white">
              <Text
                // bgGradient="linear(to-l, #7928CA, #FF0080)"
                bgClip="text"
                fontSize="2xl"
                color="white"
              >
                F&V CAMO
              </Text>
            </Box>
            <Grid templateColumns="repeat(1, 1fr)" mt={1} gap={2}>
              <Box w="100%" h="10">
                <RightDrawer
                  ctyName={ctyName}
                  closestAnalog={closestAnalog}
                  model={model}
                />
              </Box>
              {/* <Box w="100%" h="10">
                <Button
                  w="100%"
                  colorScheme="teal"
                  variant="outline"
                  fontSize="sm"
                >
                  RESULTS
                </Button>
              </Box> */}
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
                  {stateId}
                </Text>
                <Divider />
              </Box>
            </Flex>

            <Grid templateColumns="repeat(5, 1fr)" gap={1}>
              <GridItem colSpan={2} h="10">
                <Text
                  align="right"
                  fontWeight="bold"
                  color="teal"
                  // mr="1"
                  fontSize="large"
                  mt="1"
                >
                  {countyLat[1]}
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
                  // ml="-1"
                  fontSize="large"
                  mt="1"
                >
                  {countyLat[0]}
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
                Analogs have been calculated for 2664 counties in the US (2
                RCPs, 16 models, two frames (2020 –2050; 2040 –2070)​
              </ListItem>

              <ListItem mt="2%">
                Analogs are complex from the perspective of looking for
                management insights. If it hard to find one location that fits
                all criteria.
              </ListItem>
              <ListItem mt="2%">
                Lot of important information is lost by focusing on
                averages,because the distribution around the average could be
                key.
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
