import { Skeleton, Box, ActionIcon, Paper, Group, Stack } from "@mantine/core";
import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconFilter,
} from "@tabler/icons";
import { DateRangePicker, DateRangePickerValue } from "@mantine/dates";
import { ChartOptions, ChartData } from "chart.js";
import { Chart_Paddding_X } from "../../const";
import { useState, useContext } from "react";
import { GeneralDataContext } from "../../pages/home";
import { globalStyles } from "../../mantineStyles";

interface IProps {
  skeletonFlag: any;
  options?: ChartOptions<"line" | "bar">;
  chartData: ChartData;
  Chart: any;
  type: string;
}

function ChartTemplate(props: IProps) {
  const { skeletonFlag, chartData, options, Chart, type } = props;
  const [fullScreenChart, setFullScreenChart] = useState<boolean>(false);
  const [filterFlag, setFilterFlag] = useState<boolean>(false);
  const [dateRange, setDateRange] = useState<DateRangePickerValue>([
    null,
    null,
  ]);
  const { classes } = globalStyles();
  const toggleFullScreen = () => setFullScreenChart(!fullScreenChart);
  const toggleFilterFlag = () => setFilterFlag(!filterFlag);

  const GeneralData = useContext(GeneralDataContext);

  return (
    <>
      <Skeleton visible={skeletonFlag} radius="xl">
        <Box px={10}>
          <Stack>
            <Group position="right">
              <ActionIcon onClick={toggleFullScreen}>
                <IconArrowsMaximize />
              </ActionIcon>
              {type === "line" && (
                <ActionIcon onClick={toggleFilterFlag}>
                  <IconFilter />
                </ActionIcon>
              )}
            </Group>
            {type === "line" && filterFlag && (
              <Box px={10} my={10}>
                <DateRangePicker
                  allowSingleDateInRange
                  clearable
                  placeholder="By Date"
                  value={dateRange}
                  maxDate={new Date(Date.now())}
                  onChange={setDateRange}
                  sx={{
                    width: "33%",
                  }}
                />
              </Box>
            )}
          </Stack>
        </Box>
        <Box my={10} sx={{ padding: Chart_Paddding_X }}>
          <Paper shadow={"xl"}>
            <Chart
              data={chartData}
              options={options}
              // style={{
              //   backgroundColor:
              //     theme.colorScheme === "dark" ? "red" : "yellow",
              // }}
            />
          </Paper>
        </Box>
      </Skeleton>
      {fullScreenChart && (
        <div className="center-full">
          <div>
            <Box>
              <ActionIcon ml={"auto"} onClick={toggleFullScreen}>
                <Paper shadow={"lg"} p={"sm"}>
                  <IconArrowsMinimize />
                </Paper>
              </ActionIcon>
            </Box>
            <Chart
              data={chartData}
              options={options}
              className={classes.backgroundColorScheme}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ChartTemplate;
