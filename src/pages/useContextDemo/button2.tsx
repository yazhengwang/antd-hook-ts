import React, { FC, useEffect } from "react";
import ThemeContext from "./context";
import "./index.less";

interface IProps {}

const Button2: FC<IProps> = () => {
  const { color, setColor } = React.useContext(ThemeContext);

  useEffect(() => {
    console.info("button2 Context changed:", color);
  }, [color]);

  const handleClick = () => {
    setColor(color === "blue" ? "green" : "blue");
  };

  return (
    <div style={{ border: "2px", padding: "20px", backgroundColor: "gray" }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: color,
          color: "white",
        }}
      >
        button2当前颜色:{color}
      </button>
    </div>
  );
};

export default Button2;
