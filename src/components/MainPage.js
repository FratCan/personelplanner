import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
import ToDoList from './ToDoList';
import Calendar from './Calendar'; // Import the Calendar component
import FilterReport from './FilterReport'; // Import the FilterReport component
import './MainPage.css';

const { Header, Content } = Layout;

const items1 = [
  { key: '1', label: 'To Do List', className: 'menu-item-yapilacaklar' },
  { key: '2', label: 'Calendar View', className: 'takvim-sidebar' },
  { key: '3', label: 'Filter And Report', className: 'menu-item-raporlar' },
];

const MainPage = () => {
  const navigate = useNavigate();
  const [selectedMenuKey, setSelectedMenuKey] = useState('1'); // Default to '1'
  const [todos, setTodos] = useState([]); // Initialize todos state
  /*
  const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      navigate('/'); // Giriş sayfasına yönlendirme
    } catch (error) {
      console.error('Çıkış yapılırken bir hata oluştu!', error);
      alert('Çıkış yapılırken bir hata oluştu');
    }
  };
  */
  const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      navigate('/', { replace: true }); // Use replace option to prevent back navigation
    } catch (error) {
      console.error('Çıkış yapılırken bir hata oluştu!', error);
      alert('Çıkış yapılırken bir hata oluştu');
    }
  };
  
  const handleMenuClick = (key) => {
    setSelectedMenuKey(key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const renderContent = () => {
    switch (selectedMenuKey) {
      case '1':
        return <ToDoList todos={todos} setTodos={setTodos} />; // Pass todos and setTodos to ToDoList
      case '2':
        return <Calendar todos={todos} />; // Render Calendar component
      case '3':
        return <FilterReport todos={todos} />; // Render FilterReport component
      default:
        return <div><ToDoList todos={todos} setTodos={setTodos} /></div>;
    }
  };

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#001529',
          padding: '54px 45px',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => handleMenuClick(key)}
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            paddingLeft: 10,
          }}
        >
          {items1.map(item => (
            <Menu.Item key={item.key} className={item.className}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
        <Button className='log-out-button' type='primary' onClick={handleLogout}>Log Out</Button>
      </Header>
      <Layout>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
          </Breadcrumb>
          <Content
            style={{
              paddingTop: 0,
              paddingLeft: 0,
              minHeight: 712,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainPage;
