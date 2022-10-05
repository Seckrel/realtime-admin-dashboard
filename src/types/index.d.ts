import { Dispatch, SetStateAction } from "react";

export interface ISubModules {
  id: number;
  name: string;
  active: boolean;
  statusCode: string;
  lastTimeChecked: string;
  state: boolean;
  activePercentage: number;
}

export interface IData {
  id: number;
  name: string;
  online: boolean;
  today: number;
  lastSevenDay: number[];
  subModules: ISubModules[];
}


export type TToogleGeneral = "General" | number;

export type TSetToggleGeneral = Dispatch<SetStateAction<IToogleGeneral>>;

export interface IDataContext {
  GeneralData: IData[];
  setToggleGeneral: TSetToggleGeneral;
}

export interface IBreadCrumbsItems {
  title: string;
  onClick: Function;
  id: number;
}
