import React from 'react';
import { Style } from './style';
import MainCard from './mainCard';
import Card from './card';
import RightCard from './rightCard';

const Index = () => {
  const renderPosition = (top, left) => {
    return {
      width: '252px',
      height: '252px',
      position: 'absolute',
      top: top,
      left: left
    };
  };

  return (
    <Style>
      <MainCard />
      <Card style={renderPosition('100px', '424px')} />
      <Card style={renderPosition('372px', '424px')} />
      <Card style={renderPosition('237.5px', '272px')} />
      <RightCard style={renderPosition('100px', '856px')} />
      <RightCard style={renderPosition('372px', '856px')} />
      <RightCard style={renderPosition('237.5px', '1008px')} />
    </Style>
  );
};

export default Index;
