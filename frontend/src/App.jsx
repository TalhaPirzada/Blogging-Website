import { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./pages/Layout";
import Home from "./pages/Home/";
import Aboutus from "./pages/Aboutus";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Blogs from "./pages/Blogs";
import NoPage from "./pages/NoPage";
function App() {
  console.log("App Component Loaded")
  return (
    <>

    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="aboutus" element={<Aboutus />} />
            <Route path="profile" element={<Profile />} />
            <Route path="explore" element={<Explore />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
