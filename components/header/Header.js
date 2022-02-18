import React from 'react';
import {
  BlackBorders,
  BlackDiv,
  GrayDiv1,
  GrayDiv2,
  HeaderCont,
  ImageCont,
  Logo,
  OrangeBorder,
  PortButton,
  TextCont
} from './styles';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import Image from 'next/image';
const Header = () => {
  return (
    <HeaderCont>
      <BlackDiv>
        <Logo>
          <Image
            alt="main-logo"
            width="150"
            height="210"
            src="/static/assets/img/mainlogo.png"/>
        </Logo>
      </BlackDiv>
      <OrangeBorder />
      <BlackBorders />
      <GrayDiv1 />
      <GrayDiv2 />
      <ImageCont
        style={{
          backgroundImage: `url(/static/assets/img/headerimage.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'right',
          filter: 'opacity(.3)'
        }}></ImageCont>
      <PortButton
        onClick={()=>{
          window.scrollBy({
            top: 730,
            behavior: 'smooth'
          })
        }}
        startIcon={
          <ArrowLeft
            style={{
              width: '2rem',
              height: '2rem',
              marginRight: '-8px',
              marginLeft: '-12px'
            }}
          />
        }>
        Portfolio
      </PortButton>
      <TextCont>
        <p style={{ fontSize: '24px', color: '#DBDBDB', margin: 0 }}>
          Present ur brand in an
        </p>
        <p
          style={{
            fontSize: '36px',
            color: '#FAF7FB',
            margin: 0,
            marginTop: '7.5px',
            fontWeight: '400'
          }}>
          Understandable,
        </p>
        <p
          style={{
            fontSize: '36px',
            color: '#FAF7FB',
            margin: 0,
            marginTop: '7.5px',
            fontWeight: '400'
          }}>
          Elegant{' '}
          <span
            style={{
              fontSize: '24px',
              color: '#DBDBDB',
              margin: 0,
              fontWeight: 'normal'
            }}>
            and
          </span>
        </p>
        <p
          style={{
            fontSize: '36px',
            color: '#FAF7FB',
            margin: 0,
            marginTop: '7.5px',
            fontWeight: '400'
          }}>
          Satisfying{' '}
          <span
            style={{
              fontSize: '24px',
              color: '#DBDBDB',
              margin: 0,
              fontWeight: 'normal'
            }}>
            {' '}
            way!
          </span>
        </p>
      </TextCont>
    </HeaderCont>
  );
};

export default Header;
