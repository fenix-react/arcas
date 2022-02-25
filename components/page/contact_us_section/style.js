import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const Style = styled(Grid)`
  height: 640px;
  width: 100%;
  text-align: center;
  z-index: 20;
  background-color: rgba(16, 16, 16, 0.2);
  margin-top: 60px;
  h2 {
    margin-top: 59px;
  }
  .submitForm {
    width: 900px;
    margin: auto;
    /* height: 380px; */
    margin-top: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;

    h6 {
      font-weight: 500;
      font-size: 14px;
      color: #404040;
      margin: auto;
      margin-top: 24px;
      margin-bottom: 45px;
    }
  }
  .submit_btn {
    width: 288px;
    height: 40px;
    box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    background-color: #353535;
    text-transform: none;
    margin-top: 6px;
    margin-bottom: 32px;
    &:hover {
      background-color: #454545;

    }
  }
  .footerP {
    color: #808080;
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 32px;
  }
`;
