import React from "react";
import "../App.css";
import stars from "../assets/stars.jpg";
import Title from "../../node_modules/antd/lib/typography/Title";
import { Layout, Menu, Breadcrumb, Carousel, Card, Row, Col } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Portfolio extends React.Component {
  state = {
    collapsed: false,
  };

  onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  // repositories = () => {
  //   const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

  //   axios.get(queryUrl).then(function(res) {
  //     const repoNames = res.data.map(function(repo) {
  //       return repo.name;
  //     });

  //     const repoNamesStr = repoNames.join("\n");

  //     fs.writeFile("repos.txt", repoNamesStr, function(err) {
  //       if (err) {
  //         throw err;
  //       }

  //       console.log(`Saved ${repoNames.length} repos`);
  //     });
  //   });
  // };

  render() {
    return (
      <Layout
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${stars})`,
          height: "100%",
          backgroundSize: "cover",
        }}
      >
      <div
        style={{
          alignItems: "center",
          position: "absolute",
          top: "25%",
          left: "15%",
          height: "40%",
          width: "70%",
        }}
      >
        <Carousel autoplay afterChange={this.onChange}>
          <div>
            <div
              style={{
                height: "500px",
                color: "#fff",
                lineHeight: "160px",
                textAlign: "center",
                background: "#364d79",
              }}
            >
              <Row>
                <Col span={12} offset={9}>
                  <Card
                    title="Default size card"
                    justify="center"
                    hoverable
                    extra={<a href="#">More</a>}
                    style={{ width: 350, marginTop: "30px" }}
                  >
                    <p>Card content</p>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <h3
              style={{
                height: "500px",
                color: "#fff",
                lineHeight: "160px",
                textAlign: "center",
                background: "#364d79",
              }}
            >
              2
            </h3>
          </div>
          <div>
            <h3
              style={{
                height: "500px",
                color: "#fff",
                lineHeight: "160px",
                textAlign: "center",
                background: "#364d79",
              }}
            >
              3
            </h3>
          </div>
          <div>
            <h3
              style={{
                height: "500px",
                color: "#fff",
                lineHeight: "160px",
                textAlign: "center",
                background: "#364d79",
              }}
            >
              4
            </h3>
          </div>
        </Carousel>
      </div>
      </Layout>
    );
  }
}

export default Portfolio;

// <Layout
//   style={{
//     minHeight: "100vh",
//     backgroundImage: `url(${stars})`,
//     height: "100%",
//     backgroundSize: "cover",
//   }}
// >
//   <Sider
//     collapsible
//     collapsed={this.state.collapsed}
//     onCollapse={this.onCollapse}
//   >
//     <div className="logo" />
//     <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
//       <Menu.Item key="1" icon={<PieChartOutlined />}>
//         Option 1
//       </Menu.Item>
//       <Menu.Item key="2" icon={<DesktopOutlined />}>
//         Option 2
//       </Menu.Item>
//       <SubMenu key="sub1" icon={<UserOutlined />} title="User">
//         <Menu.Item key="3">Tom</Menu.Item>
//         <Menu.Item key="4">Bill</Menu.Item>
//         <Menu.Item key="5">Alex</Menu.Item>
//       </SubMenu>
//       <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
//         <Menu.Item key="6">Team 1</Menu.Item>
//         <Menu.Item key="8">Team 2</Menu.Item>
//       </SubMenu>
//       <Menu.Item key="9" icon={<FileOutlined />} />
//     </Menu>
//   </Sider>
//   <Content
//     justify="space-around"
//     type="flex"
//     align="middle"

//   >
//     <Title
//       style={{
//         color: "white",
//         alignItems: "center",
//         position: "absolute",
//         top: "50%",

//         height: "30%",
//         width: "100%",
//       }}
//     >
//       Hello my name is Chris Lee
//     </Title>
//   </Content>
// </Layout>


////////pre bootstrap//////////////////////////
import React from "react";
import "../App.css";
import stars from "../assets/stars.jpg";
import projects from "./Projects"
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
      <div
        style={{
          alignItems: "center",
          position: "absolute",
          margin: "auto",
          top: "10%",
          left: "15%",
          height: "40%",
          width: "80%",
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
            <Card title={project1.title} extra={<a href="#">More</a>}>
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
    </Layout>
  );
};

export default Portfolio;







////////////////////////////////////////



import React from "react";
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

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


const Home = () => {
const [collapsed, setCollapsed] = useState(false);


  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed({ collapsed });
  };

  render() {
    return (
      <Layout
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${stars})`,
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        
        <Content
          justify="space-around"
          type="flex"
          align="middle"
          
        >
          <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse(collapsed)}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
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
  }
}



export default Home;


///////////////////////////


class Home extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout
        style={{
          minHeight: "100vh",
          backgroundImage: `url(${stars})`,
          height: "100%",
          backgroundSize: "cover",
        }}
      >
        
        <Content
          justify="space-around"
          type="flex"
          align="middle"
          
        >
          <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />} />
          </Menu>
        </Sider>
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
  }
}



export default Home;