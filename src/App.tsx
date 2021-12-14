import { FC, useState } from "react";
import React, { useEffect } from "react";
// import logo from './logo.svg';
import "./App.less";
import { Layout, Menu, Breadcrumb } from "antd";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { BrowserRouter, Link, withRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router";
import rootReducer from "./reducers";
// import { RouteConfig } from "react-router-config";


const { Header, Content, Footer } = Layout;


// interface IProps {
//   level: number;
//   menu: RouteConfig;
// }

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

const App:FC = (props: any) => {
  const [pathname, setPathname] = useState(props.history.location.pathname.substring(1))


  useEffect(() => {
    setPathname(pathname)
    // console.log('process.env----->',process.env);
    // if (process.env.REACT_APP_MODE==='dev'){
    //   console.log('测试环境');
    // }else if (process.env.REACT_APP_MODE==='pre'){
    //   console.log('预生产环境');
    // }else if(process.env.REACT_APP_MODE==='pro'){
    //   console.log('生产环境');
    // }
  }, [pathname]);

  // const loadMenuItem:FC<IProps>=({ menu, level = 0 }:IProps):ReactElement => 
  //    menu
  //     .filter((r) => r.name)
  //     .map((r) => {
  //       let icon = <span></span>;
  //       //包含下级菜单，并且菜单中包含可显示的子菜单
  //       if (r.hasOwnProperty("routes") &&
  //         Array.isArray(r.routes) &&
  //         r.routes.some((m) => m?.name)) {
  //         return (
  //           <SubMenu key={r.path} title={<span>{r.name}</span>}>
  //             {/* 渲染第下级菜单 */}
  //             {loadMenuItem({r.routes, level+1})}
  //           </SubMenu>
  //         );
  //       } else {
  //         return (
  //           <Menu.Item key={r.path}>
  //             {icon}
  //             <span>{r.text}</span>
  //           </Menu.Item>
  //         );
  //       }
  //     });

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout style={{ height: "100vh" }}>
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
              <Menu.Item key={"home"}>
                <Link to="/">首页</Link>
              </Menu.Item>
              {/* <Menu.Item key={"login"}>
                <Link to="/login">登录</Link>
              </Menu.Item> */}
            </Menu>
          </Header>
          <Layout>
            {/* <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%", borderRight: 0 }}
                onClick={handleClick}
              >
                 {loadMenuItem()}
              </Menu>
            </Sider> */}
            <Layout className="site-layout" style={{ padding: "0 24px 24px" }}>
              <Breadcrumb style={{ margin: "16px 0" }}>
                <Breadcrumb.Item>Hook</Breadcrumb.Item>
                <Breadcrumb.Item>{pathname}</Breadcrumb.Item>
              </Breadcrumb>
              <Content>
                <div className="site-layout-content">
                  {renderRoutes(routes)}
                </div>
              </Content>
            </Layout>
          </Layout>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
};

export default withRouter(App);
