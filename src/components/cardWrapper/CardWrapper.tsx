import React, { FC } from 'react';
import { Row } from 'antd';
import { CardBlock } from '../../components';
import { IItemRate } from '../../store/redusers/getExchangeRate/types';

interface ICardWrapperProps {
  data: IItemRate[] | null;
}

const CardWrapper: FC<ICardWrapperProps> = ({ data }) => {
  return (
    <Row justify="center" align="middle" className="centeringPage">
      {data &&
        data.map((item, index) => {
          const roundedPrice = String(Number(item.lastPrice).toFixed(3));
          const roundedPriceChange = Number(item.priceChangePercent).toFixed(3);
          return (
            <CardBlock
              title={item.symbol}
              price={roundedPrice}
              priceChange={roundedPriceChange}
              key={index}
            />
          );
        })}
    </Row>
  );
};

export default CardWrapper;
