import React from "react";
import "../App.css";
import stars from "../assets/stars.jpg";
import projects from "../assets/projects"
// import Title from "../../node_modules/antd/lib/typography/Title";
import { Space, Layout, Card, Row, Col, Tag } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import Title from "antd/lib/typography/Title";

const {project1} = projects

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Portfolio = () => {
  return (
    
    <Layout
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${stars})`,
        height: "100%",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto" >
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
        <Row style={{ marginTop: "20px" }}>
          <Col flex={"60%"} style={{ background: "white" }}>
            <Card title={project1.title} extra={<a href="#">More</a>} style={{Color: "white"}} headStyle={{backgroundColor: '#EAEDF2', border: 1 }} bodyStyle={{backgroundColor: '#FFFFFF', border: 0 }}>
              <p>
                {project1.description}
              </p>
              <Tag color="orange">HTML</Tag>
              <Tag color="volcano">Semantic-UI</Tag>
              <Tag color="gold">JS</Tag>
              <Tag color="geekblue">Ajax</Tag>
            </Card>
          </Col>
          <Col flex={"30%"} style={{ alignItems: "center" }}>
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              style={{ height: "100%" }}
            />
          </Col>
        </Row>
      </div>
      </div>
    </Layout>
    
  );
};

export default Portfolio;
