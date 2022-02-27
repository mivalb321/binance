/* eslint-disable no-unused-expressions */
import React from 'react';
import BtcPage from '../pages/btcPage/BtcPage';
import EthPage from '../pages/ethPage/EthPage';
import NotFoundPage from '../pages/notFoundPage/NotFoundPage';
import UsdPage from '../pages/usdPage/UsdPage';

export interface IRoute {
  path?: string;
  element: React.ComponentType<any>;
  index?: boolean;
  id: number;
}

export enum RouteNames {
  USD = '/',
  ETH = 'ethereum',
  BTC = 'bitcoin',
  NOT_FOUND = '*',
}

export const publicRoutes: IRoute[] = [
  { index: true, element: UsdPage, id: 1 },
  { path: RouteNames.ETH, element: EthPage, id: 2 },
  { path: RouteNames.BTC, element: BtcPage, id: 3 },
  { path: RouteNames.NOT_FOUND, element: NotFoundPage, id: 4 },
];
