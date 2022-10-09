import { Bar } from "react-chartjs-2";
import { BarDataWorker } from "../../worker/BarWorker";
import { useState, useEffect, useMemo } from "react";
import { IData } from "../../types";
import { DEFAULT_BG_COLOR } from "../../const";
import { ColorGenWorker } from "../../worker/ColorGenWorker";
import { useViewportSize } from "@mantine/hooks";
import ChartTemplate from "./ChartTemplate";

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
  const [horizontalChart, setHorizontalChart] = useState<boolean>(true);
  const { width } = useViewportSize();

  const chartDataMemo = useMemo(
    () => ({
      labels: chartData?.names,
      datasets: [
        {
          label: "My First dataset" as const,
          backgroundColor: chartColor,
          borderColor: "rgb(255, 99, 132)" as const,
          data: chartData?.activePercentages,
        },
      ],
    }),
    [chartData]
  );

  const options = useMemo(
    () => ({
      indexAxis: horizontalChart ? ("x" as const) : ("y" as const),
      scales: { y: { min: 0, max: 100 }, x: { min: 0, max: 100 } },
    }),
    [horizontalChart]
  );

  useEffect(() => {
    if (width < 900 || data.subModules.length > 14) setHorizontalChart(false);
    return () => setHorizontalChart(true);
  }, [width]);

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
    <ChartTemplate
      skeletonFlag={chartData === null}
      chartData={chartDataMemo}
      options={options}
      Chart={Bar}
      type={'bar'}
    />
  );
}

export default BarGraphChart;
