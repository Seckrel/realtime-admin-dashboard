import { Route, Switch } from "wouter";
import DashBoard from "../../pages/home";
import {
  Chart,
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement, 
  Legend,
  Tooltip
} from "chart.js";

Chart.register(
  RadialLinearScale,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const Temp = () => <>{"temp"}</>;

function Main() {
  return (
    <div className="main-spacing">
      <Switch>
        <Route path="/" component={DashBoard} />
        <Route path="/temp" component={Temp} />
      </Switch>
    </div>
  );
}

export default Main;
