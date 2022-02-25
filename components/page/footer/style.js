import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const Style = styled(Grid)`
  height: 475px;
  width: 100%;
  text-align: center;
  z-index: 20;
  position: relative;
  h2 {
    margin-top: 59px;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 16px;
    font-weight: 500;
    color: #606060;
    margin: 0;
  }
  .social-row {
    width: auto;
    p {
      margin: 0;
      margin-left: 10px;
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 62px;
    background-color: #252525;
    border-top: 12px solid #101010;
  }
  .footer_triangle {
    position: absolute;
    bottom: 0;
    width: 367px;
    height: 193px;
    background-color: #252525;
    clip-path: polygon(0 100%,50% 0,100% 100%);
    left: 584.5px;
    z-index: 30;
    display: flex;
    justify-content: center;
    cursor: pointer;

  }
  .footer_triangle_orange {
    position: absolute;
    bottom: 0;
    width: 391px;
    height: 205px;
    background-color: #D95225;
    clip-path: polygon(0 100%,50% 0,100% 100%);
    left: 572.5px;
    z-index: 10;
  }
  .copyRight {
      position: absolute;
      left: 300px;
      top: -10px;
      color: #FFF;
      font-weight: 400;
      font-size: 12px;
      span {
          font-weight: 700;
      }
  }
  .copyRight2 {
      position: absolute;
      right: 300px;
      top: -10px;
      color: #FFF;
      font-weight: 400;
      font-size: 12px;
      span {
          font-weight: 700;
      }
  }
`;
