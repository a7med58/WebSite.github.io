import { Fragment } from "react";
import About from "../../Page/About/About";
import Contact from "../../Page/Contact/Contact";
import Home from "../../Page/Home/Home";
import Footer from "../Footer/Footer";
import NavBars from "../NavBar/NavBars";

const LayOut = () => {
  return (
    <Fragment>
      <NavBars />
      <main>
        <Home />
        <About />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};

export default LayOut;
