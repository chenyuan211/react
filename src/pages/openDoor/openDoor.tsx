import React, { Component } from 'react';
import { Button } from 'antd';

export default class OpenDoor extends Component {
  render() {
    return (<div>
      <h1>我是开门路由</h1>
      <Button type='primary'>antd按钮</Button>
    </div>)
  }
}