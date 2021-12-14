import React, { FC, useEffect } from 'react'
import { Table } from 'antd'
import { useRequest, useAntdTable } from 'ahooks';
import Mock from 'mockjs';
import { ITodo,IColumns } from './typings'

type IData = {
   data: ITodo[]
}

function getUsername(): Promise<IData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.mock({
            'data|10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1,
                'name': '@cname',
                'email': '@email',
            }]
        }));
      }, 1000);
    });
  }

const List:FC=()=>{

    const {data, error, loading } = useRequest(getUsername)
    const columns: IColumns[]=[
        {
            title:'姓名',
            dataIndex:'name'
        },{
        title:'邮箱',
        dataIndex:'email'
    },]

    useEffect(()=>{
        console.log(data);
        
    },[data])

    return <div>
            {loading&& <div>loading</div>}
            {error&& <div>error</div>}
            {data&&Array.isArray(data.data)&&<Table
            rowKey="id"
            columns={columns}
            dataSource={[...data.data]}
        />}
        </div>
}

export default List