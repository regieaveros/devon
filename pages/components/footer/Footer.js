import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/Link';
import {
  Grid,
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Rating,
  OutlinedInput,
} from '@mui/material';
import { StarBorderPurple500, Facebook, Twitter, YouTube, GitHub } from '@mui/icons-material';
import imageDefault from './../../../public/logo/logo.png';
import imageColor from './../../../public/logo/logo-scroll.png';

const Footer = () => {

  const router = useRouter();

  const links = [
    {
      id: 1,
      name: `Home`,
      link: `/`,
    },
    {
      id: 2,
      name: `About`,
      link: `/about`,
    },
    {
      id: 3,
      name: `Services`,
      link: `/services`,
    },
    {
      id: 4,
      name: `Pricing`,
      link: `/pricing`,
    },
    {
      id: 5,
      name: `Contact`,
      link: `/contact`,
    },
  ];

  const icons = [
    {
      id: 1,
      icon: <Facebook />,
    },
    {
      id: 2,
      icon: <Twitter />,
    },
    {
      id: 3,
      icon: <YouTube />,
    },
    {
      id: 4,
      icon: <GitHub />,
    },
  ];

  return (
    <Box sx={{ background: router.asPath !== "/" ? '#fff' : 'linear-gradient(90deg,#388572,#3dd5b0)' }}>
      <Box sx={{ padding: '5rem 0' }}>
        <Container maxWidth="lg">
          <Box 
            sx={{ 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pb: '1.5rem',
            }}
          >
            <Image
              src={router.asPath !== "/" ? imageColor : imageDefault}
              width={130} 
              height={40}
              alt="Footer Logo" 
              priority={false}
            />   
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box 
              sx={{ 
                width: '100%',
                maxWidth: '420px',
              }}
            >
              <Typography
                sx={{ 
                  textAlign: 'center',
                  color: router.asPath !== "/" ? '#575757' : '#fff',
                  fontFamily: 'OpenSans',
                  fontSize: '1.1rem',
                  lineHeight: 1.5,
                }} 
                component="p"
              >
                Our latest news, articles, and resources, we will sent to your inbox weekly.
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: '1rem 0',
                }}
                component="form"
                noValidate
                autoComplete="off"
              >
                <OutlinedInput 
                  sx={{ 
                    bgcolor: '#fff', 
                    borderRadius: 1,
                    mr: '7px',
                  }} 
                  placeholder="Enter your email"
                  fullWidth
                />
                <Button 
                  sx={{
                    color: '#fff',
                    fontFamily: 'PoppinsRegular',
                    bgcolor: '#0e7a6d',
                    border: 0,
                    padding: '1rem 2.5rem',
                    textTransform: 'none',
                    ':hover': {
                      bgcolor: '#116f64',
                    },
                  }}
                >
                  Subscribe
                </Button>
              </Box>
              <Typography
                sx={{ 
                  fonstFamily: 'PoppinsRegular', 
                  fontWeight: 600, 
                  fontSize: '1rem', 
                  color: router.asPath !== "/" ? '#575757' : '#fff',
                  textAlign: 'center',
                }} 
                component="h6"
              >
                10/10 Overall rating
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Rating
                  sx={{
                    '.css-7qmtgc-MuiRating-icon': {
                      pr: '5px',
                      color: '#d5bf0f',
                    },
                  }}
                  icon={<StarBorderPurple500 fontSize="inherit" />}
                  value={5} 
                  readOnly
                />
              </Box>
              <Box 
                sx={{
                  color: router.asPath !== "/" ? '#37363690' : '#ffffff9e',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                }}
              >
                {icons.map((icon) => (
                  <IconButton
                    key={icon.id}
                    sx={{
                      transition: 'all 0.3s',
                      borderRadius: 1,
                      border: '2px solid',
                      m: '1.5rem 0.5rem 0 0.5rem',
                      ':hover': {
                        bgcolor: '#0e7a6d',
                        borderColor: '#0e7a6d',
                        color: '#fff',
                      },
                    }}
                    color="inherit"
                    disableRipple
                  >
                    {icon.icon}
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{ borderTop: router.asPath !== "/" ? '1px solid rgba(66, 68, 68, 0.137)' : '1px solid rgba(248, 249, 250, 0.137)', padding: '2rem 0' }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Box 
                sx={{ 
                  textAlign: {
                    md: 'left',
                    sm: 'center',
                    xs: 'center',
                  }
                }}
              >
                <Typography
                  sx={{
                    fontFamily: 'PoppinsRegular',
                    color: router.asPath !== "/" ? '#575757' : '#fff',
                    fontSize: '14px',
                  }}
                  component="p"
                >
                  &copy; 2022 DevOn Rights Reserved. Designed By Regie Averos
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: {
                    md: 'flex-end',
                    sm: 'center',
                    xs: 'center',
                  },
                  mt: {
                    md: 0,
                    sm: '10px',
                    xs: '10px',
                  },
                  color: router.asPath !== "/" ? '#575757' : '#fff',
                }}
              >
                {links.map((link) => (
                  <Link key={link.id} href={link.link} passHref legacyBehavior>
                    <Typography 
                      component="a"
                      sx={{
                        transition: 'all 0.3s',
                        fontFamily: 'PoppinsRegular',
                        fontWeight: 300,
                        fontSize: '15px',
                        opacity: 0.7,
                        p: {
                          md: '0 0 0 2rem',
                          sm: '0 1rem 0 1rem',
                          xs: '0 10px 0 10px',
                        },
                        ':hover': {
                          opacity: 1,
                        },
                      }}
                    >
                      {link.name}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer