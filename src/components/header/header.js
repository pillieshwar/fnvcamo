import React from "react";
import Body from "../body/body";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

export default function Header(){
    return(
        <div>
            <Tabs defaultIndex={0} variant="unstyled" size="lg" align="center" >
  <TabList mb="1em">
    <Tab _selected={{ color: "green"}} >HOME</Tab>
    <Tab _selected={{ color: "green"}}>ANALOG TOOL</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <Body/>
    </TabPanel>
  </TabPanels>
</Tabs>
        </div>
    )
}
