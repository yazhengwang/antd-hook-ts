import React, { FC, useEffect } from "react";
import "./index.less";


interface IProps {
    event: any;
}

const Child: FC<IProps> = ({event}) => {

    useEffect(()=>{
        console.log('child 接收的方法更新了',event());
    },[event])
  return (
    <div  style={{margin: "0px", border: "2px dashed", padding: "20px", backgroundColor:'ActiveCaption'}}>
      <button >useCallback</button>
    </div>
  );
};

export default Child;
