import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
import Carousel from './Carousel';


const useStyles = makeStyles(()=> ({
  banner:{
    backgroundImage: "url(./dunf.jpg)"
  },
  bannerContent: {
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 25,
    justifyContent: 'space-around',
  },
  tagline: {
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
  },
}))

const Banner = () => {

const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
         <div className={classes.tagline}>
          <Typography
          variant='h2'
          style={{fontWeight: 'bold', marginBottom: 15, fontFamily: 'Montserrat'}}>
             Crypto-Checker
          </Typography>
          <Typography
          variant='subtitle2'
          style={{color: 'darkgrey', textTransform: 'capitalize', fontFamily: 'Montserrat'}}>
              Get all the required info on your favorite Crypto-Currency
          </Typography>
           </div> 
           <Carousel />
      </Container>
    </div>
  )
}

export default Banner
