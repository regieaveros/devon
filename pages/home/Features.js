import Image from 'next/image';
import {
  Box,
  Stack,
  Container,
  Grid,
  Button,
  Avatar,
  Typography,
} from '@mui/material';
import { Layers, GppGood, Code } from '@mui/icons-material';

import feature1 from './../../public/home/feature01.svg';
import feature2 from './../../public/home/feature02.svg';

const Features = () => {

  const features = [
    {
      id: 1,
      icon: <Layers fontSize="inherit" color="inherit" />,
      title: 'Good Performance',
      description: 'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
      bg_icon: '#0e7a6d',
    },
    {
      id: 2,
      icon: <GppGood fontSize="inherit" color="inherit" />,
      title: 'Highly Secure',
      description: 'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
      bg_icon: '#de4949',
    },
    {
      id: 3,
      icon: <Code fontSize="inherit" color="inherit" />,
      title: 'Fast Development',
      description: 'Appropriately grow competitive leadership rather than strategic technically sound processes without state.',
      bg_icon: '#2c7d50',
    }
  ];

  const featuresItem = [
    {
      id: 1,
      title: 'Utilize your software data',
      description: 'Progressively reinvent models and niche revolutionary benefits for integrated niches.',
      image: feature1,
      bg_color: '#ffeec88f',
    },
    {
      id: 2,
      title: 'Get real time updated anytime',
      description: 'Progressively reinvent models and niche revolutionary benefits for integrated niches.',
      image: feature2,
      bg_color: '#c8ffdd8f',
    },
  ];

  const featuresImage = {
    width: '223px',
    height: '223px',
    maxWidth: '100%',
  };

  return (
    <Box
      sx={{
        background: '#f8f9fa',
        p: '7rem 0',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            color: '#000',
            textAlign: 'center',
            fontSize: {
              lg: '2.5rem',
              md: 'calc(1.325rem + .9vw)',
              sm: 'calc(1.325rem + .9vw)',
              xs: 'calc(1.325rem + .9vw)',
            },
            fontWeight: 700,
            fontFamily: 'PoppinsBold',
          }}
          conponents="h2"
        >
          With all the Features You Need
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box 
            sx={{ 
              textAlign: 'center',
              width: '100%',
              maxWidth: '611px', 
            }}
          >
            <Typography
              conponent="p"
              sx={{
                color: '#575757',
                lineHeight: 1.75,
                fontFamily: 'OpenSans',
                fontSize: '1rem',
                fontWeight: 400,
              }}
            >
              Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas distributed for stand-alone web-readiness.
            </Typography>
          </Box>
        </Box>
        <Grid 
          sx={{ mt: '7rem', mb: '7rem' }}
          spacing={2}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {features.map((feature) => (
            <Grid key={feature.id} item xs={12} sm={6} md={4}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Avatar
                  sx={{
                    background: feature.bg_icon,
                    fontSize: '2rem', 
                    width: '60px',
                    height: '60px',
                    borderRadius: '20%',
                  }} 
                  variant="rounded"
                >
                  {feature.icon}
                </Avatar>
              </Box>
              <Box 
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box sx={{width: '100%', maxWidth: '324px' }}>
                  <Typography
                    component="h3"
                    sx={{
                      textAlign: 'center',
                      fontFamily: 'PoppinsRegular',
                      fontSize: '1.25rem',
                      lineHeight: 1.2,
                      fontWeight: 600,
                      m: '1.5rem 0 0.5rem',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      color: '#575757',
                      textAlign: 'center',
                      fontFamily: 'OpenSans',
                      lineHeight: '1.75',
                      fontSize: '1rem',
                      fontWeight: 400,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid spacing={3} container>
          {featuresItem.map((item) => (
            <Grid
              key={item.id} 
              item 
              xs={12} 
              sm={12} 
              md={6}
            >
              <Stack
                direction="row"
                spacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{
                  background: item.bg_color,
                  borderRadius: '1rem',
                  p: {
                    sm: '3rem 1rem 3rem 2.5rem',
                    xs: '3rem 2rem',
                  },
                  height: '100%',
                }}
              >
                <Box
                  sx={{
                    width: {
                      md: '60%',
                      sm: '70%',
                      xs: '100%',
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: '#000',
                      fontWeight: 600,
                      fontSize: '1.25rem',
                      lineHeight: 1.2,
                      fontFamily: 'PoppinsRegular',
                    }}
                    component="h5"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#575757',
                      lineHeight: 1.75,
                      fontFamily: 'OpenSans',
                      fontSize: '1rem',
                      fontWeight: 400,
                      mt: '0.8rem',
                      mb: '1.5rem',
                    }}
                    component="p"
                  >
                    {item.description}
                  </Typography>
                  <Button
                    sx={{
                      transition: 'all 0.3s',
                      color: '#0e7a6d',
                      border: '2px solid #0e7a6d',
                      textTransform: 'none',
                      bgcolor: 'transparent',
                      p: '0.4rem 1.3rem',
                      '&:hover': {
                        bgcolor: '#0e7a6d',
                        color: '#fff',
                      },
                    }}
                  >
                    Start For Free
                  </Button>
                </Box>
                <Box
                  sx={{
                    position: 'relative',
                    width: '230px',
                    display: {
                      md: 'block',
                      sm: 'block',
                      xs: 'none',
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '-50px',
                      right: 0,
                    }}
                  >
                    <Image
                      src={item.image}
                      style={featuresImage}
                      alt="Feature Software Data" 
                      priority={false}
                    />
                  </Box>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Features