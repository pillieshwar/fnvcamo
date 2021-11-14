import React from "react";
import Plot from "react-plotly.js";
import {
  Drawer,
  DrawerBody,
  // DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  // DrawerCloseButton,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import Climate_Data from "./body/Climate_Data_All_Variables.json";
import { Select } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
// import { Icon, CloseIcon } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function RightDrawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [model, setModel] = React.useState(props.model);
  const [emissions, setEmissions] = React.useState("rcp45");
  const [emissionsKey, setEmissionsKey] = React.useState("RCP 4.5");
  // const [timeframe, setTimeframe] = React.useState("Tmin_JJA");
  // const [timeframeKey, setTimeframeKey] = React.useState("Tmin_JJA");
  const [year1, setYear1] = React.useState("2020");
  const [year2, setYear2] = React.useState("2050");

  const [variable, setVariable] = React.useState("Tmin_JJA");
  const [variable2, setVariable2] = React.useState("Tmax_JJA");
  const [variable3, setVariable3] = React.useState("HSD_95_JJA");
  const [variable4, setVariable4] = React.useState("GDD_JJA");

  // const { isOpenD, onOpenD, onCloseD } = useDisclosure();
  var cntyClimateDataHistorical = [];
  var cntyClimateDataHistorical2 = [];
  var cntyClimateDataHistorical3 = [];
  var cntyClimateDataHistorical4 = [];

  var cntyClimateDataYearHistorical = [];
  var cntyClimateDataRCP45 = [];
  var cntyClimateDataYearRCP45 = [];
  var cntyClimateDataRCP85 = [];
  var cntyClimateDataRCP852 = [];
  var cntyClimateDataRCP853 = [];
  var cntyClimateDataRCP854 = [];
  var cntyClimateDataYearRCP85 = [];
  var cntyPressureJJAHistorical = [];
  var cntyTempJJAHistorical = [];

  var analogClimateDataHistorical = [];
  var analogClimateDataHistorical2 = [];
  var analogClimateDataHistorical3 = [];
  var analogClimateDataHistorical4 = [];
  var analogClimateDataYearHistorical = [];
  var analogClimateDataRCP45 = [];
  var analogClimateDataYearRCP45 = [];
  var analogClimateDataRCP85 = [];
  var analogClimateDataYearRCP85 = [];
  // var analogPressureJJAHistorical = [];

  var countyName = "MIa";
  var analogName = "MNa";
  const randd = [
    ["MARICOPA", "AZ"],
    ["FRESNO", "CAa"],
    ["IMPERIAL", "CAb"],
    ["MONTEREY", "CAc"],
    ["YOLO", "CAd"],
    ["RIO GRANDE", "CO"],
    ["HENDRY", "FLa"],
    ["POLK", "FLb"],
    ["ST. JOHNS", "FLc"],
    ["DECATUR", "GA"],
    ["BINGHAM", "IDa"],
    ["CANYON", "IDb"],
    ["MINIDOKA", "IDc"],
    ["MONTCALM", "MIa"],
    ["ST. JOSEPH", "MIb"],
    ["DAKOTA", "MNa"],
    ["FREEBORN", "MNb"],
    ["OTTER TAIL", "MNc"],
    ["RENVILLE", "MNd"],
    ["WALSH", "ND"],
    ["GENESEE", "NY"],
    ["MARION", "ORa"],
    ["UMATILLA", "ORb"],
    ["HIDALGO", "TX"],
    ["BENTON", "WAa"],
    ["GRANT", "WAb"],
    ["SKAGIT", "WAc"],
    ["WALLA WALLA", "WAd"],
    ["FOND DU LAC", "WIa"],
    ["PORTAGE", "WIc"],
    ["AROOSTOOK", "ME"],
    ["LANGLADE", "WIb"],
  ];

  const dataVariables = [
    "Pr_Calendar",
    "Pr_DJF",
    "Pr_JJA",
    "Pr_MAM",
    "Pr_SON",
    "Tmin_Calendar",
    "Tmin_DJF",
    "Tmin_JJA",
    "Tmin_MAM",
    "Tmin_SON",
    "Tmax_Calendar",
    "Tmax_DJF",
    "Tmax_JJA",
    "Tmax_MAM",
    "Tmax_SON",
    "HSD_86_Calendar",
    "HSD_86_DJF",
    "HSD_86_JJA",
    "HSD_86_MAM",
    "HSD_86_SON",
    "HSD_95_Calendar",
    "HSD_95_DJF",
    "HSD_95_JJA",
    "HSD_95_MAM",
    "HSD_95_SON",
    "GDD_Calendar",
    "GDD_DJF",
    "GDD_JJA",
    "GDD_MAM",
    "GDD_SON",
  ];

  const modelNames = [
    "BNU-ESM",
    "CanESM2",
    "CNRM-CM5",
    "CSIRO-Mk3-6-0",
    "GFDL-ESM2G",
    "GFDL-ESM2M",
    "HadGEM2-CC365",
    // "HadGEM2-ES365",
    "IPSL-CM5A-LR",
    "IPSL-CM5A-MR",
    "IPSL-CM5B-LR",
    "MIROC-ESM",
    "MIROC-ESM-CHEM",
    // "MIROCS",
    "MRI-CGCM3",
    "NorESM1-M",
  ];

  function storeModel(m) {
    setModel(m);
  }

  function storeVariables(m) {
    setVariable(m);
  }
  function storeVariablesTimeframe(m, k) {
    m = m.split(",");
    console.log(m[1]);
    setYear1(m[0]);
    setYear2(m[1]);

    // setTimeframeKey(k);
  }

  function storeVariablesEmissions(m, k) {
    setEmissions(m);
    setEmissionsKey(k);
  }

  function storeVariables2(m) {
    setVariable2(m);
  }

  function storeVariables3(m) {
    setVariable3(m);
  }

  function storeVariables4(m) {
    setVariable4(m);
  }

  randd.map((name) => {
    // console.log(name[0]);
    if (props.ctyName === name[0]) {
      countyName = name[1];
    }
    if (props.closestAnalog === name[0]) {
      analogName = name[1];
    }
  });

  Climate_Data.map((climateData) => {
    // County Historical
    if (
      climateData.Location === countyName &&
      climateData.year >= 1990 &&
      climateData.year <= 2020 &&
      climateData.Scenario === "historical" &&
      climateData.Model === model
    ) {
      cntyClimateDataHistorical.push(climateData[variable]);
      cntyClimateDataHistorical2.push(climateData[variable2]);
      cntyClimateDataHistorical3.push(climateData[variable3]);
      cntyClimateDataHistorical4.push(climateData[variable4]);
      cntyClimateDataYearHistorical.push(climateData.year);

      cntyPressureJJAHistorical.push(climateData.Pr_JJA);
      cntyTempJJAHistorical.push(climateData.Tmax_JJA);
    }
    // // County RCP45
    // if (
    //   climateData.Location === countyName &&
    //   climateData.year >= "2000" &&
    //   climateData.year <= "2050" &&
    //   climateData.Scenario === "rcp45" &&
    //   climateData.Model === model
    // ) {
    //   cntyClimateDataRCP45.push(climateData[variable]);
    //   cntyClimateDataYearRCP45.push(climateData.year);
    // }
    // County RCP85
    if (
      climateData.Location === countyName &&
      climateData.year >= year1 &&
      climateData.year <= year2 &&
      climateData.Scenario === emissions &&
      climateData.Model === model
    ) {
      cntyClimateDataRCP85.push(climateData[variable]);
      cntyClimateDataRCP852.push(climateData[variable2]);
      cntyClimateDataRCP853.push(climateData[variable3]);
      cntyClimateDataRCP854.push(climateData[variable4]);
      cntyClimateDataYearRCP85.push(climateData.year);
    }

    // Analog Historical
    if (
      climateData.Location === analogName &&
      climateData.year >= "1990" &&
      climateData.year <= "2020" &&
      climateData.Scenario === "historical" &&
      climateData.Model === model
    ) {
      analogClimateDataHistorical.push(climateData[variable]);
      analogClimateDataHistorical2.push(climateData[variable2]);
      analogClimateDataHistorical3.push(climateData[variable3]);
      analogClimateDataHistorical4.push(climateData[variable4]);
      analogClimateDataYearHistorical.push(climateData.year);
    }

    // // Analog RCP45
    // if (
    //   climateData.Location === analogName &&
    //   climateData.year >= "2020" &&
    //   climateData.year <= "2050" &&
    //   climateData.Scenario === "rcp45" &&
    //   climateData.Model === model
    // ) {
    //   analogClimateDataRCP45.push(climateData[variable]);
    //   analogClimateDataYearRCP45.push(climateData.year);
    // }

    // Analog RCP85
    if (
      climateData.Location === analogName &&
      climateData.year >= "2040" &&
      climateData.year <= "2070" &&
      climateData.Scenario === emissions &&
      climateData.Model === model
    ) {
      analogClimateDataRCP85.push(climateData[variable]);
      analogClimateDataYearRCP85.push(climateData.year);
    }
  });

  return (
    <Box w="100%" h="10">
      <Button
        w="100%"
        colorScheme="teal"
        variant="outline"
        onClick={onOpen}
        fontSize="sm"
        _hover={{
          bgGradient: "linear(to-r, black.500, gray.500)",
        }}
      >
        VIEW CHARTS
      </Button>
      <Drawer size={"full"} placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            // bgGradient="linear(to-l, #7928CA, #FF0080)"
            color="teal"
            borderBottomWidth="1px"
          >
            <Grid templateColumns="repeat(7, 1fr)" gap={2}>
              <GridItem colSpan={3}>
                {props.ctyName +
                  " vs " +
                  props.closestAnalog +
                  " (" +
                  model +
                  " model)"}
              </GridItem>
              <Box w="100%" h="10">
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

              <Box w="100%" h="10">
                <Select
                  align="center"
                  size="sm"
                  p={0}
                  placeholder={emissionsKey}
                  onClick={(e) => {
                    storeVariablesEmissions(e.target.value, e.target.key);
                  }}
                >
                  <option key="RCP 4.5" value="rcp45">
                    RCP 4.5
                  </option>
                  <option key="rcp85" value="rcp85">
                    RCP 8.5
                  </option>
                </Select>
              </Box>
              <Box w="100%" h="10">
                <Select
                  align="center"
                  size="sm"
                  p={0}
                  placeholder="TIMEFRAME"
                  onClick={(e) => {
                    storeVariablesTimeframe(e.target.value, e.target.key);
                  }}
                >
                  <option key="2020 - 2050" value="2020,2050">
                    2020 - 2050
                  </option>
                  <option key="2040 - 2070" value="2040,2070">
                    2040 - 2070
                  </option>
                </Select>
              </Box>
              <Box w="100%" h="10" onClick={onClose}>
                <Button float="right">
                  <CloseIcon w={6} h={7} color="red.500" />
                </Button>
              </Box>
            </Grid>
          </DrawerHeader>
          {/* <DrawerBody bgColor="gray.200"> */}
          <DrawerBody>
            <VStack spacing={7} align="stretch">
              <Grid ml="7" templateColumns="repeat(2, 1fr)" gap={1}>
                <Box
                  // display="flex"
                  overflow="auto"
                  mt="2"
                  ml=""
                  h="390px"
                  w="92%"
                  backgroundColor="white"
                >
                  <Select
                    float="center"
                    size="sm"
                    width="30%"
                    zIndex="100"
                    p={0}
                    placeholder={variable}
                    onClick={(e) => {
                      storeVariables(e.target.value);
                    }}
                  >
                    {dataVariables.map((indvVariables, index) => (
                      <option key={indvVariables} value={indvVariables}>
                        {indvVariables}
                      </option>
                    ))}
                  </Select>

                  <Plot
                    ml="3"
                    data={[
                      {
                        // self HSD - Historical
                        x: cntyClimateDataHistorical,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.ctyName + "<br>" + " Historical",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "red",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },

                      {
                        // Analog analogClimateData - Historical
                        x: analogClimateDataHistorical,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.closestAnalog + "<br>" + " Historical",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "green",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },
                      {
                        // Self cntyClimateDataRCP85 - Mid-century
                        x: cntyClimateDataRCP85,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // hoverlabel_align: "left",

                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.ctyName + "<br>" + " Mid-Century",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "red",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },
                    ]}
                    layout={{
                      width: 550,
                      height: 350,
                      traceorder: "reversed",
                      legend: {
                        // bgcolor: "magenta",
                        x: -0.4,
                        y: 1.5,
                      },
                      points: "outliers",
                      title: variable,
                      legendgrouptitle_font_size: 10,
                      // orientation: "h",
                      showlegend: false,
                    }}
                  />
                </Box>
                <Box
                  overflow="auto"
                  mt="2"
                  ml=""
                  h="390px"
                  w="92%"
                  backgroundColor="white"
                >
                  <Select
                    align="center"
                    size="sm"
                    width="30%"
                    zIndex="100"
                    p={0}
                    placeholder={variable2}
                    onClick={(e) => {
                      storeVariables2(e.target.value);
                    }}
                  >
                    {dataVariables.map((indvVariables, index) => (
                      <option key={indvVariables} value={indvVariables}>
                        {indvVariables}
                      </option>
                    ))}
                  </Select>
                  <Plot
                    data={[
                      {
                        // self HSD - Historical
                        x: cntyClimateDataHistorical2,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.ctyName + "<br>" + " Historical",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "red",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },

                      {
                        // Analog analogClimateDataHistorical2 - Historical
                        x: analogClimateDataHistorical2,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.closestAnalog + "<br>" + " Historical",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "green",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },
                      {
                        // Self cntyClimateDataRCP45 - Mid-century
                        x: cntyClimateDataRCP852,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // hoverlabel_align: "left",

                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.ctyName + "<br>" + " Mid-Century",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "red",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },
                    ]}
                    layout={{
                      width: 550,
                      height: 350,
                      traceorder: "reversed",

                      // plot_bgcolor: "",
                      legend: {
                        // bgcolor: "magenta",
                        x: -0.4,
                        y: 1.5,
                      },
                      points: "outliers",
                      title: variable2,
                      // orientation: "h",
                      showlegend: false,
                    }}
                  />
                </Box>
              </Grid>

              <Grid templateColumns="repeat(2, 1fr)" gap={1}>
                <Box
                  overflow="auto"
                  mt=""
                  ml="7"
                  h="390px"
                  w="92%"
                  backgroundColor="white"
                >
                  <Select
                    align="center"
                    size="sm"
                    width="30%"
                    zIndex="100"
                    p={0}
                    placeholder={variable3}
                    onClick={(e) => {
                      storeVariables3(e.target.value);
                    }}
                  >
                    {dataVariables.map((indvVariables, index) => (
                      <option key={indvVariables} value={indvVariables}>
                        {indvVariables}
                      </option>
                    ))}
                  </Select>
                  <Plot
                    data={[
                      {
                        // self HSD - Historical
                        x: cntyClimateDataHistorical3,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.ctyName + "<br>" + " Historical",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "red",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },

                      {
                        // Analog analogClimateData - Historical
                        x: analogClimateDataHistorical3,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.closestAnalog + "<br>" + " Historical",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "green",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },
                      {
                        // Self cntyClimateDataRCP85 - Mid-century
                        x: cntyClimateDataRCP853,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // hoverlabel_align: "left",

                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.ctyName + "<br>" + " Mid-Century",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "red",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },
                    ]}
                    layout={{
                      width: 550,
                      height: 350,
                      traceorder: "reversed",
                      legend: {
                        // bgcolor: "magenta",
                        x: -0.4,
                        y: 1.5,
                      },
                      points: "outliers",
                      title: variable3,
                      // orientation: "h",
                      showlegend: false,
                    }}
                  />
                </Box>
                <Box
                  overflow="auto"
                  mt=""
                  ml="3"
                  h="390px"
                  w="92%"
                  backgroundColor="white"
                >
                  <Select
                    align="center"
                    size="sm"
                    width="30%"
                    zIndex="100"
                    p={0}
                    placeholder={variable4}
                    onClick={(e) => {
                      storeVariables4(e.target.value);
                    }}
                  >
                    {dataVariables.map((indvVariables, index) => (
                      <option key={indvVariables} value={indvVariables}>
                        {indvVariables}
                      </option>
                    ))}
                  </Select>
                  <Plot
                    data={[
                      {
                        // self HSD - Historical
                        x: cntyClimateDataHistorical4,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.ctyName + "<br>" + " Historical",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "red",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },

                      {
                        // Analog analogClimateDataHistorical2 - Historical
                        x: analogClimateDataHistorical4,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.closestAnalog + "<br>" + " Historical",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "green",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },
                      {
                        // Self cntyClimateDataRCP45 - Mid-century
                        x: cntyClimateDataRCP854,
                        type: "violin",
                        violinmode: "overlay",
                        box: {
                          visible: true,
                        },
                        hoverinfo: "x",
                        // hoverlabel_align: "left",

                        // visible: "legendonly",
                        boxpoints: true,
                        name: props.ctyName + "<br>" + " Mid-Century",
                        marker: {
                          color: "rgb(7,40,89)",
                        },
                        boxpoints: "Outliers",
                        line: {
                          color: "red",
                        },
                        opacity: 0.6,
                        meanline: {
                          visible: true,
                        },
                        x0: "OEE",
                      },
                    ]}
                    layout={{
                      width: 550,
                      height: 350,
                      traceorder: "reversed",
                      legend: {
                        // bgcolor: "magenta",
                        x: -0.4,
                        y: 1.5,
                      },
                      points: "outliers",
                      title: variable4,
                      // orientation: "h",
                      showlegend: false,
                    }}
                  />
                </Box>
                {/* <Box h="400px">
                <Plot
                  data={[
                    {
                      x: (cntyPressureJJAHistorical, "total_bill"),
                      // y: cntyTempJJAHistorical,
                      type: "violin",
                      box: {
                        visible: true,
                      },
                      boxpoints: false,
                      line: {
                        color: "black",
                      },
                      fillcolor: "#8dd3c7",
                      opacity: 0.6,
                      meanline: {
                        visible: true,
                      },
                      y0: "Total Bill",
                      xaxis: {
                        zeroline: false,
                      },
                    },
                    //   mode: "markers",
                    //   marker: { color: "red" },
                    //   name: "Pressure vs Temprature1",
                    // },
                    // {
                    //   type: "histogram2dcontour",
                    //   marker: { color: "teal" },
                    //   x: cntyPressureJJAHistorical,
                    //   y: cntyTempJJAHistorical,
                    //   name: "Pressure vs Temprature",
                    // },
                  ]}
                  layout={{
                    width: 700,
                    height: 400,
                    title: "2D Density Plot (Pressure vs Temprature)",
                  }}
                />
              </Box> */}
              </Grid>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
