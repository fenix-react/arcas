import { Button, Grid, styled } from '@mui/material';

export const HeaderCont = styled(Grid)`
  position: relative;
  height: 715px;
  width: 1536px;
  margin: auto;
  overflow: hidden;
`;

export const BlackDiv = styled(Grid)`
  position: absolute;
  left: 0;
  top: 0;
  clip-path: polygon(0 0, 98% 0%, 30% 97%, 0 60%);
  height: 415px;
  width: 570px;
  background-color: #101010;
  z-index: 10;
`;

export const GrayDiv1 = styled(Grid)`
  position: absolute;
  left: 0;
  top: 0;
  clip-path: polygon(0 0, 100% 0%, 22% 100%, 0 100%);
  height: 705px;
  width: 840px;
  background-color: #252525;
  z-index: 3;
`;
export const GrayDiv2 = styled(Grid)`
  position: absolute;
  top: 231px;
  left: 1082px;
  clip-path: polygon(100% 0, 100% 100%, 0% 100%);
  height: 474px;
  width: 453px;
  background-color: #252525;
  z-index: 6;
`;
export const ImageCont = styled(Grid)`
  position: absolute;
  left: 200px;
  top: 0;
  clip-path: polygon(49% 0, 100% 0%, 100% 30%, 65% 100%, 0 100%);
  height: 705px;
  width: 1336px;
  z-index: 100;
`;

export const OrangeBorder = styled(Grid)`
  position: absolute;
  left: 0;
  top: 0;
  clip-path: polygon(0 0, 100% 0%, 30% 100%, 0 63%);
  height: 415px;
  width: 570px;
  background-color: #e95727;
  z-index: 9;
`;

export const BlackBorders = styled(Grid)`
  position: absolute;
  left: 0;
  top: 0;
  height: 720px;
  width: 1536px;
  background-color: #101010;
  z-index: 1;
`;

export const PortButton = styled(Button)`
  height: 39px;
  width: 125px;
  transform: rotate(-90deg);
  background-color: #e95727;
  position: absolute;
  left: 1430px;
  top: 600px;
  z-index: 11;
  color: #fff;
  border-radius: 23.5px;
  box-shadow: 1px 4px 8px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 1366px) {
    left: 91vw;
    top: 82vh;
  }
`;

export const Logo = styled(Grid)`
  margin-top: 50px;
  margin-left: 85px;
`;

export const TextCont = styled(Grid)`
  position: absolute;
  top: 310px;
  left: 725px;
  z-index: 100;
`;

