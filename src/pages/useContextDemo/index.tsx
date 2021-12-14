import { FC, useState, useEffect } from "react";
import Button from "./button";
import ThemeContext from "./context";
import "./index.less";

interface IProps {}

const Context: FC<IProps> = () => {
  const [color, setColor] = useState<string>('blue')

  useEffect(() => {
    console.log('当前 color为：', color)
    return () => {
      
    }
  }, [color])


  return (
      <>
    <ThemeContext.Provider value={{color, setColor}} >
        <div style={{backgroundColor: color, display: 'flex', height:'200px'}}>
        </div>
        <Button />
      </ThemeContext.Provider>
      </>
  );
};

export default Context;
