import React, { FC } from 'react';
import { Layout } from 'antd';

import './App.css';
import AppRouter from './AppRouter';

const App: FC = () => {
  return (
    <Layout className="layout">
      <AppRouter />
    </Layout>
  );
};

export default App;
