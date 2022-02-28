import React, { FC } from 'react';
import { Row } from 'antd';
import { CardBlock } from '../../components';
import { IItemRate } from '../../store/redusers/getExchangeRate/types';

interface ICardWrapperProps {
  data: IItemRate[];
}

const CardWrapper: FC<ICardWrapperProps> = ({ data }: ICardWrapperProps) => (
  <Row justify="center" align="middle" className="centeringPage">
    {data.map(({ symbol, lastPrice, priceChangePercent }) => {
      const roundedPrice = String(Number(lastPrice).toFixed(3));
      const roundedPriceChange = Number(priceChangePercent).toFixed(3);
      return (
        <CardBlock
          title={symbol}
          price={roundedPrice}
          priceChange={roundedPriceChange}
          key={symbol}
        />
      );
    })}
  </Row>
);

export default CardWrapper;
