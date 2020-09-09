import React, { useState } from "react";
import "../App.css";
import stars from "../assets/stars.jpg";
import Title from "../../node_modules/antd/lib/typography/Title";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${stars})`,
        height: "100%",
        backgroundSize: "cover",
      }}
    >
      <Content justify="space-around" type="flex" align="middle">
        <Title
          style={{
            color: "white",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            height: "30%",
            width: "100%",
          }}
        >
          Hello my name is Chris Lee
        </Title>
      </Content>
    </Layout>

    /* <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                Bill is a cat.
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout> */
  );
};

export default Home;
