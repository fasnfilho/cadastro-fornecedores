import React from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import Home from './pages/Home';
import './App.css'; 

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
        </Menu>
      </Header>
      <Content className="site-layout-content">
        <Home />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Sistema de Gestão de Fornecedores ©2023</Footer>
    </Layout>
  );
};

export default App;

