import React, { FC } from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../router';

interface IErrorPageProps {
  value: string;
}

const ErrorPage: FC<IErrorPageProps> = ({ value }: IErrorPageProps) => {
  const navigate = useNavigate();

  return (
    <Result
      status="error"
      title="Ошибка!"
      subTitle={value}
      extra={
        <Button type="primary" onClick={() => navigate(RouteNames.USD)}>
          На главную
        </Button>
      }
    />
  );
};

export default ErrorPage;
