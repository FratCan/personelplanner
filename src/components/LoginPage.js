import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Checkbox } from 'antd';
import axios from 'axios';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import myImage from 'D://masaüstü//personelplanner//personelplanner//src//images//agenda2.jpg';

const LoginPage = () => {
  const [eposta, setEposta] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/mainpage', { replace: true });
    }
  }, [navigate]);

  const onFinish = async (values) => {
    console.log('Success:', values);

    try {
      const response = await axios.post('http://localhost:5003/', {
        eposta: values.eposta,
        password: values.password
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      navigate('/mainpage', { replace: true });
    } catch (error) {
      console.error('There was an error!', error);
      alert('Wrong eposta or password !');
    }
  };
  return (
    <div className='container'>
      <div className='info'>
        <img src={myImage} alt="Takvim Resim" />
        <h2>Welcome Personel Planner Web Site!</h2>
        <p>You can benefit from the advantages by logging into our platform.</p>
      </div>
      <div className='h2-form'>
        <h2 className='login'>Login</h2>
        <Form
          action='POST'
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="on"
        >
          <Form.Item
            label="Eposta"
            name="eposta"
            rules={[{ required: true, message: 'Please input your eposta!' }]}
          >
            <Input className='input-eposta' type='email' value={eposta} onChange={(e) => setEposta(e.target.value)} />
          </Form.Item>
          <Form.Item className='password'
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
            <Button className="login-button" type="primary" htmlType="submit">
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
