import { Button, Grid } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import InPut from './input';
import { Style } from './style';

const ContactUs = () => {
  const [info, setInfo] = useState({
    name: '',
    phone_number: '',
    email: '',
    order_type: ''
  });

  return (
    <Style>
      <h2>Submit an Order</h2>
      <Grid container className="submitForm">
        <Grid container justifyContent="center">
          <h6>Please fill the form below to proceed submitting an order</h6>
        </Grid>
        <Grid p="0 100px" container justifyContent="space-between">
          <InPut
            label="Your Name"
            placeholder="Write your Name here"
            name="name"
            value={info.name}
            setInfo={setInfo}
          />
          <InPut
            label="Email Address"
            placeholder="Write your Email here"
            name="email"
            value={info.email}
            setInfo={setInfo}
          />
        </Grid>
        <Grid p="0 100px" container justifyContent="space-between">
          <InPut
            label="Phone Number"
            placeholder="Write your Phone number here"
            name="phone_number"
            value={info.phone_number}
            setInfo={setInfo}
          />
          <InPut
            label="Order Type"
            placeholder="Select an order type"
            name="order_type"
            value={info.order_type}
            setInfo={setInfo}
          />
        </Grid>
        <Grid justifyContent="center" container>
          <Button
            onClick={() => console.log(info)}
            variant="contained"
            className="submit_btn">
            Order now
          </Button>
        </Grid>
        <Grid container justifyContent="center">
          <p className='footerP'>After you submit your order, I’ll reach you as soon as possible</p>
        </Grid>
      </Grid>
    </Style>
  );
};

export default ContactUs;
