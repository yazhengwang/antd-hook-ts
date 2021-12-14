import { FC } from "react";

interface IProps{
    count: number;
}
const MemoCount:FC<IProps> =(props)=>{
    const {count} =props;
    console.log('==MemoCount==================================');
    return <div>MemoCount:{count}</div>
}

export default MemoCount;