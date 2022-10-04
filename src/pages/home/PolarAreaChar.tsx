import { useMemo, useState, useEffect, memo } from "react";
import { IData } from "../../types";
import { PolarArea } from "react-chartjs-2";
import { useMantineTheme, Skeleton } from "@mantine/core";
import { PADataWorker, PABgColorWorker } from "../../worker/PolarAreaWorker";

interface IProps {
  GeneralData: IData[];
}

interface IChartData {
  names: Object;
  data: Object;
}

function PolarAreaChart(props: IProps) {
  const { GeneralData } = props;
  const theme = useMantineTheme();
  const [chartData, setChartData] = useState<IChartData | null>(null);
  const [chartBgColor, setChartBgColor] = useState();

  useEffect(() => {
    const worker = new Worker(PADataWorker);
    worker.postMessage(GeneralData);
    worker.onmessage = (e) => setChartData(e.data);
    return () => worker.terminate();
  }, []);


  useEffect(() => {
    if (GeneralData.length !== 8) {
      const worker = new Worker(PABgColorWorker);
      worker.postMessage(GeneralData.length);
      worker.onmessage = (e) => setChartBgColor(e.data);
    }
  }, [GeneralData.length]);

  const DefaultBgColor = [
    "rgb(255, 99, 132)",
    "rgb(75, 192, 192)",
    "rgb(255, 205, 86)",
    "rgb(201, 203, 207)",
    "rgb(54, 162, 235)",
    "rgb(86, 99, 235)",
    "rgb(192, 75, 255)",
    "rgb(203, 192, 86)",
  ];


  const dataMemo = useMemo(
    () => ({
      labels: chartData?.names,
      datasets: [
        {
          label: "Online Duration Last 24 hrs",
          data: chartData?.data,
          hoverBackgroundColor: "rgba(0, 0, 0,0.1)",
          hoverBorderColor: "rgba(0,0,0,0.4)",
          hoverBorderWidth: 1,
          backgroundColor:
            GeneralData.length <= 8 ? DefaultBgColor : chartBgColor,
        },
      ],
    }),
    [chartData]
  );

  const options = {
    animation: {
      duration: 500,
    },
    plugins: {
      legend: {
        position: "bottom",
        title: {
          display: true,
          color: theme.colorScheme === "dark" ? "white" : "black",
        },
      },
    },

    responsive: true,
    scales: {
      r: {
        min: 0,
        max: 24,
        ticks: {
          stepSize: 4,
          backdropColor:
            theme.colorScheme === "dark"
              ? "rgba(255,255,255,0.2)"
              : "rgba(255,255,255,0.2)",
          color: theme.colorScheme === "dark" ? "white" : "grey",
          z: 999,
        },
        grid: {
          color:
            theme.colorScheme === "dark"
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
        },
      },
    },
  };

  return (
    <Skeleton visible={chartData === null} radius="xl">
      <PolarArea data={dataMemo} options={options} />
    </Skeleton>
  );
}

export default memo(PolarAreaChart);
