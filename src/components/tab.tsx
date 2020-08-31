import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Badge } from 'antd';
import { withRouter } from 'react-router-dom'
import { UserOutlined, LaptopOutlined, FundOutlined, DownOutlined } from '@ant-design/icons';
import Logo from '../assets/image/logo.png'
import HeadPortrait from '../assets/image/1.jpg'
import tabLess from './tab.less'
import MenuItem from 'antd/lib/menu/MenuItem';
import { clearToken } from '../utils/auth'
import { connect } from 'react-redux'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class Tab extends Component<any, any> {
  propMenuBtn = () => {
    clearToken('')
    this.props.history.push('/login')

  }
  noticeBtn = () => {
    this.props.history.push('/admin/notice')
  }
  render() {
    console.log(this.props)
    const menuList = {
      work: {name: '工作台', path: '/admin', icon: <FundOutlined />},
      mainList: [{name: '审核管理', path: '/admin/auditInformation', icon: <LaptopOutlined />, children:[
        {name: '审核信息', path: '/admin/auditInformation'}
      ]},
      {name: '发布公告', path: '/admin/property', icon: <UserOutlined />, children:[
        {name: '物业公告', path: '/admin/property'}
      ]}]
    }
    const propMenu = (
      <Menu>
        <MenuItem onClick={this.noticeBtn} key='noti'>通知中心</MenuItem>
        <MenuItem onClick={this.propMenuBtn} key='loginOut'>退出</MenuItem>
      </Menu>
    )
    return (<Layout>
        <Header className={tabLess.header}>
          <div className={tabLess.logo}>
            <img src={Logo} alt=""/>
          </div>
          <div className={tabLess.exit}>
             <Dropdown overlay={propMenu}>
                <div className={tabLess.Dropdown}>
                  <span>{this.props.UserInforn.username}<Badge dot={!this.props.Notice.isAllRead}></Badge></span>
                  <DownOutlined></DownOutlined>
                </div>
             </Dropdown>
             <div className={tabLess.HeadPortrait}>
               <img src={this.props.UserInforn.head} alt=""/>
             </div>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key={menuList.work.path} icon={menuList.work.icon} onClick={p=>this.props.history.push(p.key)}>
                {menuList.work.name}
              </Menu.Item>
              {menuList.mainList.map(route=>{
                return (
                <SubMenu key={route.path} icon={route.icon} title={route.name}>{
                  route.children.map(childRoute=>{
                    return (
                    <Menu.Item key={childRoute.path} onClick={p=>this.props.history.push(p.key)}>{childRoute.name}</Menu.Item>
                    )
                  })
                }</SubMenu>
                )
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: '16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb> */}
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
    </Layout>)
  }
}
const mapStateToProps = (state: any)=> state
export default connect(mapStateToProps)(withRouter(Tab));
