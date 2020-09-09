import React, { useState } from "react";

import "../App.css";
import Projects from "./Projects";
// import Title from "../../node_modules/antd/lib/typography/Title";
import { Space, Layout, Menu, Card, Row, Col, Tag } from "antd";
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
      
      <div className="container mx-auto">
        <div
          style={{
            alignItems: "center",
            position: "absolute",
            margin: "auto",
            top: "10%",
            height: "40%",
          }}
        >
          <Title
            style={{
              color: "white",
              width: "100%",
            }}
          >
            Projects
          </Title>
          {projects.map((project) => {
            return (
              <Row style={{ marginTop: "20px" }}>
                <Col flex={"50%"} style={{ background: "white" }}>
                  <Card
                    title={project.title}
                    extra={<a href="project.repo">More</a>}
                    style={{ Color: "white" }}
                    headStyle={{ backgroundColor: "#EAEDF2", border: 1 }}
                    bodyStyle={{ backgroundColor: "#FFFFFF", border: 0 }}
                  >
                    <p>{project.description}</p>
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
                    }}
                  />
                </Col>
              </Row>
            );
          })}
        </div>
      </div>
      </div>
  );
};

export default Portfolio;
