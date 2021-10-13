import React from "react";
import { Box } from "@chakra-ui/react";
import { AspectRatio } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

export default function Body() {
  return (
    <Box bg="grey" w="100%" p={4} color="white">
      <Grid
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem colSpan={4} rowSpan={2} bg="papayawhip" />
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem colSpan={4} rowSpan={2} bg="tomato" />
      </Grid>
      <AspectRatio ratio={16 / 9}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
          alt="demo1"
          id="map1"
        />
      </AspectRatio>
    </Box>
  );
}
