import { FC, useEffect, useState } from "react";
import {Button} from 'antd'
import './index.less'


interface IProps{

}
interface InfoType{
  name:string;
  age?:number;
}
const Count:FC<IProps>=()=> {
    const [count, setCount] = useState<number>(0)
    const [info, setInfo] = useState<InfoType>({name:'小明',age:18})
    const countFn=(val:number) =>{
        setCount(count=>count + val)
    } 

    useEffect(()=>{
      fetch('/api/list').then(res=>res.json()).then(rep=>{
        console.log('====================================');
        console.log(rep);
        console.log('====================================');
      })
    },[count])


    return (
        <>
        <h3 >当前count: {count}</h3>
        <h3>姓名:{info.name}</h3>
        <h3>年龄:{info.age}</h3>
        <p><Button onClick={()=>countFn(1)}>增加</Button></p>
        <p><Button onClick={()=>countFn(-1)}>减少</Button></p>
        <p><Button onClick={()=>setInfo({name:'大明'})}>修改姓名</Button></p>
      </>
    )
  }
  
 export default Count