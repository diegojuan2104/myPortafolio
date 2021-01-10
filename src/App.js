import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

//Components import
import Header from "./components/Header.component";

//Pages
import ResumePage from "./pages/Resume.page";
import PortafolioPage from "./pages/Portafolio.page";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-12">
          <Header />
        </div>

        <Switch>
          <Route exact path="/" component={ResumePage} />
        </Switch>

        <Switch>
          <Route exact path="/portafolio" component={PortafolioPage} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
