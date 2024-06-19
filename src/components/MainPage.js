/*
import React from 'react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import { Link ,useNavigate} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Eğer backend'de bir logout endpoint varsa burayı kullanabilirsiniz
      // const response = await axios.post('http://localhost:5003/logout');
      // Burada logout işlemini yapıyoruz, örneğin token'ı localStorage'dan siliyoruz
      localStorage.removeItem('token'); // Kullanıcı bilgilerini veya token'ı sakladığınız yeri temizleyin
      alert('Log Out');
      navigate('/'); // Giriş sayfasına yönlendirme
    } catch (error) {
      console.error('An error occurred during logout!', error);
      alert('An error occurred while logging out');
    }
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'absolute',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
      <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <Button type='primary' onClick={handleLogout}>Log Out</Button>
      </Header>


      <Content
        style={{
          padding: '2px 387px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '36px 464px',
          }}
        >
        </Breadcrumb>
        <div
          style={{
            padding: 400,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          
        </div>
      </Content>



      <Footer
        style={{
          textAlign: 'center',
        }}
      >
      </Footer>



    </Layout>
  );
};
export default MainPage;
*/




/*
import React from 'react';
import { useNavigate} from 'react-router-dom';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,Button } from 'antd';
const { Header, Content, Sider } = Layout;
//const items1 = ['1', '2', '3','4'].map((key) => ({key, label: `nav ${key}`,}));
const items1 = [
  { key: '1', label: 'Anasayfa' },      // Updated from 'nav 1' to 'Anasayfa'
  { key: '2', label: 'takvim' },        // 'nav 2' to 'takvim'
  { key: '3', label: 'yapılacaklar listesi' },  // 'nav 3' to 'yapılacaklar listesi'
  { key: '4', label: 'raporlar yap' },  // 'nav 4' to 'raporlar yap'
];
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.removeItem('token'); // Kullanıcı bilgilerini veya token'ı sakladığınız yeri temizleyin
      //alert('Log Out');
      navigate('/'); // Giriş sayfasına yönlendirme
    } catch (error) {
      console.error('An error occurred during logout!', error);
      alert('An error occurred while logging out');
    }
  };

  const handleNavigateToDoList = () => {
    navigate('/to-do-list'); // Yapılacaklar listesi sayfasına yönlendirme
  };
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#001529',
          padding: '40px 45px',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items1}
          style={{
            flex: 1,
            display:'flex',
            justifyContent:'center',
            minWidth: 0,
          }}
        >
           {items1.map(item => (
            <Menu.Item key={item.key} onClick={item.key === '2' ? handleNavigateToDoList : null}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
        <Button type='primary' onClick={handleLogout}>Log Out</Button>
      </Header>
    <Layout>
      <Sider
        width={200}
        style={{
          background: colorBgContainer,
        }}
      >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={items2}
          >
              {items2.map(item => (
                <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                  {item.children.map(child => (
                    <Menu.Item key={child.key}>{child.label}</Menu.Item>
                  ))}
                </Menu.SubMenu>
              ))}
          </Menu>
      </Sider>
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
          padding: 24,
          margin: 0,
          minHeight: 750,
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
      </Content>
      </Layout>
      </Layout>
    </Layout>
  );
};
export default MainPage;
*/
/*
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';
const { Header, Content, Sider } = Layout;

const items1 = [
  { key: '1', label: 'Anasayfa' },
  { key: '2', label: 'Takvim' },
  { key: '3', label: 'Yapılacaklar Listesi' },
  { key: '4', label: 'Raporlar Yap' },
];

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = `sub${index + 1}`;
  return {
    key,
    icon: React.createElement(icon),
    label: `Subnav ${index + 1}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: `option${subKey}`,
        label: `Option ${subKey}`,
      };
    }),
  };
});

const MainPage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      navigate('/'); // Giriş sayfasına yönlendirme
    } catch (error) {
      console.error('Çıkış yapılırken bir hata oluştu!', error);
      alert('Çıkış yapılırken bir hata oluştu');
    }
  };

  const handleNavigateToDoList = () => {
    navigate('/to-do-list'); // Yapılacaklar listesi sayfasına yönlendirme
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#001529',
          padding: '16px 25px',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {items1.map(item => (
            <Menu.Item key={item.key} onClick={item.key === '3' ? handleNavigateToDoList : null}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
        <Button type='primary' onClick={handleLogout}>Çıkış Yap</Button>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
          >
            {items2.map(item => (
              <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
                {item.children.map(child => (
                  <Menu.Item key={child.key}>{child.label}</Menu.Item>
                ))}
              </Menu.SubMenu>
            ))}
          </Menu>
        </Sider>
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
            {/* Breadcrumb öğeleri buraya eklenebilir }
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 750,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            İçerik
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainPage;
*/

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button, Flex, Calendar } from 'antd';
import ToDoList from './ToDoList'; // ToDoList bileşenini import edin
import './MainPage.css';



const { Header, Content, Sider } = Layout;

const items1 = [
  { key: '1', label: 'Home',className:'menu-item-anasayfa'},
  { key: '2', label: 'Calendar' ,className:'menu-item-takvim'},
  { key: '3', label: 'To Do List',className:'menu-item-yapilacaklar' },
  { key: '4', label: 'Make reporting',className:'menu-item-raporlar' },
];

const items2=[
  { key: '1', label: 'Calendar View',className:'takvim-sidebar'},
  { key: '2', label: 'Filter' ,className:'filtre-sidebar'},
  { key: '3', label: 'Routine Work',className:'rutin-sidebar' },
]
/*
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = `sub${index + 1}`;
  return {
    key,
    icon: React.createElement(icon),
    label: `Subnav ${index + 1}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: `option${subKey}`,
        label: `Option ${subKey}`,
      };
    }),
  };
});
*/
const MainPage = () => {
  const navigate = useNavigate();
  const [selectedMenuKey, setSelectedMenuKey] = useState('1');

  const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      navigate('/'); // Giriş sayfasına yönlendirme
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
        return <div>Anasayfa İçeriği</div>;
      case '2':
        return <div className='calendar-container'><Calendar/></div>;
      case '3':
        return <ToDoList /> ;  
      case '4':
        return <div>Raporlar Yap İçeriği</div>;
      default:
        return <div>Anasayfa İçeriği</div>;
    }
  };

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          background: '#001529',
          padding: '48px 35px',
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
            paddingLeft:10
          }}
        >
          {items1.map(item => (
            <Menu.Item key={item.key} className={item.className}>
              {item.label}
            </Menu.Item>
          ))}
        </Menu>
        <Button  className='log-out-button' type='primary' onClick={handleLogout}>Log Out</Button>
      </Header>
      <Layout>
        <Sider
          width={230}
          style={{
            backgroundColor:'#f0f8ff',
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
              padding:8,
            }}
          >
            {items2.map(item => (
            <Menu.Item key={item.key} className={item.className}>
              {item.label}
            </Menu.Item>
          ))}
          </Menu>
        </Sider>
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
            {/* Breadcrumb öğeleri buraya eklenebilir */}
          </Breadcrumb>
          <Content
            style={{
              minHeight: 750,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              backgroundColor:'#f0f8ff',
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
