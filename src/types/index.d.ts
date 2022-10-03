import { Dispatch, SetStateAction } from "react";

export interface IData {
  id: number;
  name: string;
  online: boolean;
  today: number;
  lastSevenDay: number[];
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
