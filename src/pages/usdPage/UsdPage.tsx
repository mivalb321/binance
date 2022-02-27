import React, { FC, useEffect, useRef, useState } from 'react';
import { Button } from 'antd';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/redux';

import CardWrapper from '../../components/cardWrapper/CardWrapper';

import { filteredData } from '../../utils/filteredData';
import ErrorPage from '../../components/errorPage/ErrorPage';

const UsdPage: FC = () => {
  const { fetchExchangeRate } = useActions();
  const { dataRate, isError } = useTypedSelector(
    (state) => state.getExchangeRate
  );
  const [rerender, setRerender] = useState(0);

  let timer: any = useRef(null);

  useEffect(() => {
    fetchExchangeRate();
    timer.current = setTimeout(function run() {
      fetchExchangeRate();
      timer.current = setTimeout(run, 3000);
    }, 3000);
    return () => stopFetch();
  }, [rerender]);

  const stopFetch = () => {
    clearTimeout(timer.current);
  };

  const startFetch = () => {
    setRerender(Math.random());
  };

  return (
    <>
      <Button
        onClick={stopFetch}
        danger
        style={{ margin: '10px 0 0 80px', width: '100px' }}
      >
        STOP
      </Button>
      <Button
        onClick={startFetch}
        type="primary"
        ghost
        style={{ margin: '10px 0 0 20px', width: '100px' }}
      >
        UPDATE
      </Button>
      {isError ? (
        <ErrorPage value={isError} />
      ) : (
        dataRate && <CardWrapper data={filteredData(dataRate, 20, 'USDT')} />
      )}
    </>
  );
};

export default UsdPage;
