import React, { useCallback, useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { RouteConfigComponentProps, renderRoutes } from "react-router-config";
import routes from "../router";

// const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const DefaultLayout: React.FC = React.memo(
  function Layout(props) {
    // const history = useHistory()
    // const { route } = props;
    console.log("hybird layout");

    const handleClick=(e:any) => {
      console.log('click', e);
    }
    // const loadMenuItem = (menu, level = 0) =>
    //   useCallback(() => {
    //     menu.forEach((item) => {});
    //   }, []);

    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key={"/"}>首页</Menu.Item>
            <Menu.Item key={"/login"}>登录</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
              onClick={handleClick}
            >
              {/* {loadMenuItem()} */}
            </Menu>
          </Sider>
          <Layout >
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <Content>
              <div className="site-layout-content">{renderRoutes(routes)}</div>
            </Content>
          </Layout>
        </Layout>

        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
);

export const H5Layout: React.FC<RouteConfigComponentProps> = React.memo(
  function H5Layout(props) {
    const { route } = props;
    // const history = useHistory()
    // TODO 判断是否是微信环境，跳转到错误提示页
    // history.push('/wx-page-error')
    console.log("h5 layout");
    return <>{renderRoutes(route?.routes)}</>;
  }
);

export default DefaultLayout;
