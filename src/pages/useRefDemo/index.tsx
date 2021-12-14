import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

/**
 * useRef
 * @returns 获取到DOM元素  保存常量
 */
const RefDemo = () => {
  const domRef = useRef<HTMLInputElement>(null);
  const childRef = useRef<any>(null);
  useEffect(() => {
    console.log("ref:deom-init", domRef, domRef.current);
    console.log("ref:child-init", childRef, childRef.current);
  }, []);
  console.log('页面渲染更新=========================');
  const showChild = () => {
    console.log("ref:child", childRef, childRef.current);
    if (childRef.current) {
      childRef.current.say();
    }
  };
  return (
    <div style={{ margin: "100px", border: "2px dashed", padding: "20px" }}>
      <h2>这是外层组件</h2>
      <div
        onClick={() => {
          console.log("ref:deom", domRef, domRef.current);
          if (domRef.current) {
            domRef.current.focus();
            domRef.current.value = "hh";
          }
        }}
      >
        <label>点击给 input 赋值</label>
        <input ref={domRef} />
      </div>
      <br />
      <p onClick={showChild} style={{ marginTop: "20px" }}>
        点击调用子组件方法
      </p>
      <div style={{ border: "1px solid", padding: "10px" }}>
        <Child ref={childRef} />
      </div>
    </div>
  );
};

const ChildComponent = (props: any, ref: any) => {
  useImperativeHandle(ref, () => ({
    say: sayHello,
  }));
  const sayHello = () => {
    alert("hello,我是子组件");
  };
  return <h3>子组件</h3>;
};
const Child = forwardRef(ChildComponent);

export default RefDemo;
