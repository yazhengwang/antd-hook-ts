import React,{FC, useState} from 'react';
// import { Table } from 'antd';
import { ITodo } from './typings';

import List from './list'
// import { useParams } from 'react-router-dom';
// interface RouteParams {
//     id: string
// }

const TotoList:FC=()=>{
    // const param = useParams<RouteParams>();
    // return <div>Show路由参数：{param.id}</div>

    const [data] = useState<ITodo[]>([])


    return <div>
        
        <List data ={data}/>
    </div>
}
export default TotoList;