import React, { FC } from 'react';
import { Button, Result, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();
  return (
    <Row justify="center" align="middle" className="centeringPage">
      <Result
        status="404"
        title="404"
        subTitle="Извините, страница не найдена"
        extra={
          <Button type="primary" onClick={() => navigate(RouteNames.USD)}>
            На главную
          </Button>
        }
      />
    </Row>
  );
};

export default NotFoundPage;
