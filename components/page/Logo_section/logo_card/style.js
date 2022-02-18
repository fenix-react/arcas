import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { keyframes } from '@emotion/react';

const slideInAnimation = keyframes`
0% {width: 0; left:0}
60% {width: 6px; left: -6px}
100% {width: 3px; left: -3px}
`;

export const Style = styled(Grid)`
  width: 268px;
  height: 86px;
  background-color: #313131;
  border-radius: 6px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
  margin-left: 12px;
  margin-bottom: 12px;
  padding: 20px;
  transition: all 0.5s ease;
  position: relative;
  &:hover {
    background-color: #101010;
    transition: all 0.5s ease;
  }
  h4,
  p {
    margin: 0;
    color: #fff;
  }
  h4 {
    font-weight: 500;
    font-size: 16px;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    margin-top: 6px;
  }
  .orangePin {
    height: 74px;
    width: 4px;
    background-color: #e95727;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px 0 0 6px;
    position: absolute;
    top: 6px;
    left: -4px;
    animation-name: ${slideInAnimation};
    animation-duration: 0.3s;
  }
`;
