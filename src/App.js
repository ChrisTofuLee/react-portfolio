import React from "react";
import { HashRouter } from "react-router-dom";
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
    <HashRouter>
      <Layout>
        <div>
          <NavBar />
          <Content>
            <Routes />
          </Content>
        </div>
      </Layout>
    </HashRouter>
  );
};

export default App;
