import { Grid } from '@mui/material';
import React, { useState } from 'react';
import LogoCard from './logo_card';
import { Style } from './style';
import GrayLogo from '../../../public/static/assets/logos/grayLogo';

const leftRow = [
  { name: 'Keyon Kreative', genere: 'Photographer', iconName: 'keyon' },
  { name: 'Raven', genere: 'Research Institute', iconName: 'raven' },
  { name: 'Valmart', genere: 'Crypto Exchange', iconName: 'valmart' },
  { name: 'Randeno', genere: 'Online Shop', iconName: 'randeno' },
  { name: 'Chapagha', genere: 'Refactor', iconName: 'chapagha' }
];

const rightRow = [
  { name: 'Sorkhab', genere: 'Cosmetics Store', iconName: 'sorkhab' },
  { name: 'Invex', genere: 'Crypto Investment', iconName: 'invex' },
  { name: 'OGN', genere: 'Gaming Magazine', iconName: 'ogn' },
  { name: 'Ethirion', genere: 'Developer', iconName: 'ethirion' },
  { name: 'Armin Siami', genere: 'Animator', iconName: 'armin' }
];

const BusinesSection = () => {
  const [show, setShow] = useState(false);

  return (
    <Style>
      <h2>Business Cards</h2>
      <Grid
        mt={8}
        justifyContent="space-between"
        className="container"
        container>
        <div className="row1">
          {leftRow?.map(e => (
            <LogoCard
              isLeft
              onMouseEnter={() => {
                setShow(e?.iconName);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
              key={e?.name}
              name={e.name}
              genre={e.genere}
              icon={e.iconName}
            />
          ))}
        </div>
        <div className="logo_hover_show">
          {show === false ? (
            <div className="emptyHover">
              <h6>Hover on a Project to be displayed</h6>
              <GrayLogo className="gray_logo" />
            </div>
          ) : (
            <div
              style={{ backgroundColor: '#E6E6E6', padding: '100px' }}
              className="emptyHover">
              <div
                style={{
                  height: '100%',
                  width: '100%',
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                <img
                  alt="main-logo"
                  style={
                    show === 'invex' ||
                    show === 'randeno' ||
                    show === 'nosa'
                      ? { width: '100%' }
                      : { height: '100%' }
                  }
                  src={`/static/assets/img/${show}.png`}
                />
              </div>
            </div>
          )}
        </div>
        <div className="row3">
          {' '}
          {rightRow?.map(e => (
            <LogoCard
              onMouseEnter={() => {
                setShow(e?.iconName);
              }}
              onMouseLeave={() => {
                setShow(false);
              }}
              key={e?.name}
              name={e.name}
              genre={e.genere}
              icon={e.iconName}
            />
          ))}
        </div>
      </Grid>
    </Style>
  );
};

export default BusinesSection;
