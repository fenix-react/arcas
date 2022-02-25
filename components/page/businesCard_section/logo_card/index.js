import React, { useState } from 'react';
import { Style } from './style';
import Keyon from '../../../../public/static/assets/logos/blackandwhite/keyon.js';
import Raven from '../../../../public/static/assets/logos/blackandwhite/raven';
import Valmart from '../../../../public/static/assets/logos/blackandwhite/valmart';
import Randeno from '../../../../public/static/assets/logos/blackandwhite/randeno';
import Chapagha from '../../../../public/static/assets/logos/blackandwhite/chapagha';
import Narsis from '../../../../public/static/assets/logos/blackandwhite/narsis';
import Sorkhab from '../../../../public/static/assets/logos/blackandwhite/sorkhab';
import Invex from '../../../../public/static/assets/logos/blackandwhite/invex';
import OGN from '../../../../public/static/assets/logos/blackandwhite/ogn';
import Ethirion from '../../../../public/static/assets/logos/blackandwhite/ethirion';
import Armin from '../../../../public/static/assets/logos/blackandwhite/armin';
import Coderiders from '../../../../public/static/assets/logos/blackandwhite/coderiders';
import Ali from '../../../../public/static/assets/logos/blackandwhite/ali';
import Vigen from '../../../../public/static/assets/logos/blackandwhite/vigen';
import Nosafom from '../../../../public/static/assets/logos/blackandwhite/nosafom';

const LogoCard = ({
  name,
  genre,
  icon,
  onMouseLeave,
  onMouseEnter,
  isLeft
}) => {
  const [show, setShow] = useState(false);
  const renderIcon = () => {
    switch (icon) {
      case 'keyon':
        return <Keyon style={{ width: '42px', height: '42px' }} />;
      case 'raven':
        return <Raven style={{ width: '42px', height: '42px' }} />;
      case 'valmart':
        return <Valmart style={{ width: '42px', height: '42px' }} />;
      case 'randeno':
        return <Randeno style={{ width: '42px', height: '42px' }} />;
      case 'chapagha':
        return <Chapagha style={{ width: '42px', height: '42px' }} />;
      case 'narsis':
        return <Narsis style={{ width: '42px', height: '42px' }} />;
      case 'sorkhab':
        return <Sorkhab style={{ width: '42px', height: '42px' }} />;
      case 'invex':
        return <Invex style={{ width: '42px', height: '42px' }} />;
      case 'ogn':
        return <OGN style={{ width: '42px', height: '42px' }} />;
      case 'ethirion':
        return <Ethirion style={{ width: '42px', height: '42px' }} />;
      case 'armin':
        return <Armin style={{ width: '42px', height: '42px' }} />;
      case 'coderiders':
        return <Coderiders style={{ width: '42px', height: '42px' }} />;
      case 'ali':
        return <Ali style={{ width: '42px', height: '42px' }} />;
      case 'vigen':
        return <Vigen style={{ width: '42px', height: '42px' }} />;
      case 'nosa':
        return <Nosafom style={{ width: '42px', height: '42px' }} />;

      default:
        return 'Icon';
    }
  };

  return (
    <Style
      onMouseLeave={() => {
        setShow(false);
        onMouseLeave();
      }}
      onMouseEnter={() => {
        setShow(true);
        onMouseEnter();
      }}
      container
      alignItems="center"
      justifyContent="space-between">
      {show && <div className={isLeft ? 'orangePinRight' : 'orangePin'}></div>}
      <div>{renderIcon()}</div>
      <div>
        <h4>{name}</h4>
        <p>{genre}</p>
      </div>
    </Style>
  );
};

export default LogoCard;
