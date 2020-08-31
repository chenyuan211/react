import React, { Component } from 'react';
import { Card, Table, Popconfirm } from 'antd'
import propertyLess from './property.less'

export default class Property extends Component {
  render() {
    const listData = [
        {title: '公告标题', dataIndex: 'title'},
        {title: '公告内容', dataIndex: 'content'},
        {title: '有效时间', dataIndex: 'effectTime'},
        {title: '发布时间', dataIndex: 'pubTime'},
        {title: '状态', dataIndex: 'status'},
        {title: '操作', dataIndex: '', key: 'x', render: (txt: any, record: any, index: number) => {
            return (
                <div className={propertyLess.delBtn}>
                    <Popconfirm title='确定删除该条公告吗？' 
                        onCancel={()=>{console.log('取消')}} 
                        onConfirm={()=>{console.log('确认', txt, record, index)}}>
                        <span>删除</span>
                    </Popconfirm>
                    <span>编辑</span>
                </div>
            )
        }}
        
    ]
    const data = [
        {
            id: 1,
            title: '公告标题测试', 
            content: '公告内容测试', 
            effectTime: '2020-06-17~2020-11-11', 
            pubTime: '2020-08-13', 
            status: '未生效'
        },
        {
            id: 2,
            title: '公告标题测试', 
            content: '公告内容测试', 
            effectTime: '2020-06-17~2020-11-11', 
            pubTime: '2020-08-13', 
            status: '未生效'
        }
    ]
    return (
        <Card title='物业公告'>
            <Table columns={listData} dataSource={data} rowKey={record => record.id}/>
        </Card>
    )
  }
}