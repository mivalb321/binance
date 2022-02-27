import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from './router';

import MainLayout from './layouts/mainLayout/MainLayout';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {publicRoutes.map((route) => {
        return (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.id}
            index={route.index}
          />
        );
      })}
    </Route>
  </Routes>
);

export default AppRouter;
