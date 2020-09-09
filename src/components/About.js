import React, { useState } from "react";
import orange from "../assets/orange.png";
import "../App.css";
import Projects from "./Projects";
// import Title from "../../node_modules/antd/lib/typography/Title";
import {
  Space,
  Layout,
  Menu,
  Divider,
  Anchor,
  Row,
  Col,
  Typography,
} from "antd";
import {
  GithubFilled,
  LinkedinFilled,
  VideoCameraOutlined,
} from "@ant-design/icons";
const { Title, Paragraph, Text } = Typography;
const { Link } = Anchor;
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const About = () => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${orange})`, height: "300px" }}></div>
      <div
        className="container mx-auto bg-white"
        style={{
          marginTop: "-150px",
          marginRight: "100px",
          marginBottom: "50px",
          padding: "80px",
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
            paddingBottom: "30px",
          }}
        >
          About Me
        </Title>
        <Paragraph style={{ fontSize: "1.6em", fontFamily: "Kumbh Sans" }}>
          MY name is Chris Lee. I'm currently full stack coding bootcamp student
          at the University of Manchester, learning front end to back end web
          development from HTML and JavaScript to NodeJS and SQL.
        </Paragraph>
        <Paragraph style={{ fontSize: "1.6em", fontFamily: "Kumbh Sans" }}>
          From working in SEO, learning about both user experience and search
          engine guidelines, I started to gain interest in coding to help
          improve on websites as well as making my own. During my time in the
          coding bootcamp, I have gained experience building and deploying
          websites from scratch as well as improving on existing projects. I
          enjoy working on websites from a user's perspective to improve on the
          user experience as well as figuring out how to improve on how the
          website works back end to improve on performance.
        </Paragraph>
        <Divider />
        <Paragraph style={{ fontSize: "1.6em", fontFamily: "Kumbh Sans" }}>
          To learn more about my work and myself:
        </Paragraph>

        <div className="row d-flex justify-content-center" align="center">
          <div
            className="col-md-auto"
            style={{ paddingRight: "15px", align: "center" }}
          >
            <div className="align-middle">
              <a href="https://github.com/ChrisTofuLee">
                <GithubFilled style={{ fontSize: "30px", color: "black" }} />
              </a>
              <a
                href="https://github.com/ChrisTofuLee"
                style={{
                  fontSize: "1.2em",
                  fontFamily: "Open Sans",
                  color: "black",
                  display: "block",
                }}
              >
                Github
              </a>
            </div>
          </div>
          <div className="col-md-auto" style={{ paddingRight: "15px" }}>
            <div>
              <a href="https://www.linkedin.com/in/chris-h-lee/">
                <LinkedinFilled
                  style={{ fontSize: "30px", color: "#0077B5" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/chris-h-lee/"
                style={{
                  fontSize: "1.2em",
                  fontFamily: "Open Sans",
                  color: "black",
                  display: "block",
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
