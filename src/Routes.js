import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./Pages/Home";
import { Sobre } from "./Pages/Sobre/Sobre";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/sobre" component={Sobre} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
