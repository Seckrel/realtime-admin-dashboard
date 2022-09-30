import { Route, Switch } from "wouter";
import DashBoard from "../../pages/home";
import { Chart, RadialLinearScale, ArcElement } from "chart.js";

Chart.register(RadialLinearScale, ArcElement);

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
