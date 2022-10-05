import { colorGenerator } from "../utils/chart.utils";
import { WorkerMaker } from "./WorkerMarker.utils";

const ColorGenWorker = () => {
  self.onmessage = (e) => {
    const n = e.data;
    const colors: string[] = [];

    const colorGenerator = () => {
      var r = Math.floor(Math.random() * 255);
      var g = Math.floor(Math.random() * 255);
      var b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
    };

    for (let i = 0; i < n; i++) colors.push(colorGenerator());
    self.postMessage(colors);
  };
};

const PABgColor_script = WorkerMaker(ColorGenWorker);

export { PABgColor_script as ColorGenWorker };
