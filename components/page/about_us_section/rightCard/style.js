import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const Style = styled(Grid)`
  .black {
    height: 240px;
    width: 240px;
    background-color: #353535;
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.25);
    clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
    position: absolute;
    left: 0;
    transition: all 0.6s ease;
    display: flex;
    justify-content: center;
    cursor: default;
    text-align: center;
    h4 {
      font-size: 20px;
      font-weight: 400;
      color: #fff;
      margin: auto;
      width: 100px;
      transition: all 0.6s ease;
      margin-top: 60%;
      text-align: center;
    }
    h5 {
      /* visibility: hidden; */
      font-size: 11px;
      font-weight: 400;
      color: #fff;
      margin: 0;
      width: 150px;
      transition: all 0.6s ease;
      opacity: 0;
    }
  }
  .orange {
    height: 240px;
    width: 240px;
    background-color: #e95727;
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.25);
    clip-path: polygon(0 50%, 50% 0, 100% 50%, 50% 100%);
    position: absolute;
    left: 12px;
    top: 0;
    transition: all 0.6s ease;
  }
  &:hover .orange {
    transform: rotate(-45deg);
    transition: all 0.6s ease;
    height: 198px;
    width: 198px;
    left: 21px;
    top: 20px;
  }
  &:hover .black {
    background-color: #1c1c1c;
    transition: all 0.6s ease;
  }
  &:hover h4 {
    font-size: 16px;
    transition: all 0.6s ease;
    margin-top: 30%;
  }
  &:hover h5 {
    /* visibility: visible; */
    opacity: 1;
    margin-top: 20%;
    transition: all 0.6s ease;
  }
`;
