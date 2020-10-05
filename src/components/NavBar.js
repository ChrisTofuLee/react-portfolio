import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu } from "antd";


const { Header } = Layout;
const { SubMenu } = Menu;

const NavBar = () => {
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" text="Chris Lee" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
      <Menu.Item key="5" style={{ color: "white", fontSize: "2.5em", width: "8%" }}>
      <span></span>
        </Menu.Item>
        <Menu.Item key="1" style={{ color: "white", fontSize: "2.5em" }}>
        <NavLink to="/"style={{ color: "white" }}>Christopher Lee</NavLink>
        </Menu.Item>
        {/* <Menu.Item key="4" style={{ float: "right" }}>
          <Link to="/contact">Contact</Link>
        </Menu.Item> */}
        <Menu.Item key="2" style={{ float: "right" }}>
        <NavLink to="/portfolio">Portfolio</NavLink>
        </Menu.Item>
        <Menu.Item key="3" style={{ float: "right" }}>
        <NavLink to="/about">About Me</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
