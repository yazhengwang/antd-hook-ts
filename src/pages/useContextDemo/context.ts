import React, {} from "react";

interface IColor {
	color: string;
    setColor?: any
}
const ThemeContext = React.createContext<IColor>({color:'blue'});

export default ThemeContext;
