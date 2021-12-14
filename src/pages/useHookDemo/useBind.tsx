import { useState } from "react";

const useBind=(initialValue:string)=> {
    const [value, setValue] = useState(initialValue || "");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    return { value, onChange };
  }
export default useBind;
