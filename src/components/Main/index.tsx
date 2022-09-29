import { Route, Switch } from "wouter";
import DashBoard from "../../pages/home";

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
