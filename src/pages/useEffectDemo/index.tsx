import { FC, useState, useEffect, useCallback } from "react";
import Child from "./Child";
import "./index.less";

interface IProps {}

const Count: FC<IProps> = () => {
  const [count, setCount] = useState<number>(0);
  const [color, setColor] = useState<string>('blue');

  useEffect(() => {
    console.log("useEffect每次更新都执行");
  });

  // 类似于 componentDidMount
  useEffect(() => {
    console.log("useEffect 2 初始化时执行");
    // setCount(()=>2)
    return () => {
      console.log("页面卸载 useEffect2 卸载了");
    };
  }, []);

  // 副作用示例
  useEffect(() => {
    console.log("useEffect3 初始化时和 count改变之后执行");
  }, [count]);

  const countFn = useCallback((val: number) => {
    setCount((count) => count + val);
  },[]);


  const colorFn = () => {
    setColor(()=>color=== 'red'?'blue':'red')
  };

  // const passColor=useCallback(()=>{
  //   return color
  // },[color])
  const passColor=()=>{
    return color
  }
  

  return (
    <>
      {/* {(() => {
        console.log("render");
        return null;
      })()} */}
      <div>点击次数: {count}</div>
      <button onClick={() => countFn(1)}>增加</button>
      <button onClick={() => countFn(-1)}>减少</button>
      <br />
      <div style={{backgroundColor:color, color:'#ffffff'}}>color颜色: {color}</div>
      <button onClick={colorFn}>修改颜色</button>
      <Child event={passColor}/>
    </>
  );
};

export default Count;
