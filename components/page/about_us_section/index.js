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
      <Card
        desc="Had the privilage to work on and
deliver +30 projects"
        style={renderPosition('100px', '424px')}>
        +30 Successful Projects
      </Card>
      <Card
        desc="A perfect logo design should be
memorable! Meanwhile
Understandable"
        style={renderPosition('237.5px', '272px')}>
        Elegant Flat Design
      </Card>
      <Card
        desc="The policy here is never letting
down a customer"
        style={renderPosition('372px', '424px')}>
        Satisfied Customers
      </Card>
      <RightCard
        desc="Pay less than half of the usual
price for a top quality logo"
        style={renderPosition('100px', '856px')}>
        Affordable Prices
      </RightCard>
      <RightCard
        desc="Been in this field of work for
about 4 years"
        style={renderPosition('372px', '856px')}>
        4 Years’ Experience
      </RightCard>
      <RightCard
        desc="Designing your logo with full
creativity and innovation"
        style={renderPosition('237.5px', '1008px')}>
        Creative Innovative
      </RightCard>
    </Style>
  );
};

export default Index;
