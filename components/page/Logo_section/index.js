import { Grid } from '@mui/material';
import React, { useState } from 'react';
import LogoCard from './logo_card';
import { Style } from './style';
import GrayLogo from '../../../public/static/assets/logos/grayLogo';
import Image from 'next/image';

const LOGOS = [
  { name: 'Keyon Kreative', genere: 'Photographer', iconName: 'keyon' },
  { name: 'Raven', genere: 'Research Institute', iconName: 'raven' },
  { name: 'Valmart', genere: 'Crypto Exchange', iconName: 'valmart' },
  { name: 'Randeno', genere: 'Online Shop', iconName: 'randeno' },
  { name: 'Chapagha', genere: 'Refactor', iconName: 'chapagha' },
  { name: 'Narsis', genere: 'Photographer', iconName: 'narsis' },
  { name: 'Sorkhab', genere: 'Cosmetics Store', iconName: 'sorkhab' },
  { name: 'Invex', genere: 'Crypto Investment', iconName: 'invex' },
  { name: 'OGN', genere: 'Gaming Magazine', iconName: 'ogn' },
  { name: 'Ethirion', genere: 'Developer', iconName: 'ethirion' },
  { name: 'Armin Siami', genere: 'Animator', iconName: 'armin' },
  { name: 'Coderiders', genere: 'Programming Team', iconName: 'coderiders' },
  { name: 'Ali Esmaeili', genere: 'Developer', iconName: 'ali' },
  { name: 'Vigen', genere: 'Jewelry Store', iconName: 'vigen' },
  { name: 'Nosafom', genere: 'Construction Materials', iconName: 'nosa' }
];

const LogoSection = () => {
  const [showLogo, setShowLogo] = useState(false);

  return (
    <Style>
      <h2>LOGO Projects</h2>
      <Grid className="logorow" mt={7} container>
        <Grid pl={4} container item md={4} xs={12}>
          <div className="logo_hover_show">
            {showLogo === false ? (
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
                      showLogo === 'invex' ||
                      showLogo === 'randeno' ||
                      showLogo === 'nosa'
                        ? { width: '100%' }
                        : { height: '100%' }
                    }
                    src={`/static/assets/img/${showLogo}.png`}
                  />
                </div>
              </div>
            )}
          </div>
        </Grid>
        <Grid
          className="container"
          justifyContent="flex-end"
          container
          item
          md={8}
          xs={12}>
          {LOGOS?.map(e => (
            <LogoCard
              onMouseLeave={() => setShowLogo(false)}
              onMouseEnter={() => setShowLogo(e?.iconName)}
              icon={e.iconName}
              name={e?.name}
              genre={e.genere}
              key={e.name}
            />
          ))}
        </Grid>
      </Grid>
    </Style>
  );
};

export default LogoSection;
