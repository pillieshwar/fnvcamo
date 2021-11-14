import React from "react";
// import Body from "../body/body";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
// import AnalogTool from "../analogTool/analogToolMain";
// import Navigate from "../navigate";
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

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      {/* <Button mt={4}>
        Open Modal
      </Button> */}
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="teal">
            Fruit & Veg Climate Analog Tool
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>Overview</Tab>
                <Tab>Climate Analog</Tab>
                <Tab>Definition of Climate</Tab>
                <Tab>Climate Distance</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <p>
                    This tool provides a map of current and future climate
                    analogs for Fruit and Veg counties in an attempt to
                    understand the question 'Where do we find a climate today
                    that will resemble the future climate of a location?'.
                  </p>
                  <br></br>
                  <p>
                    You can select from many different definitions for 'climate'
                    so that the resulting climate analogs represent locations of
                    similar climates for a multitude of applications such as
                    ecological analogs, fire danger analogs and even energy
                    heating/cooling analogs. The maps show similar climates in
                    green colors and less similar climates in yellow or red
                    colors or transparency.
                    <br></br> <br></br> In this way, similar climate analogs are
                    shown as regions of climate similarity.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    <b>Climate Analogs:</b> Climate analogs help us to answer
                    the question, 'Where do we find a climate today that will
                    resemble the future climate of a location'? Climate analogs
                    are locations (i.e. pixels) that have a similar current day
                    climatic condition to either the present day or projected
                    future climate of a location of interest.
                  </p>
                  <br></br>
                  <p>
                    <b>Definition of Climate: </b>The climate of a location
                    captures not only the typical temperatures and precipitation
                    seen at a location but the typical ecoosystem, agriculture,
                    fire danger, and many other characterizations of the
                    climate. Depending on the climate definition used, the
                    resulting climate analogs may differ widely. In this tool,
                    there are many definitions of climate to choose from. Click
                    the tab on 'Definition of Climate' to learn more about the
                    definitions of climate available in this tool.
                  </p>
                  <br></br>
                  <p>
                    <b>Climate Distance :</b> Climate similarity is determined
                    by using a measure for the distance between two climates.
                    When the climate distance between two locations is close to
                    zero, we say the two locations have a similar climate.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    Climate for a region has many different meanings depending
                    on the application. For example, the climate for planting
                    trees may be best characterized by looking at the typical
                    chill hours accumulated, the growing degree days accumulated
                    or frost risk in certain months. For a wildfire application,
                    assessing the climate of a region will need to characterize
                    the length of the fire season, the peak vegetation dryness
                    or another measure of fire danger. <br></br> <br></br>While
                    climate can be defined with just a single variable, adding
                    more variables to the definition of climate increases the
                    value of the climate analogs by providing more relevant
                    information for future planning.
                  </p>
                </TabPanel>
                <TabPanel>
                  <p>
                    To determine the similarity of two climates, we define a
                    standardized climate distance, sigma. <br></br>
                    When the climate is defined in terms of just one variable,
                    sigma is in units of standard deviations, i.e. a Z-score.
                    For example, a climate distance sigma = 1 means that the
                    location has a climate that is 1 standard deviation away
                    from the target climate. For a metric like annual total
                    precipitation, this means that the analog location has an
                    annual total precipitation that is 1 standard deviation from
                    the annual precipitation of the target location.
                    <br></br>
                    When climate is defined in terms of more than one variable,
                    the climate distance, sigma, is calculated using the
                    Mahalanobis distance to calculate a more generalized measure
                    of climate distance. This calculation uses the covariance
                    structure among the variables from historical inter-annual
                    variability. When the variables used to describe climate are
                    not independent, i.e. minimum and maximum annual
                    temperature, the Mahalanobis distance takes this into
                    account to produce a better measure of climate distance over
                    just the standard deviations in each metric.
                    <br></br>
                    <br></br>The following are properties of the climate
                    distance, sigma: <br></br>
                    1) A climate distance of 0 indicates a perfect match of the
                    climate of the analog location with the target location.{" "}
                    <br></br>
                    2) A climate distance of 3 would represent roughly 3
                    standard deviations away of the climate of the analog
                    location from the target location. This is considered far
                    away in terms of climate.
                  </p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Tabs defaultIndex={0} variant="unstyled" size="md" align="center">
        <TabList mb="1em">
          <Tab _selected={{ color: "green" }} onClick={onOpen}>
            OVERVIEW
          </Tab>
          <Tab _selected={{ color: "green" }}>ANALOG TOOL</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>{/* <Navigate /> */}</TabPanel>
          <TabPanel>{/* <AnalogTool /> */}</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}
