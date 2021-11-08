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

export default function RightDrawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [model, setModel] = React.useState(props.model);

  // const { isOpenD, onOpenD, onCloseD } = useDisclosure();
  var cntyClimateDataHistorical = [];
  var cntyClimateDataYearHistorical = [];
  var cntyClimateDataRCP45 = [];
  var cntyClimateDataYearRCP45 = [];
  var cntyClimateDataRCP85 = [];
  var cntyClimateDataYearRCP85 = [];
  var cntyPressureJJAHistorical = [];
  var cntyTempJJAHistorical = [];

  var analogClimateDataHistorical = [];
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

  function storeModel(m) {
    setModel(m);
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
      climateData.year >= "1990" &&
      climateData.year <= "2020" &&
      climateData.Scenario === "historical" &&
      climateData.Model === model
    ) {
      cntyClimateDataHistorical.push(climateData.HSD_86_JJA);
      cntyClimateDataYearHistorical.push(climateData.year);

      cntyPressureJJAHistorical.push(climateData.Pr_JJA);
      cntyTempJJAHistorical.push(climateData.Tmax_JJA);
    }
    // County RCP45
    if (
      climateData.Location === countyName &&
      climateData.year >= "2000" &&
      climateData.year <= "2050" &&
      climateData.Scenario === "rcp45" &&
      climateData.Model === model
    ) {
      cntyClimateDataRCP45.push(climateData.HSD_86_JJA);
      cntyClimateDataYearRCP45.push(climateData.year);
    }

    // County RCP85
    if (
      climateData.Location === countyName &&
      climateData.year >= "2040" &&
      climateData.year <= "2070" &&
      climateData.Scenario === "rcp85" &&
      climateData.Model === model
    ) {
      cntyClimateDataRCP85.push(climateData.HSD_86_JJA);
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
      analogClimateDataHistorical.push(climateData.HSD_86_JJA);
      analogClimateDataYearHistorical.push(climateData.year);
    }

    // Analog RCP45
    if (
      climateData.Location === analogName &&
      climateData.year >= "2020" &&
      climateData.year <= "2050" &&
      climateData.Scenario === "rcp45" &&
      climateData.Model === model
    ) {
      analogClimateDataRCP45.push(climateData.HSD_86_JJA);
      analogClimateDataYearRCP45.push(climateData.year);
    }

    // Analog RCP85
    if (
      climateData.Location === analogName &&
      climateData.year >= "2040" &&
      climateData.year <= "2070" &&
      climateData.Scenario === "rcp85" &&
      climateData.Model === model
    ) {
      analogClimateDataRCP85.push(climateData.HSD_86_JJA);
      analogClimateDataYearRCP85.push(climateData.year);
    }
  });
  console.log(cntyTempJJAHistorical);
  return (
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
      <Drawer size={"xl"} placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader color="teal" borderBottomWidth="1px">
            {props.ctyName +
              " vs " +
              props.closestAnalog +
              " (" +
              model +
              " model)"}

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
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Box h="400px">
                <Plot
                  data={[
                    // {
                    //   y: cntyClimateDataHistorical,
                    //   type: "box",
                    //   name: "Wiskers and Outliers0",
                    //   marker: {
                    //     color: "rgb(107,174,214)",
                    //   },
                    //   boxpoints: "Outliers",
                    // },
                    // {
                    //   y: analogClimateDataHistorical,
                    //   type: "box",
                    //   name: "Wiskers and Outliers7",
                    //   marker: {
                    //     color: "rgb(107,174,214)",
                    //   },
                    //   boxpoints: "Outliers",
                    // },
                    {
                      x: cntyClimateDataRCP45,
                      type: "violin",
                      violinmode: "overlay",
                      box: {
                        visible: true,
                      },
                      boxpoints: true,
                      name: props.ctyName + " RCP45",
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
                      x: analogClimateDataRCP45,
                      type: "violin",
                      violinmode: "overlay",
                      box: {
                        visible: true,
                      },
                      mode: "overlay",
                      boxpoints: true,
                      name: props.closestAnalog + " RCP45",
                      marker: {
                        color: "rgb(107,174,214)",
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
                    // {
                    //   y: cntyClimateDataRCP85,
                    //   type: "box",
                    //   name: props.ctyName + " RCP85",
                    //   marker: {
                    //     color: "rgb(124,12,100)",
                    //   },
                    //   boxpoints: "Outliers",
                    // },
                    // {
                    //   y: analogClimateDataRCP85,
                    //   type: "box",
                    //   name: props.closestAnalog + " RCP85",
                    //   marker: {
                    //     color: "rgb(214,12,140)",
                    //   },
                    //   boxpoints: "Outliers",
                    // },
                  ]}
                  layout={{
                    width: 840,
                    height: 400,
                    title: "Box Plot",
                  }}
                />
              </Box>
              <Box h="400px">
                <Plot
                  data={[
                    {
                      x: cntyClimateDataYearHistorical,
                      y: cntyClimateDataHistorical,
                      fill: "tozeroy",
                      type: "scatter",
                      mode: "none",
                      name: props.ctyName + " Historical",
                    },
                    {
                      x: cntyClimateDataYearRCP45,
                      y: cntyClimateDataRCP45,
                      fill: "tozeroy",
                      type: "scatter",
                      name: props.ctyName + " RCP45",
                    },
                    {
                      fill: "tozeroy",
                      type: "scatter",
                      x: analogClimateDataYearRCP85,
                      y: analogClimateDataRCP85,
                      name: props.closestAnalog + " RCP85",
                    },
                  ]}
                  layout={{
                    width: 840,
                    height: 400,
                    title: " Area Plot",
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
