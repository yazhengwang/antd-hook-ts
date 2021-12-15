import React, { FC, useEffect } from 'react'
import { Button, Form, Input, Select, Table } from 'antd'
import { useRequest, useAntdTable } from 'ahooks';
import Mock from 'mockjs';
import { ITodo,IColumns } from './typings'

type IData = {
    total: number;
   list: ITodo[]
}

const {Option } = Select

function getUsername(): Promise<IData> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Mock.mock({
            'list|10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1,
                'name': '@cname',
                'email': '@email',
            }],
            'total': 10,
        }));
      }, 1000);
    });
  }

const List:FC=()=>{
    const [form] = Form.useForm();
    const {data, error, loading } = useRequest(getUsername)
    const {tableProps, search, params} = useAntdTable(getUsername,{form})
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

    const submit=()=>{}

    return <div>
            {loading&& <div>loading</div>}
            {error&& <div>error</div>}
            <div style={{ marginBottom: 16 }}>
                <Form form={form} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Form.Item name="gender" initialValue="male">
                    <Select style={{ width: 120, marginRight: 16 }} onChange={submit}>
                        <Option value="">all</Option>
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                    </Select>
                    </Form.Item>
                    <Form.Item name="name">
                    <Input.Search placeholder="enter name" style={{ width: 240 }} onSearch={submit} />
                    </Form.Item>
                </Form>
                </div>
            {data&&Array.isArray(data.list)&&<Table
            rowKey="id"
            columns={columns}
            dataSource={[...data.list]}
        />}
        </div>
}

export default List