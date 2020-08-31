import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import loginLess from '../pages/login.less'
import { setToken } from '../utils/auth'
import { LoginApi } from '../services/loginApi'
import { connect } from 'react-redux'

const Login = (props: any) => {
    console.log(props)
    const onFinish = (e: any)=>{
        // 切割字符串
        const stringCut =(str: string) =>{
            let uerLen = str.substring(2, str.length-2)
            uerLen = str.substring(str.length-2) + uerLen + str.substring(0, 2)
            return uerLen
        }
        const base64 = require('js-base64').Base64
        const params = {
        username:  stringCut(base64.encode(e.username)),
        password:  stringCut(base64.encode(e.password)),
        autoLogin: 0
        }
        LoginApi({params}).then((res: any)=>{
            console.log(res)
            if(res.code === 0 || res.code === '0') {
                setToken(res.data.ticket)
                props.history.push('/admin')
                props.dispatch({
                    type: 'User_Inforn',
                    userInforn: res.data
                })
            } else {
                message.error(res.message)
            }
        })

    }
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    return (
        <div className={loginLess.login}>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                    Submit
                    </Button>
                </Form.Item>
            </Form>

        </div>
    )

}
export default connect((state: any)=>state.UserInforn)(Login);