import { FC, useReducer } from "react";
import LoginPage from "./login";
import LoginPageReducer from "./loginReducer";
import { IAction, IState} from './typings';


const initialState ={count: 0};


// reducer 函数接受两个参数，一个是当前的 state ，另一个是 action: { type, payload }
const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload};
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":      
      return {count: action.payload} ;
    default:
      throw new Error();
  }
};


const Counter: FC = () => {
    // 返回值：最新的state和dispatch函数
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    {/* useReducer会根据dispatch的action，返回最终的state，并触发rerender */}
      Count: {state.count}
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
      {/*  dispatch 用来接收一个 action参数「reducer中的action」，用来触发reducer函数，更新最新的状态 */}
      <button onClick={() => dispatch({ type: "increment", payload: 10  })}>+</button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>-</button>
      {/* <LoginPage /> */}
      <LoginPageReducer />
    </>
  );
};

export default Counter;
