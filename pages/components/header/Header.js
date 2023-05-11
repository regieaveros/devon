import * as React from 'react';
import { useState, useCallback } from 'react';
import Burger from '@animated-burgers/burger-squeeze';
import '@animated-burgers/burger-squeeze/dist/styles.css'
import { useRouter } from 'next/router';
import {
  Box,
  Toolbar,
  useScrollTrigger,
  IconButton,
  Container,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Button,
  Typography,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Link from 'next/Link';
import Image from 'next/image';
import imageDefault from '../../../public/logo/logo.png';
import imageScroll from '../../../public/logo/logo-scroll.png';

//Styles
import style from './../../../styles/Styles.module.css';

const Header = (props) => {
  
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const { window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

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

  const toggleButton = useCallback(() => {

    setIsActive((prevState) => !prevState);
    
  }, []);

  return (
    <>
      <AppBar 
        elevation={trigger ? 4 : 0} 
        className={trigger ? `${style.backgroundLight}` : `${style.backgroundDefault}`}
        sx={{ bgcolor: trigger ? '#fff' : 'transparent' }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ p: '0px !important' }}>
            <Box sx={{
              display: 'flex',
              flexGrow: 1
            }}
            >
              <Link href="/" passHref legacyBehavior>
                <a>
                  {trigger ? (
                      <Image 
                        src={imageScroll} 
                        width={130}
                        height={40}
                        alt="DevOn Logo" 
                        priority={false}
                      />
                    ) : (
                      <Image 
                        src={imageDefault} 
                        width={130} 
                        height={40}
                        alt="DevOn Logo" 
                        priority={false}
                      />
                  )}
                </a>
              </Link>
            </Box>
            <Box 
              sx={{
                flexGrow: 1,
                display: { 
                  md: 'flex',
                  sm: 'none',
                  xs: 'none' 
                },
              }}
            >
              {links.map((link) =>(
                <Link key={link.id} href={link.link} passHref legacyBehavior>
                  <Typography 
                    component="a"
                    sx={{
                      transition: 'all 0.3s',
                      fontFamily: "PoppinsRegular",
                      fontWeight: 300,
                      fontSize: '15px',
                      padding: '0.5rem 1rem',
                      color: router.asPath === link.link ? '#09eab2' : trigger 
                      ? '#575757' : '#e7f3f2',
                      '&:hover': {
                        color: '#09eab2',
                      },
                    }}
                  >
                    {link.name}
                  </Typography>
                </Link> 
              ))}
            </Box>
            <Box
              sx={{ 
                display: { 
                  md: 'block',
                  sm: 'block',
                  xs: 'none' 
                }
              }}
            >
              <Button
                sx={{
                  color: '#fff',
                  fontFamily: "PoppinsRegular",
                  bgcolor: '#0e7a6d',
                  border: 0,
                  padding: '13px 32px',
                  textTransform: 'none',
                  '&:hover': {
                    bgcolor: '#116f64',
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
            <Box
              sx={{ 
                display: { 
                  md: 'none',
                  sm: 'block',
                  xs: 'block' 
                },
                paddingLeft: '30px',
              }}
            >
              <Burger
                Component="button" 
                type="button"
                isOpen={isActive} 
                onClick={() => toggleButton()} 
              />
            </Box>
            <SwipeableDrawer
              sx={{ 
                '& .MuiPaper-root': {
                  width: '100%',
                  maxWidth: '375px',
                  background: 'linear-gradient(90deg,#388572,#3dd5b0)',
                }
              }}
              anchor="left"
              open={isActive}
              onOpen={() => setIsActive(true)}
              onClose={() => setIsActive(false)}
            >
              <Box
                sx={{
                  padding: '1.5rem 0 0 1.5rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Image 
                  src={imageDefault} 
                  width={130}
                  height={40}
                  alt="DevOn Logo" 
                  priority={false}
                />
                <IconButton
                  sx={{
                    transition: 'all 0.3s',
                    padding: '0.3rem',
                    margin: '0 1rem 0 0',
                    fontSize: '2.5rem',
                    borderRadius: '10px',
                    color: '#0e7a6d',
                  }}
                  onClick={() => setIsActive(false)} 
                >
                  <ArrowForward color="inherit" fontSize="inherit" />
                </IconButton>
              </Box>
              <List>
                {links.map((link) =>(
                  <ListItem 
                    key={link.id} 
                    sx={{
                      transition: 'all 0.3s',
                      fontFamily: "Poppins",
                      fontWeight: 500,
                      color: router.asPath === link.link ? '#09eab2' : '#fff',
                    }}
                  >
                      <ListItemText>
                        <Link href={link.link} passHref legacyBehavior>
                          <Typography 
                            sx={{ 
                              display: 'block',
                              py: '0.3rem',
                              pl: '1.5rem',
                              width: 1, 
                              fontSize: '1.4rem' 
                            }} 
                            component="a"
                          >
                            {link.name}
                          </Typography>
                        </Link> 
                      </ListItemText>
                  </ListItem>
                ))}
              </List>
              <Box sx={{ padding: '3rem 0 0 1.5rem ' }}>
                <Button
                  sx={{
                    color: '#fff',
                    fontFamily: "PoppinsRegular",
                    bgcolor: '#0e7a6d',
                    border: 0,
                    padding: '13px 32px',
                    textTransform: 'none',
                    '&:hover': {
                      bgcolor: '#116f64',
                    },
                  }}
                >
                  Get Started
                </Button>
              </Box>
            </SwipeableDrawer>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header