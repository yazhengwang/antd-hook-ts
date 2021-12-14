import { RouteConfig } from "react-router-config";
import { Home, List, Drag, Detail,UseState, Effect, Context, Counter, Memo, RefDemo,HOCInputDemo } from "../pages";
import Login from "../pages/login";

const routes: RouteConfig[] = [
  {
    path: "/",
    exact: true,
    component: Home,
    name: '首页'
  },
  {
    path : "/usestate",
    component: UseState,
    exact: true,
  },
  {
    path : "/useEffect",
    component: Effect,
    exact: true,
  },
  {
    path : "/usecontext",
    component: Context,
    exact: true,
  },
  {
    path : "/usereducer",
    component: Counter,
    exact: true,
  },
  {
    path : "/usememo",
    component: Memo,
    exact: true,
  },
  {
    path : "/useref",
    component: RefDemo,
    exact: true,
  },
  {
    path : "/hook",
    component: HOCInputDemo,
    exact: true,
  },
  {
    path: "/list",
    component: List,
    name: '列表',
    routes : [
      {
        path : " /list/:id/",
        component: Detail,
      }
    ]
  },
  {
    path: "/drag/:id",
    exact: true,
    component: Drag,
    name: 'dnd'
  },
  {
    path: "/login",
    component: Login,
    name: '登录'
  },
];

export default routes;
