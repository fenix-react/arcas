import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const Style = styled(Grid)`
  height: 715px;
  width: 100%;
  text-align: center;
  z-index: 20;
  background-color: rgba(16, 16, 16, 0.2);
  margin-top: 60px;
  h2 {
    margin-top: 59px;
  }
  .container {
    padding-right: 100px;
    padding-left: 80px;
  }

  .logorow {
    position: relative;
  }
  .emptyHover {
    background-color: #313131;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    h6 {
      color: #d1d1d1;
      font-size: 20px;
      font-weight: 500;
    }
  }
  .gray_logo {
    position: absolute;
    top: 30%;
    left: 33%;
  }
  .logo_hover_show {
    width: 600px;
    height: 458px;
    background-color: #101010;
    box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    padding: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    }
  }
`;
