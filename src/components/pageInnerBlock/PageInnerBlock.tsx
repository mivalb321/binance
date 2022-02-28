import React, { FC, useEffect, useRef } from 'react';
import { Button, Row, Spin } from 'antd';

import { useActions, useTypedSelector } from '../../hooks';
import { filteredData } from '../../utils';
import { CardWrapper } from '../../components';
import { ErrorPage } from '../../pages';

interface IPageInnerBlock {
  suffix: string;
}

const PageInnerBlock: FC<IPageInnerBlock> = ({ suffix }) => {
  const { fetchExchangeRate } = useActions();
  const { dataRate, isError } = useTypedSelector(
    (state) => state.getExchangeRate
  );

  let timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startFetch();
    return () => stopFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startFetch = () => {
    fetchExchangeRate();
    timer.current = setTimeout(function run() {
      fetchExchangeRate();
      timer.current = setTimeout(run, 3000);
    }, 3000);
  };

  const stopFetch = () => {
    clearTimeout(timer.current as NodeJS.Timeout);
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
      ) : dataRate ? (
        <CardWrapper data={filteredData(dataRate, 20, suffix)} />
      ) : (
        <Row justify="center" align="middle" style={{ height: '100%' }}>
          <Spin size="large" />
        </Row>
      )}
    </>
  );
};

export default PageInnerBlock;
