import {
  Tabs,
  Text,
  MantineTheme,
} from "@mantine/core";
import { useState } from "react";
import HomeDashArea from "./HomeDashArea";

const TabList = [
  "Today",
  "Yesterday",
  "1 Day",
  "2 Day",
  "3 Day",
  "4 Day",
  "5 Day",
  "6 Day",
];

const TabListLabel = (value: string, index: number, currState: number) => (
  <Tabs.Tab
    value={value}
    sx={(theme: MantineTheme) => ({
      margin: "20px 0px",
      position: "relative",
      isolation: "isolate",
      "&::before": {
        content: index === currState ? "''" : null,
        background: theme.colors.blue[6],
        width: "8px",
        height: "8px",
        position: "absolute",
        left: "95%",
        transform: "rotate(45deg)",
      },
    })}
  >
    <Text>{value}</Text>
  </Tabs.Tab>
);

function DashBoard() {
  const [state, setState] = useState<number>(0);
  return (
    <>
      <Tabs
        color={"blue"}
        variant={"pills"}
        orientation="vertical"
        defaultValue={TabList[0]}
      >
        <Tabs.List position="center">
          {TabList.map((tab: string, index: number) =>
            TabListLabel(tab, index, state)
          )}
        </Tabs.List>
        <Tabs.Panel value={TabList[0]} pl="xs">
          <HomeDashArea state={state} />
        </Tabs.Panel>
      </Tabs>
    </>
  );
}

export default DashBoard;
