import { Line } from "react-chartjs-2";
import { useMemo, useState, useEffect } from "react";
import { DEFAULT_BG_COLOR } from "../../const";
import { ColorGenWorker } from "../../worker/ColorGenWorker";
import ChartTemplate from "./ChartTemplate";
import { useMantineTheme } from "@mantine/core";

interface IProps {
  lastSevenDay: number[];
}

const LABELS = ["Today", "1 Day", "2 Day", "3 Day", "4 Day", "5 Day", "6 Day"];

function LineGraphChart({ lastSevenDay }: IProps) {
  const [chartColor, setChartColor] = useState<string[]>(DEFAULT_BG_COLOR);
  const theme = useMantineTheme();

  const lineData = useMemo(
    () => ({
      labels: LABELS,
      datasets: [
        {
          label: "Last Seven Day",
          backgroundColor:
            theme.colorScheme === "light"
              ? "rgba(0, 0, 0,0.5)"
              : "rgba(255, 255, 255, 0.5)",
          borderColor:
            theme.colorScheme === "light"
              ? "rgba(0, 0, 0,0.5)"
              : "rgba(255, 255, 255, 0.5)",
          hoverBorderColor: "white",
          data: [0, 10, 5, 2, 20, 30, 45],
          borderWidth: 1,
          pointHoverRadius: 15,
          pointRadius: 5,
          pointBackgroundColor: chartColor,
        },
      ],
    }),
    [theme.colorScheme]
  );

  const options = {
    animation: {
      duration: 500,
    },
    scales: {
      y: { min: 0, suggestedMax: 70 },
    },
  };

  useEffect(() => {
    if (lastSevenDay.length > 8) {
      const worker = new Worker(ColorGenWorker);
      worker.postMessage(lastSevenDay.length);
      worker.onmessage = (e) => setChartColor(e.data);
    }
  }, []);

  return (
    <ChartTemplate
      chartData={lineData}
      skeletonFlag={lastSevenDay.length <= 0}
      Chart={Line}
      options={options}
      type={"line"}
    />
  );
}

export default LineGraphChart;
