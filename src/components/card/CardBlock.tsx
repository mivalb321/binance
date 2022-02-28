import React, { FC } from 'react';

import './cardBlock.css';

interface ICardProps {
  title: string;
  price: string;
  priceChange: string | number;
}

const CardBlock: FC<ICardProps> = ({
  title,
  price,
  priceChange,
}: ICardProps) => {
  const classNameCard = `card ${priceChange >= 0 ? 'green' : 'pink'}`;

  return (
    <div className={classNameCard}>
      <div className="card-title">{title}</div>
      <div className="price-wrapper">
        <div className="card-price">{price}</div>
        <div className="card-price-change">{`${priceChange} %`}</div>
      </div>
    </div>
  );
};

export default CardBlock;
