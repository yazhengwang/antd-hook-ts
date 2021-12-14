import { lazy } from 'react'

const Home = lazy(() => import('../pages/home'))
const List = lazy(() => import('./list'))
const Detail = lazy(() => import('./list/detail'))
const Login = lazy(() => import('../pages/login'))
const Drag = lazy(() => import('../pages/drag'))
const UseState = lazy(() => import('../pages/useStateDemo'))
const Effect = lazy(() => import('../pages/useEffectDemo'))
const Context = lazy(() => import('../pages/useContextDemo'))
const Counter = lazy(() => import('../pages/useReducerDemo'))
const Memo = lazy(() => import('../pages/useMemo'))
const RefDemo = lazy(() => import('../pages/useRefDemo'))
const HOCInputDemo = lazy(() => import('../pages/useHookDemo'))

export {
    Home,
    List,
    Detail,
    Login,
    Drag,
    UseState,
    Effect,
    Context,
    Counter,
    Memo,
    RefDemo,
    HOCInputDemo
  }  