import React, { FC } from 'react';
import { Menu, Layout } from 'antd';
import { Link } from 'react-router-dom';
import { RouteNames } from '../../router';

import './header.css';

const { Header } = Layout;

const HeaderComponent: FC = () => {
  const navItem = [
    { id: 1, itemName: 'USD', to: RouteNames.USD },
    { id: 2, itemName: 'BTC', to: RouteNames.BTC },
    { id: 3, itemName: 'ETH', to: RouteNames.ETH },
  ];
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        {navItem.map((item) => {
          return (
            <Menu.Item key={item.id}>
              <Link to={item.to}>{item.itemName}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Header>
  );
};

export default HeaderComponent;
