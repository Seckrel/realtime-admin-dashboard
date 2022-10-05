import { WorkerMaker } from "./WorkerMarker.utils";
import { IData } from "../types";

const PADataWorker = () => {
  self.onmessage = (e) => {
    const GeneralData = e.data;
    const names = GeneralData.map((datum: IData) => datum.name);
    const data = GeneralData.map((datum: IData) => datum.today);
    self.postMessage({ names: names, data: data });
  };
};


const worker_script = WorkerMaker(PADataWorker);

export { worker_script as PADataWorker };
