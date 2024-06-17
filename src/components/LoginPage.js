/*
import React from 'react';
import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,Form, Input ,Checkbox} from 'antd';
import { BrowserRouter as Router, Switch, Route, Link ,img} from 'react-router-dom';
import './LoginPage.css';
import myImage from 'D://masaüstü//personelplanner//personelplanner//src//images//agenda2.jpg'
import axios from 'axios';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const LoginPage=()=>{
    const [eposta, seteposta] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const endpoint = isLogin ? 'login' : 'register';
      try {
        const response = await axios.post(`http://localhost:5000/${endpoint}`, { eposta, password });
        console.log(response.data);
        if (isLogin) {
          alert('Login successful');
        } else {
          alert('Registration successful');
        }
      } catch (error) {
        console.error('There was an error!', error);
        alert('There was an error!');
      }
    };


    return(
      <div className='container'>
        <div className='info'>
            <img src={myImage} alt="Takvim Resim" />
            <h2>Welcome Personel Planner Web Site!</h2>
            <p>You can benefit from the advantages by logging into our platform.</p>
        </div>
        <div className='h2-form'>
              <h2 className='login'>Login</h2>
              <Form
                name="basic"
                labelCol={{
                  span: 6,
                }}
                wrapperCol={{
                  span: 20,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
              >
              <Form.Item
                label="Eposta"
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              >
                <Input className='input-eposta' type='text' value={eposta} onChange={(e) => seteposta(e.target.value)}/>
              </Form.Item>

              <Form.Item
                label="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password className='input-password'  type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </Form.Item>

                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button className="login-button" type="primary" htmlType="submit" onClick={() => setIsLogin(!isLogin)}>
                    Login
                  </Button>
                </Form.Item>
              </Form>
              <p>
                <Link to="/register">Don't you have account Create one !</Link>
              </p>
          </div>
    </div>
    );
}
export default LoginPage;
*/
import React, { useState } from 'react';
import { Button, Form, Input, Checkbox } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import myImage from 'D://masaüstü//personelplanner//personelplanner//src//images//agenda2.jpg'

const LoginPage = () => {
  const [eposta, setEposta] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = async (values) => {
    console.log('Success:', values);

    try {
      const response = await axios.post('http://localhost:5000/login', { eposta, password });
      console.log(response.data);
      alert('Login successful');
    } catch (error) {
      console.error('There was an error!', error);
      alert('There was an error!');
    }
  };


  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
/*
  async function submit(e){
    e.preventDefault();
    const data = { eposta, password };
    try{
      const response=await axios.post("http://localhost:5000",data);
      console.log(response.data);
      alert('Login successful');
    }catch (error) {
      console.error('There was an error!', error);
      alert('There was an error!');
    }
  }
*/

  return (
    <div className='container'>
      <div className='info'>
        <img src={myImage} alt="Takvim Resim" />
        <h2>Welcome Personel Planner Web Site!</h2>
        <p>You can benefit from the advantages by logging into our platform.</p>
      </div>
      <div className='h2-form'>
        <h2 className='login'>Login</h2>
        <Form action='POST'
            name="basic"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 20 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
        >
          <Form.Item
            label="Eposta"
            name="eposta"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className='input-eposta' type='email' value={eposta} onChange={(e) => setEposta(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className='input-password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className="login-button" type="primary" htmlType="submit" onClick={onFinish}>
              Login
            </Button>
          </Form.Item>
        </Form>
        <p>
          <Link to="/register">Don't you have account? Create one!</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
