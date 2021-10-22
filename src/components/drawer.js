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

export default function RightDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpenD, onOpenD, onCloseD } = useDisclosure();

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
                      x: [1, 2, 3],
                      y: [2, 6, 3],
                      type: "scatter",
                      mode: "lines+markers",
                      marker: { color: "red" },
                    },
                    {
                      type: "bar",
                      marker: { color: "teal" },
                      x: [1, 2, 3],
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
              <Box h="300px">
                <Plot
                  data={[
                    {
                      x: [1, 2, 3],
                      y: [2, 6, 3],
                      type: "scatter",
                      mode: "lines+markers",
                      marker: { color: "red" },
                    },
                    { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
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
                      mode: "lines+markers",
                      marker: { color: "red" },
                    },
                    {
                      type: "bar",
                      marker: { color: "teal" },
                      x: [1, 2, 3],
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
