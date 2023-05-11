import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  Box,
  Stack,
  Grid,
  Rating,
  Container,
  Avatar,
  Button,
  Typography,
  Modal,
  Zoom,
  IconButton,
} from '@mui/material';
import { PlayCircleOutline, Grade, Close } from '@mui/icons-material';
import TriangleMask from './../../public/home/triangle-mask.png';
import Quote from './../../public/home/quote.png';
import Ami from './../../public/home/photos/ami.jpg';
import Doe from './../../public/home/photos/doe.jpg';
import Hanry from './../../public/home/photos/hanry.jpg';
import Richard from './../../public/home/photos/richard.jpg';
import Rupan from './../../public/home/photos/rupan.jpg';

const Testimonial = () => {

  const [info, setInfo] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false)

  const testimonials = [
    {
      id: 1,
      name: 'Joe Richard',
      position: 'Visual Designer',
      title: 'The Best Template You Got to Have it!',
      description: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
      image: Richard,
      rating: 5,
    },
    {
      id: 2,
      name: 'Rupan Oberoi',
      position: 'Web Designer',
      title: 'The Best Template You Got to Have it!',
      description: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
      image: Rupan,
      rating: 5,
    },
    {
      id: 3,
      name: 'Jon Doe',
      position: 'Software Engineer',
      title: 'The Best Template You Got to Have it!',
      description: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
      image: Doe,
      rating: 5,
    },
    {
      id: 4,
      name: 'Hanry Luice',
      position: 'App Developer',
      title: 'The Best Template You Got to Have it!',
      description: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
      image: Hanry,
      rating: 5,
    },
    {
      id: 5,
      name: 'Ami Nijai',
      position: 'Customer Support',
      title: 'The Best Template You Got to Have it!',
      description: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media infrastructures rather than ethical sticky alignments rather than global. Plagiarize technically sound total linkage for leveraged value media web-readiness and premium processes.',
      image: Ami,
      rating: 5,
    },
  ];

  useEffect(() => {

    const getTestimonial = testimonials.filter(testimonial => testimonial.id === 1);
    setInfo(getTestimonial[0]);

  }, []);

  const getData = (
    id, 
    name, 
    position,
    title,
    description,
    image,
    rating) => {

    const data = { id, name, position, title, description, image, rating };
    setInfo(data);

  }

  const qouteImage = {
    width: '55px',
    height: '55px',
    maxWidth: '100%',
  };

  const testimonialImage = {
    width: '420px',
    height: 'auto',
    maxWidth: '100%',
  };

  return (
    <Box sx={{ background: 'linear-gradient(90deg,#388572,#3dd5b0)', p: '5rem 0' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            sx={{
              color: '#dbf335',
              fontWeight: 600,
              fontFamily: 'PoppinsBold',
              fontSize: '1.25rem',
            }}
            component="h4"
          >
            Testimonial
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 700,
              fontSize: {
                lg: '2.5rem',
                md: 'calc(1.325rem + .9vw)',
                sm: 'calc(1.325rem + .9vw)',
                xs: 'calc(1.325rem + .9vw)'
              },
              fontFamily: 'PoppinsBold',
            }}
            component="h2"
          >
            What They Say About Us
          </Typography>
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mt: '0.5rem',
            }}
          >
            <Typography
              sx={{
                width: '100%',
                maxWidth: '600px',
                color: '#fff',
                fontFamily: 'OpenSans',
                fontSize: '1rem',
                fontWeight: 400,
                LineHeight: 1.75,
              }}
              component="p"
            >
              Uniquely promote adaptive quality vectors rather than stand-alone e-markets. pontificate alternative architectures whereas iterate.
            </Typography>
          </Box>
        </Box>
        <Box>
          {info ? (
            <Grid sx={{ pt: '5rem' }} container>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    width: {
                      lg: '100%',
                      md: '90%',
                      sm: '100%',
                      xs: '100%',
                    },
                  }}
                >
                  <Image
                    src={Quote}
                    style={qouteImage}
                    alt="Qoute Image"
                    priority={false}
                  />
                  <Typography
                    sx={{
                      color: '#fff',
                      fontWeight: 700,
                      fontFamily: 'PoppinsBold',
                      fontSize: {
                        lg: '1.5rem',
                        md: 'calc(1.275rem + .3vw)',
                        sm: 'calc(1.275rem + .3vw)',
                        xs: 'calc(1.275rem + .3vw)',
                      },
                    }}
                    component="h3"
                  >
                    {info.title}
                  </Typography>
                  <Rating 
                    sx={{ 
                      fontSize: '19px',
                      '& .css-7qmtgc-MuiRating-icon': {
                        pr: '7px',
                      },
                    }}
                    icon={<Grade fontSize="inherit" />} 
                    value={info.rating} 
                    readOnly 
                  />
                  <Typography
                    sx={{
                      p: '1.5rem 0',
                      color: '#fff',
                      fontSize: '1.125rem',
                      lineHeight: 1.75,
                      fontFamily: 'OpenSans',
                      fontWeight: 400,
                    }}
                    component="p"
                  >
                    {info.description}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#fff',
                      fontFamily: 'PoppinsRegular',
                      fontSize: '1rem',
                      lineHeight: 1.2,
                      fontWeight: 600,
                    }}
                    component="h6"
                  >
                    {info.name}
                  </Typography>
                  <Box
                    sx={{
                      color: '#fff',
                      lineHeight: 1.75,
                      fontFamily: 'OpenSans',
                      fontSize: '15px',
                      fontWeight: 400,
                    }}
                    component="span"
                  >
                    {info.position}
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: {
                      sm: 'flex-end',
                      xs: 'center',
                    },
                  }}
                >
                  <Box 
                    sx={{
                      display: {
                        sm: 'block',
                        xs: 'none',
                      },
                      position: 'absolute',
                      top: 0,
                      right: {
                        md: '138px',
                        sm: '208px',
                        xs: 0
                      },
                      bgcolor: 'yellow',
                      height: '281px',
                      width: '330px',
                      maskImage: `url(${TriangleMask.src})`,
                      maskSize: '16px',
                    }}
                    component="div"
                  ></Box>
                  <Box
                    sx={{
                      position: 'relative',
                      top: 50,
                      right: {
                        md: 0,
                        sm: 70,
                        xs: 0,
                      },
                      '& img': {
                        borderRadius: '5%',
                      },
                    }}
                  >
                    <Image
                      src={info.image}
                      style={testimonialImage}
                      alt={info.name}
                      priority={false}
                    />
                    <Button
                      onClick={() => handleOpen()} 
                      sx={{
                        position: 'absolute',
                        bottom: 20,
                        left: {
                          sm: 25,
                          xs: 15,
                        },
                        textTransform: 'none',
                        fontFamily: 'OpenSans',
                        fontSize: '0.875em',
                        p: 0,
                        color: '#fff',
                        '&:hover': {
                          bgcolor: 'transparent',
                        },
                      }}
                      disableRipple
                    >
                      <PlayCircleOutline
                        sx={{
                          color: '#0e7a6d',
                          fontSize: '3rem',
                          mr: '5px',
                        }}
                      />
                      Watch Video
                    </Button>
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
                  </Box>
                </Box>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
        </Box>
        <Grid 
          sx={{ mt: '6rem' }}
          direction="row"
          justifyContent={{
            lg: "space-between",
            md: "flex-start",
            sm: "space-evenly",
            xs: "center",
          }}
          spacing={2} 
          container
        >
          {testimonials.map((testimonial) => (
            <Grid key={testimonial.id} item xs={12} sm="auto">
              <Button
                sx={{
                  color: '#fff',
                  textTransform: 'none',
                  p: '1.2rem 0px',
                  bgcolor: '#0e7a6d2b',
                  borderRadius: '1rem',
                  borderColor: '#0e7a6d2b',
                  width: {
                    sm: '250px',
                    xs: '100%',
                  },
                  '&:hover': {
                    bgcolor: '#0e7a6d2b',
                  },
                }}
                key={testimonial.id} 
                onClick={() => getData(
                  testimonial.id, 
                  testimonial.name, 
                  testimonial.position, 
                  testimonial.title,
                  testimonial.description,
                  testimonial.image,
                  testimonial.rating
                )}
              >
                <Avatar alt={testimonial.name} src={testimonial.image.src} sx={{ width: 55, height: 55 }} />
                <Box sx={{ ml: '0.5rem', }}>
                  <Typography 
                    sx={{ 
                      textAlign: 'left',
                      fontWeight: 600,
                      fontFamily: 'PoppinsRegular',
                      fontSize: '1rem',
                     }} 
                    color="inherit" 
                    component="h6"
                  >
                    {testimonial.name}
                  </Typography>
                  <Box 
                    sx={{ 
                      textAlign: 'left',
                      fontSize: '15px',
                      fontFamily: 'OpenSans',
                      fontWeight: 400,
                    }}
                    color="inherit" 
                    component="span"
                  >
                    {testimonial.position}
                  </Box>
                </Box>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Testimonial