import { Route, Switch } from "wouter";
import DashBoard from "../../pages/home";
import AccountAlarms from "../../pages/AccountAlarm";
import {
  Chart,
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, 
  Legend,
  Tooltip,
  BarElement
} from "chart.js";

Chart.register(
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  BarElement
);


function Main() {
  return (
    <div className="main-spacing">
      <Switch>
        <Route path="/" component={DashBoard} />
        <Route path="/temp" component={AccountAlarms} />
      </Switch>
    </div>
  );
}

export default Main;
