import "./App.css";

//Components import
import Header from "./components/Header.component";
import ResumePage from "./pages/Resume.page"

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col col-lg-12">
          <Header />
        </div>
        <ResumePage/>
      </div>
    </div>
  );
}

export default App;
