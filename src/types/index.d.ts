import { Dispatch, SetStateAction } from "react";


// home
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


export interface IRecords {
  sla_service: string;
  application_id: number;
  main_application_name: string;
  main_application_id: number;
  application_name: string;
  result_code: 200 | 500;
  result: string;s
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
