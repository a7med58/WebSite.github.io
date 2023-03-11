import { Fragment } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import LayOut from "./Component/LayOut/LayOut";
import About from "./Page/About/About";
import Contact from "./Page/Contact/Contact";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import RegistrationForm from "./Page/Registration/RegistrationForm";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route index path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<RegistrationForm />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Route>
  )
);

function App() {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    </Fragment>
  );
}

export default App;
