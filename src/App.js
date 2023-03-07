import { Fragment } from "react";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import NavBars from "./Component/NavBar/NavBars";
import Home from "./Page/Home/Home";

function App() {
  return (
    <Fragment>
      <NavBars />
      <Home />
      <Footer />
    </Fragment>
  );
}

export default App;
