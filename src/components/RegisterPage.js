/*
import React from 'react';
import { useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,Form, Input ,Checkbox} from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './RegisterPage.css';
import axios from 'axios';

const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

const RegisterPage=()=>{
    const [eposta, setEposta] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();

      const data = {name, surname,eposta,password };

      try {
        const response = await axios.post('http://localhost:5000/register', data);
        console.log(response.data);
        alert('Registration successful');
      } catch (error) {
        console.error('There was an error!', error);
        alert('There was an error!');
      }
    };

    return(
        <div className='h2-formm'>
              <h2 className='register'>Register</h2>
              <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 17,
                }}
                style={{
                  maxWidth: 800,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
              <Form.Item
                label="Name"
                name="Name"
                rules={[
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ]}
              >
                <Input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              </Form.Item>

              <Form.Item
                label="Surname"
                name="surname"
                rules={[
                  {
                    required: true,
                    message: 'Please input your surname!',
                  },
                ]}
              >
                <Input type="text" value={surname} onChange={(e) => setSurname(e.target.value)}/>
                  </Form.Item>
                  <Form.Item
                    label="Eposta"
                    name="Eposta"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your eposta!',
                      },
                    ]}
                  >
                <Input  type="email" value={eposta} onChange={(e) => setEposta(e.target.value)} />

              </Form.Item>
              <Form.Item
                label="Password"
                name="Password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
              <Input.Password  type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

              </Form.Item>
              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button style={{ marginRight: '20px' }}type="primary" htmlType="submit">
                  Register
                </Button>

                <Link to="/">
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
              </Link>
              </Form.Item>
            </Form>
      </div>
      );
}

export default RegisterPage;
*/
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

  const onFinish = async (values) => {
    console.log('Success:', values);
    const data = { name, surname, eposta, password };

    try {
      const response = await axios.post('http://localhost:5000/register', data);
      console.log(response.data);
      alert('Registration successful');
    } catch (error) {
      console.error('There was an error!', error);
      alert('There was an error!');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
        onFinishFailed={onFinishFailed}
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

/*
  const onFinish = async () => {
    const data = { name, surname, eposta, password };

    try {
      //console.log(data);
      await axios.post('http://localhost:4000/register', data).then(result=>console.log(result))
      //console.log(response.data);
      alert('Registration successful');
    } catch (error) {
      console.error('There was an error!', error);
      alert('There was an error!');
    }
  };
*/
/*
const onFinishh= async()=>{
 // e.preventDefault()
  const data = { name, surname, eposta, password };
  try{
    axios.post('http://localhost:5000/register',data)
    .then(result=>console.log(result))
  }catch(error){
    console.error('There was an error!', error);
      alert('There was an error!');
  }

}
  */

const onFinish = async () => {
  const data = { name, surname, eposta, password };

  try {
    console.log('Sending data:', data); // Verilerin gönderilmeden önceki halini kontrol edin
    const response = await axios.post('http://localhost:4000/register', data);
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
