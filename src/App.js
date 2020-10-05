import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout, Menu } from "antd";

import "./App.css";
import Routes from "./Routes";
import Home from "./components/home";
import Portfolio from "./components/Portfolio";
import NavBar from "./components/NavBar";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const App = () => {
  return (
    <BrowserRouter>
    <Layout
      style={{
        backgroundColor: "rgb(245,245,245)",
        color: "gray",
      }}
    >
      
      
        <NavBar />
        <Routes />
      
    </Layout>
    </BrowserRouter>
  );
};

export default App;
