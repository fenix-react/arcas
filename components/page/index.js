import { Grid } from '@mui/material';
import React from 'react';
import BusinesSection from './businesCard_section';
import LogoSection from './Logo_section';
import { Style } from './style';

const Page = () => {
  return (
    <Style container>
      {[1, 2, 3, 4].map(f => (
        <div key={f} className={`row row${f}`}>
          {[1, 2, 3].map(e => (
            <div
              style={{ visibility: e === 1 && f === 4 && 'hidden' }}
              key={e}
              className="cube"></div>
          ))}
        </div>
      ))}
      <LogoSection />
      <BusinesSection />
    </Style>
  );
};

export default Page;
