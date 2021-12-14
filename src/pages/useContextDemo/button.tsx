import React, { FC, useEffect } from "react";
import Button2 from "./button2";
import ThemeContext from "./context";
import "./index.less";

interface IProps {}

const Button: FC<IProps> = () => {
  const { color, setColor } = React.useContext(ThemeContext);

  useEffect(() => {
    console.info("button1 Context changed:", color);
  }, [color]);

  const handleClick = () => {
    setColor(color === "blue" ? "red" : "blue");
  };

  return (
    <div
      style={{
        margin: "0px",
        border: "2px dashed",
        padding: "20px",
        backgroundColor: "ActiveCaption",
      }}
    >
      <button
        onClick={handleClick}
        style={{
          backgroundColor: color,
          color: "white",
        }}
      >
        button1当前颜色:{color}
      </button>
      <br />
      <Button2 />
    </div>
  );
};

export default Button;
