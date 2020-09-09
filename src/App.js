import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Layout, Menu} from "antd";

import "./App.css";
import Routes from "./Routes";
import Home from "./components/home";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const App = () => {
  return (
    <Layout
      style={{
        backgroundColor: "rgb(245,245,245)",
        color: "gray",
      }}
    >
      <BrowserRouter>
      <NavBar />
{/* <Portfolio /> */}
    
    <Routes />
    </BrowserRouter>
    </Layout>    
  )
};

export default App;
