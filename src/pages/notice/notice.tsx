import React, {useEffect, useState } from 'react';
import { Table, Card, Popconfirm } from 'antd';
import { ListApi } from '../../services/auditInformation';
import AuditInformationLess from '../auditInformation/auditInformation.less';
import { connect } from 'react-redux'


const Notice: any = (props: any) => {
  const columns = [
    {title: '真实姓名', dataIndex: 'relName'},
    {title: '详细地址', dataIndex: 'address'},
    {title: '手机号', dataIndex: 'phone'},
    {title: '审核结果', dataIndex: 'status'},
    {title: '用户身份', dataIndex: 'identity'},
    {title: '操作', dataIndex: '', key: 'x', render: (txt: any, record: any, index: number) => {
        return (
            <div className={AuditInformationLess.delBtn}>
                <Popconfirm title='确定删除该条公告吗？' 
                    onCancel={()=>{console.log('取消')}} 
                    onConfirm={()=>{console.log('确认', txt, record, index)}}>
                    <span>删除</span>
                </Popconfirm>
                <span>编辑</span>
            </div>
        )
    }}
  ];

  const [dataSource, setDataSource] = useState([]); // table 数据
  const [total, setTotal] = useState(0); // 总条数
  const [pageIndex, setPageIndex] = useState(1); // 页码
  // 初始化请求
  const listQuery = (page: number) => {
    const params = {
      pageSize: 10,
      pageIndex: page,
      type: 1
    }
    ListApi({params}).then((res: any)=>{
      console.log(res.data)
      setDataSource(res.data)
      setTotal(res.count)

    })

  }

  useEffect(() => {  // React-Hooks
    listQuery(1)
  }, []);

  
  // 分页
  const loadData = (page: number) =>{
    setPageIndex(page)
    listQuery(page)
  };

  return (
    <Card title='通知中心' extra={<button 
        onClick={()=>props.dispatch({
            type: 'READ_ALL'
        })
    }>全部已读</button>}>
        <Table 
        columns={columns} 
        pagination={{total, defaultPageSize: 10, onChange: loadData, current: pageIndex}} 
        dataSource={dataSource} 
        rowKey={record => record.id}/>
    </Card>
  )

}

export default connect(state=>state)(Notice)