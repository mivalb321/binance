import React, { FC } from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { HeaderComponent } from '../../components';

import './mainLayout.css';

const { Content } = Layout;

const MainLayout: FC = () => (
  <Layout>
    <HeaderComponent />
    <Content>
      <Outlet />
    </Content>
  </Layout>
);

export default MainLayout;
