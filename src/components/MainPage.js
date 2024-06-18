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
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme,Button } from 'antd';
import { Link ,useNavigate} from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
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
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 1,
          }}
        />
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
          />
        </Sider>
        <Layout
          style={{
            padding: '0 100% 90%',
          }}
        >
          <Breadcrumb
            style={{
              margin: '12px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
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