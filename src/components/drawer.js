import React, { useState } from "react";
import Plot from "react-plotly.js";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import Climate_Data from "./body/Climate_Data_All_Variables.json";

export default function RightDrawer(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpenD, onOpenD, onCloseD } = useDisclosure();
  var cntyClimateDataHistorical = [];
  var cntyClimateDataYearHistorical = [];
  var cntyClimateDataRCP45 = [];
  var cntyClimateDataYearRCP45 = [];
  var cntyClimateDataRCP85 = [];
  var cntyClimateDataYearRCP85 = [];
  var analogClimateData = [];
  var analogClimateDataYear = [];
  var countyName = "MIa";
  var analogName = "MNa";
  const randd = [
    ["MARICOPA", "AZ"],
    ["FRESNO", "CAa"],
    ["IMPERIAL", "CAb"],
    ["MONTEREY", "CAc"],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    // ["", ""],
    ["AROOSTOOK", "ME"],
    ["LANGLADE", "WIb"],
  ];

  randd.map((name) => {
    console.log(name[0]);
    if (props.ctyName == name[0]) {
      countyName = name[1];
    }
    if (props.closestAnalog == name[0]) {
      analogName = name[1];
    }
  });

  Climate_Data.map((climateData) => {
    // County Historical
    if (
      climateData.Location === countyName &&
      climateData.year >= "1990" &&
      climateData.year <= "2020" &&
      climateData.Scenario == "historical" &&
      climateData.Model == "CanESM2"
    ) {
      cntyClimateDataHistorical.push(climateData.HSD_86_JJA);
      cntyClimateDataYearHistorical.push(climateData.year);
    }
    // County RCP45
    if (
      climateData.Location === countyName &&
      climateData.year >= "2000" &&
      climateData.year <= "2050" &&
      climateData.Scenario == "rcp45" &&
      climateData.Model == "CanESM2"
    ) {
      cntyClimateDataRCP45.push(climateData.HSD_86_JJA);
      cntyClimateDataYearRCP45.push(climateData.year);
    }

    // County RCP85
    // if (
    //   climateData.Location === "MIa" &&
    //   climateData.year >= "2040" &&
    //   climateData.year <= "2070" &&
    //   climateData.Scenario == "rcp85" &&
    //   climateData.Model == "CanESM2"
    // ) {
    //   cntyClimateDataHistorical.push(climateData.HSD_86_JJA);
    //   cntyClimateDataYearHistorical.push(climateData.year);
    // }

    // Analog RCP85
    if (
      climateData.Location === analogName &&
      climateData.year >= "2040" &&
      climateData.year <= "2070" &&
      climateData.Scenario == "rcp85" &&
      climateData.Model == "CanESM2"
    ) {
      analogClimateData.push(climateData.HSD_86_JJA);
      analogClimateDataYear.push(climateData.year);
    }
  });
  // console.log(cntyClimateData);
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
      <Drawer size={"md"} placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">CHARTS</DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch">
              <Box h="300px">
                <Plot
                  data={[
                    {
                      x: cntyClimateDataYearHistorical,
                      y: cntyClimateDataHistorical,
                      type: "scatter",
                      mode: "lines+markers",
                      marker: { color: "red" },
                    },
                    // {
                    //   type: "bar",
                    //   marker: { color: "teal" },
                    //   x: [1, 2, 3],
                    //   y: [2, 5, 3],
                    // },
                  ]}
                  layout={{
                    width: 460,
                    height: 340,
                    title: "A Fancy Plot",
                  }}
                />
              </Box>
              <Box h="300px">
                <Plot
                  data={[
                    {
                      x: cntyClimateDataYearHistorical,
                      y: cntyClimateDataHistorical,
                      fill: "tozeroy",
                      type: "scatter",
                      mode: "none",
                      name: " MIa Historical",
                    },
                    {
                      x: cntyClimateDataYearRCP45,
                      y: cntyClimateDataRCP45,
                      fill: "tozeroy",
                      type: "scatter",
                      name: "MIa RCP45",
                    },
                    {
                      fill: "tozeroy",
                      type: "scatter",
                      x: analogClimateDataYear,
                      y: analogClimateData,
                      name: "MNa RCP85",
                    },
                  ]}
                  layout={{
                    width: 460,
                    height: 340,
                    title: "A Fancy Plot",
                  }}
                />
              </Box>
              <Box h="300px">
                <Plot
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [2, 6, 3],
                      type: "scatter",
                      mode: "markers",
                      marker: { color: "red" },
                    },
                    {
                      type: "histogram2dcontour",
                      marker: { color: "teal" },
                      x: [10, 20, 30],
                      y: [2, 5, 3],
                    },
                  ]}
                  layout={{
                    width: 460,
                    height: 340,
                    title: "A Fancy Plot",
                  }}
                />
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
