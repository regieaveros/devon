import { useState } from 'react';
import {
    Grid,
    Container,
    Box,
    Button,
    Modal,
    Zoom,
    IconButton,
    Typography,
  } from '@mui/material';
import Image from 'next/image';
import { PlayCircleOutline, Close } from '@mui/icons-material';
import image from './../../public/home/hero.svg';
import rotashow from './../../public/home/rotashow.png';
import waves from './../../public/home/waves.png';
import techno from './../../public/home/techno.png';

const Hero = () => {

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const heroImage = {
    width: '659px',
    height: '498px',
    maxWidth: '100%',
  };

  const clientImage = {
    width: '120px',
    height: '35px',
    maxWidth: '100%',
  };

  return (
    <Box sx={{ background: 'linear-gradient(90deg,#388572,#3dd5b0)', paddingTop: '6rem', paddingBottom: '8rem' }}>
        <Container maxWidth="lg">
        <Grid container>
            <Grid item xs={12} sm={6} md={6}>
            <Box sx={{ paddingTop: "4.5rem", }}>
              <Typography component="h1" 
                sx={{
                  fontFamily: "PoppinsBold",
                  color: '#fff',
                  fontSize: {
                    md: '3rem',
                    sm: 'calc(1.425rem + 2.1vw)',
                    xs: 'calc(1.425rem + 2.1vw)',
                  },
                  lineHeight: 1.2,
                  fontWeight: 800,
                  padding: 0,
                  margin: 0,
                }}
              >
                Get Fully Control and Visibility your Company
              </Typography>
              <Typography component="p"
                sx={{
                  fontFamily: "OpenSans",
                  fontWeight: 300,
                  color: '#fff',
                  fontSize: {
                    md: '1.25rem',
                    sm: '1rem',
                    xs: '1rem',
                  },
                  marginTop: '10px',
                }}
              >
                Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services.
              </Typography>
              <Box sx={{ margin: '3rem 0' }}>
                <Button 
                  sx={{
                    color: '#fff',
                    fontFamily: 'PoppinsRegular',
                    bgcolor: '#0e7a6d',
                    border: 0,
                    padding: '13px 32px',
                    textTransform: 'none',
                    ':hover': {
                      bgcolor: '#116f64',
                    },
                  }}
                >
                  Request For Demo
                </Button>
                <Button 
                  onClick={() => handleOpen()} 
                  sx={{
                    color: '#fff',
                    fontFamily: 'PoppinsRegular',
                    bgcolor: 'transparent',
                    border: 0,
                    padding: '13px 20px',
                    textTransform: 'none',
                    fontSize: '13px',
                    '&:hover': {
                      bgcolor: 'transparent',
                    },
                  }} 
                  disableRipple
                >
                  <PlayCircleOutline 
                    sx={{ fontSize: '2.7rem', marginRight: '5px' }} 
                    color="inherit" 
                  />
                  Watch Video
                </Button>
              </Box>
              <Modal
                open={open}
                onClose={handleClose}
              >
                <Zoom in={open}>
                  <Box
                    sx={{
                      position: 'absolute',
                      bgcolor: 'transparent',
                      p: 0,
                      boxShadow: 24,
                      inset: {
                        lg: '18% 25%',
                        md: '18% 15%',
                        sm: '18% 10%',
                        xs: '18% 8%',
                      },
                      width: {
                        lg: '50%',
                        md: '70%',
                        sm: '80%',
                        xs: '80%',
                      },
                      height: {
                        md: '70%',
                        sm: '60%',
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <IconButton 
                        onClick={handleClose} 
                        sx={{
                          position: 'absolute',
                          top: '-5px',
                          right: '-35px',
                          color: '#fff',
                          p: '2px',
                        }}
                      >
                        <Close sx={{ fontSize: '30px' }} />
                      </IconButton>
                    </Box>
                      <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/hAP2QF--2Dg" 
                        title="Product Explainer Video | UpSend |  Best SaaS Explainer Video" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      ></iframe>
                  </Box>
                </Zoom>
              </Modal>
              <Typography component="h6" 
                sx={{
                  fontFamily: 'PoppinsMedium',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'hsla(0,0%,100%,.7)',
                  margin: '1.5rem 0',
                }}
              >
                Our Top Clients:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4} sm={4} md={3}>
                  <Image
                    style={clientImage}
                    src={rotashow}
                    alt="Rotashow Image" 
                    priority={true}
                  />
                </Grid>
                <Grid item xs={4} sm={4} md={3}>
                  <Image
                    style={clientImage}
                    src={waves}
                    alt="Waves Image"
                    priority={true}
                  />
                </Grid>
                <Grid item xs={4} sm={4} md={3}>
                  <Image
                    style={clientImage}
                    src={techno}
                    alt="Techno Image"
                    priority={true}
                  />
                </Grid>
              </Grid>
            </Box>
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
              <Box sx={{
                  transition: 'all 0.3',
                  display: { 
                    sm: 'block',
                    xs: 'none' 
                  },
                }}
              >
                <Image 
                  src={image} 
                  alt="Hero Image" 
                  priority={true}
                  style={heroImage}
                />
            </Box>
            </Grid>
        </Grid>
        </Container>
    </Box>
  )
}

export default Hero