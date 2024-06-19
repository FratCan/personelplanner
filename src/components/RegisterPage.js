/*
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [eposta, setEposta] = useState('');
  const [password, setPassword] = useState('');



const onFinish = async () => {
  const data = { name, surname, eposta, password };

  try {
    console.log('Sending data:', data); // Verilerin gönderilmeden önceki halini kontrol edin
    const response = await axios.post('http://localhost:5003/register', data);
    console.log('Response data:', response.data); // Backend'den gelen yanıtı kontrol edin
    alert('Registration successful');
  } catch (error) {
    if (error.response) {
      // Server yanıt döndüyse
      console.error('Server responded with an error:', error.response.data);
    } else if (error.request) {
      // İstek yapıldı ama cevap alınamadı
      console.error('No response received:', error.request);
    } else {
      // İstek hazırlama sırasında hata oldu
      console.error('Error in setting up the request:', error.message);
    }
    alert('There was an error!');
  }
};

  return (
    <div className='h2-formm'>
      <h2 className='register'>Register</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 17 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Surname"
          name="surname"
          rules={[{ required: true, message: 'Please input your surname!' }]}
        >
          <Input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Eposta"
          name="eposta"
          rules={[{ required: true, message: 'Please input your eposta!' }]}
        >
          <Input type="email" value={eposta} onChange={(e) => setEposta(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button style={{ marginRight: '20px' }} type="primary" htmlType="submit">
            Register
          </Button>
          <Link to="/">
            <Button type="primary">Login</Button>
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;
*/
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RegisterPage.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [eposta, setEposta] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onFinish = async () => {
    const data = { name, surname, eposta, password };

    try {
      console.log('Sending data:', data); // Verilerin gönderilmeden önceki halini kontrol edin
      const response = await axios.post('http://localhost:5003/register', data);
      console.log('Response data:', response.data); // Backend'den gelen yanıtı kontrol edin
      alert('Registration successful');
      setErrorMessage(''); // Clear any previous error messages
    } catch (error) {
      if (error.response) {
        // Server yanıt döndüyse
        console.error('Server responded with an error:', error.response.data);
        if (error.response.data.error === 'User already exists') {
          setErrorMessage('User already exists');
        } else {
          setErrorMessage('There was an error!');
        }
      } else if (error.request) {
        // İstek yapıldı ama cevap alınamadı
        console.error('No response received:', error.request);
        setErrorMessage('No response received from server');
      } else {
        // İstek hazırlama sırasında hata oldu
        console.error('Error in setting up the request:', error.message);
        setErrorMessage('Error in setting up the request');
      }
    }
  };

  return (
    <div className='container-2'>
        <div className='h2-formm'>
      <h2 className='register'>Register</h2>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 17 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Surname"
          name="surname"
          rules={[{ required: true, message: 'Please input your surname!' }]}
        >
          <Input type="text" value={surname} onChange={(e) => setSurname(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Eposta"
          name="eposta"
          rules={[{ required: true, message: 'Please input your eposta!' }]}
        >
          <Input type="email" value={eposta} onChange={(e) => setEposta(e.target.value)} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button style={{ marginRight: '10px' }} type="primary" htmlType="submit">
            Register
          </Button>
          <Link to="/">
            <Button type="primary">Login</Button>
          </Link>
        </Form.Item>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
      </Form>
    </div>
    </div>
    
  );
};

export default RegisterPage;
