import "./App.css";

//Components import
import Header from "./components/Header.component";
import Profile from "./components/Profile.component";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col  col-xs-12 col-sm-12 col-lg-3">
          <Profile />
        </div>
        <div className="col col-xs-12 col-lg-9 col-sm-12">
          <Header />
        </div>
      </div>
    </div>
  );
}

export default App;
