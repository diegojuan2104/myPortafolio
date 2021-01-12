import { Route, Switch, Redirect } from "react-router-dom";

//Components import
import Header from "./components/Header.component";
import Footer from "./components/Footer.component";

//Pages
import ResumePage from "./pages/Resume.page";
import PortafolioPage from "./pages/Portafolio.page";
import ContactPage from "./pages/Contact.page"

function App() {
  return (
    <div className="col main-page d-flex">
        <div className="row">
          <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Header />
          </div>

          <div className="row col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <Switch>
              <Route exact path="/" component={ResumePage} />
            </Switch>

            <Switch>
              <Route exact path="/portafolio" component={PortafolioPage} />
            </Switch>

            <Switch>
              <Route exact path="/contact" component={ContactPage} />
            </Switch>
          </div>
        <div className="row mt-4 align-self-end">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
