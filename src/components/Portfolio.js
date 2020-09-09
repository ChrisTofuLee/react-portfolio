import React, { useState } from "react";
import orange from "../assets/orange.png";
import purple from "../assets/purple.png";

import "../App.css";
import Projects from "./Projects";
// import Title from "../../node_modules/antd/lib/typography/Title";
import { Space, Layout, Menu, Card, Row, Divider, Col, Tag } from "antd";
import {
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Title from "antd/lib/typography/Title";

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Portfolio = () => {
  // Setting component's initial state
  const [projects, setProjects] = useState(Projects);
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };
  return (
    <div>
      <div style={{ backgroundImage: `url(${purple})`, height: "300px" }}></div>
      <div
        className="container mx-auto bg-white"
        style={{
          marginTop: "-150px",
          marginRight: "100px",
          marginBottom: "50px",
          boxShadow:
            "0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.3)",
        }}
      >
        {/* <div
          style={{
            alignItems: "center",
            position: "absolute",
            margin: "auto",
            top: "10%",
            height: "40%",
          }}
        > */}

        <Title
          style={{
            // color: "white",
            
            width: "100%",
            fontSize: "3em",
            fontFamily: "Kumbh Sans",
            padding: "80px",
            
          }}
        >
          Projects
        </Title>
        {projects.map((project) => {
          return (
            <Row style={{ marginBottom: "20px" }}>
              <Col flex={"60%"} style={{ background: "white" }}>
                <Card
                  title={project.title}
                  extra={<a href={project.repo}>More</a>}
                  style={{
                    Color: "white",
                    fontFamily: "Kumbh Sans",
                    boxShadow: "-1px 3px 14px -6px rgba(120,111,120,.48)",
                  }}
                  headStyle={{ backgroundColor: "#EAEDF2", border: 1 }}
                  bodyStyle={{ backgroundColor: "#FFFFFF", border: 0 }}
                >
                  <p
                    style={{ marginBottom: "-10px", fontFamily: "Kumbh Sans" }}
                  >
                    {project.description}
                  </p>
                  <Divider />
                  {project.tech.map((techUsed) => {
                    return (
                      <Tag color={techUsed.colour}>{techUsed.techName}</Tag>
                    );
                  })}
                </Card>
              </Col>
              <Col flex={"40%"} style={{ alignItems: "center" }}>
                <img
                  alt="example"
                  src={project.image}
                  style={{
                    height: "100%",
                    maxHeight: "250px",
                    maxWidth: "400px",
                    boxShadow: "-1px 3px 14px -6px rgba(120,111,120,.48)",
                  }}
                />
              </Col>
            </Row>
          );
        })}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Portfolio;
