import { WorkerMaker } from "./WorkerMarker.utils";
import { ISubModules } from "../types";

const BarDataWorker = () => {
  self.onmessage = (e) => {
    const module = e.data;
    console.log("working bar worker", module);
    const names = module.subModules.map(
      (subModule: ISubModules) => subModule.name
    );

    const activePercentages = module.subModules.map(
      (datum: ISubModules) => datum.activePercentage
    );
    self.postMessage({ names: names, activePercentages: activePercentages });
  };
};

const worker_bar_data = WorkerMaker(BarDataWorker);

export { worker_bar_data as BarDataWorker };
