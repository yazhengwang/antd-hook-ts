import React, { FC, useEffect, useMemo, useState } from "react";
import MemoCount from "./memoCount";

const MemoDemo: FC = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");
  useEffect(() => {
    console.log("count effect",count);
  }, [count]);

  const newCount = useMemo(() => {
    console.log("count 触发了");
    return (
      <div>
        <span>count 改变不触发:</span>
        <span>{count}</span>
      </div>
    );
  }, [count]);

  const newColor = useMemo(() => {
    console.log("color 触发了");
    return color;
  }, [color]);

  const MemoCountComp = useMemo(() => {
    return <MemoCount count={count} />;
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(() => count + 1)}>修改 count</button>
      <button
        onClick={() => setColor(() => (color === "blue" ? "red" : "blue"))}
      >
        修改 color
      </button>
      <p>{newCount}</p>
      <p style={{ backgroundColor: color }}>{newColor}</p>
      {MemoCountComp}
    </div>
  );
};
export default MemoDemo;
