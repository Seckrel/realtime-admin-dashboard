import { Bar } from "react-chartjs-2";
import { BarDataWorker } from "../../worker/BarWorker";
import { useState, useEffect, useMemo } from "react";
import { IData } from "../../types";
import { DEFAULT_BG_COLOR } from "../../const";
import { ColorGenWorker } from "../../worker/ColorGenWorker";
import { Skeleton } from "@mantine/core";

interface IChartData {
  names: string[];
  activePercentages: string;
}

interface IPros {
  data: IData;
}

function BarGraphChart({ data }: IPros) {
  const [chartData, setChartData] = useState<IChartData | null>(null);
  const [chartColor, setChartColor] = useState(DEFAULT_BG_COLOR);
  const chartDataMemo = useMemo(
    () => ({
      labels: chartData?.names,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: chartColor,
          borderColor: "rgb(255, 99, 132)",
          data: chartData?.activePercentages,
        },
      ],
    }),
    [chartData]
  );
  useEffect(() => {
    const worker = new Worker(BarDataWorker);
    worker.postMessage(data);
    worker.onmessage = (e) => setChartData(e.data);
    return () => worker.terminate();
  }, []);

  useEffect(() => {
    if (data.subModules.length !== 7) {
      const worker = new Worker(ColorGenWorker);
      worker.postMessage(data.subModules.length);
      worker.onmessage = (e) => setChartColor(e.data);
      return () => worker.terminate();
    }
  }, []);

  return (
    <Skeleton visible={chartData === null} radius="xl">
      <Bar
        data={chartDataMemo}
        options={{ scales: { y: { min: 0, max: 100 } } }}
      />
    </Skeleton>
  );
}

export default BarGraphChart;
