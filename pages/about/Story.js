import Image from 'next/image';
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Design from './../../public/about/about-design.svg';
import Line from './../../public/about/about-line.svg';
import Award01 from './../../public/about/award01.svg';
import Award02 from './../../public/about/award02.svg';

const Story = () => {

  const items = [
    {
      id: 1,
      number: '550K+',
      content: 'Active Users',
    },
    {
      id: 2,
      number: '250+',
      content: 'Team Members',
    },
    {
      id: 3,
      number: '$20M+',
      content: 'Revenue Per/Year',
    },
    {
      id: 4,
      number: '8 Years',
      content: 'In Business',
    },
    {
      id: 5,
      number: '425+',
      content: 'Clients Worldwide',
    },
    {
      id: 6,
      number: '855+',
      content: 'Projects Completed',
    },
  ];

  const designImage = {
    width: '42px',
    height: '70px',
    maxWidth: '100%',
  };

  const awardImage = {
    width: '170px',
    height: 'auto',
    maxWidth: '100%',
  };

  return (
    <>
      <Box 
        sx={{
          background: `url(${Line.src}) left bottom no-repeat`,
          p: {
            md: '11.5rem 0',
            sm: '6.5rem 0',
            xs: '6.5rem 0',
          },
        }}
      >
        <Container maxWidth="lg">
          <Grid container>
            <Grid 
              item 
              xs={12} 
              sm={12} 
              md={6} 
              order={{
                md: 1,
                sm: 2,
                xs: 2,
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  display: 'grid',
                  borderRadius: '1rem',
                  gridTemplateColumns: '1fr 1fr',
                  gridTemplateRows: 'auto auto',
                  overflow: 'hidden',
                  border: '0.5px solid #8893934f',
                }}
              >
                <Box
                  sx={{
                    display: {
                      md: 'block',
                      sm: 'none',
                      xs: 'none',
                    },
                    position: 'absolute',
                    top: 5,
                    left: 15,
                  }}
                >
                  <Image
                    src={Design}
                    style={designImage}
                    alt="About Design"
                    priority={false}
                  />
                </Box>
                {items.map((item) => (
                  <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        p: '4rem 1.5rem',
                        textAlign: 'center',
                        width: '100%',
                        border: '0.5px solid #8893934f',
                    }}
                    key={item.id} 
                  >
                    <Typography
                      sx={{
                          fontWeight: 800,
                          fontFamily: 'PoppinsBold',
                          fontSize: {
                            lg: '3rem',
                            md: 'calc(1.425rem + 2.1vw)',
                            sm: 'calc(1.425rem + 2.1vw)',
                            xs: 'calc(1.425rem + 2.1vw)',
                          },
                      }}
                      variant="h3"
                    >
                      {item.number}
                    </Typography>
                    <Typography
                      sx={{
                        color: '#000',
                        fontWeight: 600,
                        fontFamily: 'PoppinsRegular',
                        fontSize: '1rem',
                      }}
                      variant="h6"
                    >
                      {item.content}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
            <Grid 
              item 
              xs={12} 
              sm={12} 
              md={6}
              order={{
                md: 2,
                sm: 1,
                xs: 1,
              }}
            >
              <Box 
                sx={{
                  position: 'sticky',
                  top: '100px',
                  transition: 'all 0.3s',
                  paddingLeft: {
                    lg: '8rem',
                    md: '7.5rem',
                  }, 
                }}
              >
                <Typography
                  sx={{
                    color: '#0E7A6D',
                    fontWeight: 600,
                    fontFamily: 'PoppinsRegular',
                    fontSize: '1.25rem',
                    mb: '0.2rem',
                  }}
                  variant="h4"
                >
                  Our Story
                </Typography>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: {
                      lg: '2.5rem',
                      md: 'calc(1.325rem + .9vw)',
                      sm: 'calc(1.325rem + .9vw)',
                      xs: 'calc(1.325rem + .9vw)',
                    },
                    fontFamily: 'PoppinsBold',
                    mb: '0.5rem',
                  }}
                  variant="h2"
                >
                  A Great Story Starts with a Friendly Team
                </Typography>
                <Typography
                  sx={{
                    color: '#575757',
                    lineHeight: 1.75,
                    fontWeight: 400,
                    fontSize: '1rem',
                    fontFamily: 'OpenSans',
                  }}
                >
                  Globally e-enable principle-centered e-business before dynamic quality vectors cross-media materials before proactive outsourcing leverage other is vertical technology leadership.
                </Typography>
                <Typography
                  sx={{
                    m: '1rem 0',
                    fontWeight: 600,
                    fontSize: '1rem',
                    fontFamily: 'PoppinsRegular',
                  }}
                  variant="h6"
                >
                  We Are Awarded By-
                </Typography>
                <Stack sx={{ pb: '3rem' }} direction="row" spacing={2}>
                    <Image
                      src={Award01}
                      alt="User Review Award"
                      style={awardImage}
                      priority={false}
                    />
                    <Image
                      src={Award02}
                      alt="Best User Experience Award"
                      style={awardImage}
                      priority={false}
                    />
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Story;