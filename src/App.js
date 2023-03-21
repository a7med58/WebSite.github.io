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
import AddPost from "./Page/UserPanel/AddPost";
import UserPanel from "./Page/UserPanel/UserPanel";
import ViewPost from "./Page/UserPanel/ViewPost";
import ViewPosts from "./Page/UserPanel/ViewPosts";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route index path="/" element={<Home />} />
      <Route index path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<RegistrationForm />} />
      <Route path="/userpanel" element={<UserPanel />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/addpost" element={<AddPost />} />
      <Route path="/viewposts" element={<ViewPosts />} />
      <Route path="/posts/:id" element={<ViewPost />} />
      <Route path="/posts/:id/edit" element={<ViewPost />} />
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
