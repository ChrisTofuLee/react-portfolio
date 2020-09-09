import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import stars from "../assets/stars.jpg";
import { Layout, Menu, Typography, Row, Col, Divider } from "antd";
import {
  CodeFilled,
  IdcardFilled,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Title, Paragraph, Text } = Typography;

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
      <div className="container">
        <div
          className="jumbotron"
          style={{
            background: "none",
            marginTop: "30%",
            fontFamily: "Istok Web",
          }}
        >
          <Content justify="space-around" type="flex" align="middle">
            <Typography>
              <Title
                style={{
                  color: "white",
                  fontSize: "4em",
                  alignItems: "center",
                  textDecorationLine: "underline",
                  textDecorationStyle: "dotted",
                }}
              >
                Hello my name is Chris Lee
              </Title>
              <Divider style={{ color: "white" }} />
              <Paragraph
                style={{
                  color: "white",
                  alignItems: "center",
                  fontSize: "2em",
                }}
              >
                I make modern websites using HTML, CSS, and JavaScript.
              </Paragraph>

              <div
                className="row d-flex justify-content-center"
                align="center"
               
              >
                <div
                className="col-md-auto"
                style={{ paddingRight: "15px", align: "center"}}>
                  <Link to="/portfolio" className="align-middle">
                    <CodeFilled style={{ fontSize: "30px", color: "white" }} />
                    <a
                      style={{
                        fontSize: "1.2em",
                        fontFamily: "Open Sans",
                        color: "white",
                        display: "block",
                      }}
                    >
                      Portfolio
                    </a>
                  </Link>
                </div>
                <div
                className="col-md-auto"
                 style={{ paddingRight: "15px"}}>
                  <Link to="/about">
                    <IdcardFilled
                      style={{ fontSize: "30px", color: "white" }}
                    />
                    <a
                      style={{
                        fontSize: "1.2em",
                        fontFamily: "Open Sans",
                        color: "white",
                        display: "block",
                      }}
                    >
                      About
                    </a>
                  </Link>
                </div>
              </div>
            </Typography>
          </Content>
        </div>
      </div>
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
