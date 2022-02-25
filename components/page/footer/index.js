import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Style } from './style';

const Footer = () => {
  return (
    <Style>
      <Grid justifyContent="center" container>
        <h2>Contact Me</h2>
      </Grid>
      <Grid justifyContent="center" container>
        <h3>To get more information about the job</h3>
      </Grid>
      <Grid mt={6} p="0 170px" container justifyContent="space-between">
        <Grid alignItems="center" className="social-row" container>
          <div>
            <Image
              width={24}
              height={24}
              alt="whatsapp"
              src="/static/assets/footer/img/whatsapp.png"
            />
          </div>
          <p>+98-9020055350</p>
        </Grid>
        <Grid alignItems="center" className="social-row" container>
          <div>
            <Image
              width={24}
              height={24}
              alt="whatsapp"
              src="/static/assets/footer/img/telegram.png"
            />
          </div>
          <p>@mamad.arcas</p>
        </Grid>
        <Grid alignItems="center" className="social-row" container>
          <div>
            <Image
              width={24}
              height={24}
              alt="whatsapp"
              src="/static/assets/footer/img/email.png"
            />
          </div>
          <p>Queeart.co@gmail.com</p>
        </Grid>
        <Grid alignItems="center" className="social-row" container>
          <div>
            <Image
              width={24}
              height={24}
              alt="whatsapp"
              src="/static/assets/footer/img/linkedin.png"
            />
          </div>
          <p>arcas.designer</p>
        </Grid>
      </Grid>{' '}
      <div className="footer">
        <h6 className="copyRight">
          Designed by <span>QueeArt</span>
        </h6>
        <h6 className="copyRight2">
          Implemented by <span>Fenix</span>
        </h6>
      </div>
      <div
        onClick={() => {
          window.scrollBy({
            top: -7300,
            behavior: 'smooth'
          });
        }}
        className="footer_triangle">
        <div
          style={{
            height: '91px',
            width: '64px',
            position: 'relative',
            marginTop: '67px'
          }}>
          <Image
            alt="main-logo"
            layout="fill"
            src="/static/assets/img/mainlogo.png"
          />
        </div>
      </div>
      <div className="footer_triangle_orange"></div>
    </Style>
  );
};

export default Footer;
