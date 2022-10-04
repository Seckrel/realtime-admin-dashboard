import { WorkerMaker } from "./WorkerMarker.utils";
import { IData } from "../types";
import { colorGenerator } from "../utils/chart.utils";

const PADataWorker = () => {
  self.onmessage = (e) => {
    const GeneralData = e.data;
    console.log("working");
    const names = GeneralData.map((datum: IData) => datum.name);
    const data = GeneralData.map((datum: IData) => datum.today);
    self.postMessage({ names: names, data: data });
  };
};

const PABgColorWorker = () => {
  self.onmessage = (e) => {
    const n = e.data;
    const colors: string[] = [];
    for (let i = 0; i < n; i++) colors.push(colorGenerator());
    self.postMessage(colors);
  };
};

const worker_script = WorkerMaker(PADataWorker);
const PABgColor_script = WorkerMaker(PABgColorWorker);

export { worker_script as PADataWorker, PABgColor_script as PABgColorWorker };
