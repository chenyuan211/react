import React, { Component } from 'react';
import indexLess from './inde.less';
import {NavLink} from 'react-router-dom';
import Tab from '../components/tab'

export default class Home extends Component {
  // constructor(props: any) {
  //   super(props)
  //   this.state = {
  //     msg: '我是state复制组件'
  //   }
  // }
  state = { // 简写
    msg: '555555555555',
    value: ''
  }
  btn= () => {
    console.log('点击事件')
    this.setState({
      msg: 'state赋值哦'
    })
  }
  changeBtn = (e: any) =>{
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    })
  }
  btnClick =() =>{
    console.log(this.state.value)
  }
  render() {
    const list = ['155', '5555', '6666', '55yyyyyyyyy']
    const { msg }: any = this.state
    const { value }: any = this.state
    return (<div className={indexLess.cardInfo}>
      <ul>
        {list.map((item, index) =>  // 循环渲染
          <li key={index}>{item}</li>
        )}
      </ul>
        <h1 onClick={this.btn}>{msg}</h1>
        <div>
         <input type="text" value={value} onChange={this.changeBtn}/>
         <button onClick={this.btnClick}>点击获取input的值</button>
        </div>
        <NavLink to="/openDoor/openDoor"> 跳转开门页面</NavLink>
        <NavLink to="/login"> 跳到等领域</NavLink>
        <Tab></Tab>
    </div>)
  }
}