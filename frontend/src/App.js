import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import FileManager from "./pages/FileManager";
import Analytics from "./pages/Analytics";
import Saved from "./pages/Saved";
import Setting from "./pages/Setting";
import Login from './Components/Login'
import SignUp from './Components/signup'
import MainLayout from "./Layout/MainLayout";
import Home from "./Components/Home";
import About from "./Components/About";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import LandingLayout from "./Layout/LandingLayout";
import Faq from "./pages/Faq";
import Policy from "./pages/Policy";
import { AdminAuth } from "./AdminAuth";
import Unauthorized from "./Unauthorized";


function App() {
  return (
    
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/policy" element={<Policy/>} />
        <Route path="/main" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        <Route element={<AdminAuth/>}>
        {/* <Route path="file-manager" element={<FileManager />} /> */}
          <Route path="analytics" element={<Analytics />} />
          <Route path="messages" element={<Messages />} />
          <Route path="file-manager" element={<FileManager />} />
        </Route>
          
          {/* <Route path="analytics" element={<Analytics />} />
          <Route path="messages" element={<Messages />} />
          <Route path="file-manager" element={<FileManager />} /> */}
          <Route path="saved" element={<Saved />} />
          <Route path="settings" element={<Setting />} />
          {/* <Route path="/unauthorized" element={<Unauthorized />} /> */}

        </Route>
        <Route path="*" element={<> not found</>} />
      </Routes>
    </Router>

  );
}

export default App;
