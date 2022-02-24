import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';

const Style = styled(Grid)`
  height: 368px;
  width: 368px;
  background-color: #101010;
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.25);
  clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    color: #fff;
    font-weight: 400;
    font-size: 20px;
    margin: 0;
    display: block;
  }
  h2 {
    color: #e95727;
    display: block;
    font-weight: 400;
    font-size: 28px;
    margin: 0;
    margin-top: 4px;
  }
`;

const index = () => {
  return (
    <Style>
      <div>
        <h3>Why</h3>
        <h2>QueeArt</h2>
      </div>
    </Style>
  );
};

export default index;
