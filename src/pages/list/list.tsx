import React, { FC } from 'react'
import { Table } from 'antd'
import { ITodo,IColumns } from './typings'

interface IProps{
    data: ITodo[]
}
const List:FC<IProps>=({data})=>{
    const columns: IColumns[]=[{
        title:'标题',
        dataIndex:'title'
    },{
        title:'内容',
        dataIndex:'content'
    }]

    return <div>{data.map(item=><span key={item.id}>{item.content}</span>)}
    
    <Table
            rowKey="id"
            columns={columns}
            dataSource={[data]}
        />
        </div>
}

export default List