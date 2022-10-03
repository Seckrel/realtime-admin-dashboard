import ServerCard from "../../components/ServerCard";
import { Paper, Stack, Grid } from "@mantine/core";
import { useContext } from "react";
import { GeneralDataContext } from "./index";
import { IData } from "../../types";
import PolarAreaChart from "./PolarAreaChar";

function VisualDashAreaGeneral() {
  const value = useContext(GeneralDataContext);
  const { GeneralData, setToggleGeneral }: any = value;
  return (
    <Stack spacing={"xs"} sx={{ isolation: "isolate" }}>
      <Paper shadow={"lg"} p={"xs"} py={50} sx={{ zIndex: 10 }}>
        <Grid>
          {GeneralData.map((serverData: IData, index: number) => (
            <>
              <Grid.Col key={index} xs={12} sm={6} md={6} lg={3}>
                <ServerCard
                  serverData={serverData}
                  setToggleGeneral={setToggleGeneral}
                />
              </Grid.Col>
            </>
          ))}
        </Grid>
      </Paper>
      <Paper shadow={"sm"} mt={-30} p={"sm"} pt={40} sx={{ zIndex: 1 }}>
        <PolarAreaChart GeneralData={GeneralData} />
      </Paper>
    </Stack>
  );
}

/**
 * 
 * Line 
 * <Line
      data={{
        labels: [
          "Today",
          "1 Day",
          "2 Day",
          "3 Day",
          "4 Day",
          "5 Day",
          "6 Day",
        ],
        datasets: [
          {
            label: `Last 7 Day | ${onlineDetails.name}`,
            data: onlineDetails.data,
            fill: true,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      }}
    />
 */

export default VisualDashAreaGeneral;
