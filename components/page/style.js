import styled from '@emotion/styled';
import { Grid } from '@mui/material';

const calculatePosition = (top,left) => {
    return ({
        top: top,
        left: left
    })
}

export const Style = styled(Grid)`
  height: 360vh;
  background-color: #e5e5e5;
  position: relative;
  width: 1533px;
  margin: auto;
  overflow-x: hidden;
  .cube {
    background-color: #C5C5C5;
    width: 400px;
    height: 400px;
    transform: rotate(45deg);
    position: absolute;
    ${calculatePosition('0','10px')};
  }
  
`;
