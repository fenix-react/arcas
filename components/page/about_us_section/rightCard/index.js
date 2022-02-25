import React from 'react';
import { Orange, Style } from './style';

const Card = props => {
  return (
    <Style {...props}>
      <div className="orange"></div>
      <div className="black">
        <div>
          <h4>{props.children}</h4>
          <h5>{props.desc}</h5>
        </div>
      </div>
    </Style>
  );
};

export default Card;
