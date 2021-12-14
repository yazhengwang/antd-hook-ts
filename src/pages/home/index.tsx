import React, { FC } from "react";
import { Button, List, Card } from "antd";
import "./index.less";
import { useHistory } from "react-router-dom";

// interface IColumns{
//   title:string,
//   path:string,
//   desc:string[]
// }

const Home: FC = () => {
  const history = useHistory();
  const data = [
    {
      title: "useState",
      path:'/useState',
      desc: ['useState 有一个参数，该参数可以为任意数据类型，一般用作默认值',
        'useState 返回值为一个数组，数组的第一个参数为我们需要使用的 state，第二个参数为一个 setFn。'],
    },
    {
      title: "useEffect",
      path:'/useEffect',
      desc: ['每次重新渲染，都会生成新的 effect，替换掉之前的， effect 发生在“渲染之后',
      '使用多个 Effect 实现关注点分离, 解决 class 中生命周期函数经常包含不相关的逻辑问题'],
    },
    {
      title: "useContext",
      path: "/usecontext",
      desc: ['每次重新渲染，都会生成新的 effect，替换掉之前的， effect 发生在“渲染之后',
      '使用多个 Effect 实现关注点分离, 解决 class 中生命周期函数经常包含不相关的逻辑问题'],
    },
    {
      title: "useReducer",
      path: "/usereducer",
      desc: ['useState 的替代方案','复杂的state操作逻辑，嵌套的state的对象，推荐使用useReducer'],
    },
    {
      title: "useRef",
      path: "/useref",
      desc: ['帮助我们获取到DOM元素或者组件实例',
      '保存任何类型的值:dom、对象等任何可辨值'],
    },
    {
      title: "useMemo",
      path: "/usememo",
      desc: [' 优化避免在每次渲染时都进行高开销的计算','当 deps 不变时，直接返回上一次计算的结果，从而使子组件跳过渲染'],
    },
    {
      title: "useCallback",
      path: "usecallback",
      desc: ['返回一个函数，只有在依赖项发生变化的时候才会更新','等价于'],
    },
    {
      title: "自定义 hook",
      path: "hook",
      desc: [],
    },
  ];

  const click = (path: string)=>  history.push(path);

  return (
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
          column: 4 
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card
              title={item.title}
              extra={
                <Button type="link" onClick={()=>click(item.path)}>
                  More
                </Button>
              }
            >
              <ul>
               { item.desc.map((str=><li key={str}>{str}</li>))}
              </ul>
            </Card>
          </List.Item>
        )}
      />
  );
};
export default Home;
