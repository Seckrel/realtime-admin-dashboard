import VisualDashAreaGeneral from "./VisualDashAreaGeneral";
import {
  IData,
  IDataContext,
  TToogleGeneral,
} from "../../types";
import { createContext, useState } from "react";
import BreadCrumbs from "../../components/BreadCrumbs";

const GeneralData: IData[] = [
  {
    id: 0,
    name: "Server 1",
    online: true,
    today: 11.2,
    lastSevenDay: [22.2, 11.3, 21.6, 2, 5.4, 14.7, 24],
  },
  {
    id: 1,
    name: "Server 2",
    online: false,
    today: 11.2,
    lastSevenDay: [21.2, 21.3, 11.6, 22, 1.4, 12.7, 23],
  },
  {
    id: 2,
    name: "Server 3",
    online: false,
    today: 16.2,
    lastSevenDay: [12.2, 9.3, 21.6, 5, 5.4, 19.7, 23],
  },
  {
    id: 3,
    name: "Server 4",
    online: false,
    today: 2.2,
    lastSevenDay: [2.2, 11.3, 21.6, 2, 5.4, 14.7, 24],
  },
  {
    id: 4,
    name: "Server 5",
    online: true,
    today: 11.2,
    lastSevenDay: [22.2, 11.3, 21.6, 2, 5.4, 14.7, 24],
  },
  {
    id: 5,
    name: "Server 6",
    online: true,
    today: 13.2,
    lastSevenDay: [12.2, 15.3, 16.6, 7, 2, 0, 23],
  },
  {
    id: 6,
    name: "Server 7",
    online: false,
    today: 1.2,
    lastSevenDay: [21.2, 17.3, 19.6, 2, 3.4, 10.7, 21],
  },
  {
    id: 7,
    name: "Server 8",
    online: true,
    today: 16,
    lastSevenDay: [22.2, 11.3, 21.6, 2, 5.4, 14.7, 24],
  },
];

export const GeneralDataContext = createContext<IDataContext | null>(null);

const TabList = [
  "Today",
  "Yesterday",
  "1 Day",
  "2 Day",
  "3 Day",
  "4 Day",
  "5 Day",
  "6 Day",
];

function DashBoard() {
  const [toggleGeneral, setToggleGeneral] = useState<TToogleGeneral>("General");
  const BreadCrumbsItems = GeneralData.map((GeneralDatum: IData) => ({
    title: GeneralDatum.name,
    id: GeneralDatum.id,
    onClick: () => setToggleGeneral("General"),
  }));

  return (
    <GeneralDataContext.Provider value={{ GeneralData, setToggleGeneral }}>
      {toggleGeneral !== "General" ? (
        <BreadCrumbs
          items={BreadCrumbsItems}
          currentIndex={toggleGeneral}
          setCurrentIndex={setToggleGeneral}
        />
      ) : null}
      {toggleGeneral === "General" ? (
        <VisualDashAreaGeneral />
      ) : (
        <div>{toggleGeneral}</div>
      )}
    </GeneralDataContext.Provider>
  );
}

export default DashBoard;
