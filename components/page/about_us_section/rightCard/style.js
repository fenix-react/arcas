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
  }
`;
