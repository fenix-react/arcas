import React from 'react';
import { Orange, Style } from './style';

const Card = props => {
  return (
    <Style {...props}>
      <div className="orange" />
      <div className="black" />
    </Style>
  );
};

export default Card;
