import styled from '@emotion/styled';
import { Grid } from '@mui/material';

const calculatePosition = (top, left) => {
  return {
    top: top,
    left: left
  };
};

export const Style = styled(Grid)`
  background-color: #D1D1D1;
  position: relative;
  width: 1533px;
  margin: auto;
  overflow: hidden;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.25);

}
  h2 {
    color: #313131;
    font-size: 32px;
    font-weight: 700;
  }
  .row {
    width: auto;
    display: flex;
    height: 600px;
    flex-wrap: nowrap;
    transform: rotate(-45deg);
    position: absolute;
  }
  .cube {
    background-color: #c5c5c5;
    width: 640px;
    height: 638px;
    margin-right: 250px;
  }
  .row1 {
    ${calculatePosition('-200px', '-900px')}
  }
  .row2 {
    ${calculatePosition('720px', '-600px')}
  }
  .row3 {
    ${calculatePosition('1600px', '-250px')}
  }
  .row4 {
    ${calculatePosition('2570px', '0')}
  }
`;
