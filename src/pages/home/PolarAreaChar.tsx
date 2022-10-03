import { useMemo, useCallback } from "react";
import { IData } from "../../types";
import { PolarArea } from "react-chartjs-2";
import { useMantineTheme } from "@mantine/core";

interface IProps {
  GeneralData: IData[];
}

function PolarAreaChart(props: IProps) {
  const { GeneralData } = props;
  const theme = useMantineTheme();

  const dynamicColors = useCallback(() => {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  }, []);

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

  const bgColorMemo = useMemo(
    () => GeneralData.map(() => dynamicColors()),
    [GeneralData.length]
  );

  const dataMemo = useMemo(
    () => ({
      labels: GeneralData.map((datum: IData) => datum.name),
      datasets: [
        {
          label: "Online Duration Last 24 hrs",
          data: GeneralData.map((datum: IData) => datum.today),
          hoverBackgroundColor: "white",
          hoverBorderColor: "rgba(0,0,0,0.4)",
          hoverBorderWidth: 1,
          backgroundColor:
            GeneralData.length <= 8 ? DefaultBgColor : bgColorMemo,
        },
      ],
    }),
    []
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
      <PolarArea
        data={dataMemo}
        options={options}
      />
  );
}

export default PolarAreaChart;
