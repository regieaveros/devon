import Image from 'next/image';
import {
  Box,
  Grid,
  Container,
  Avatar,
  Typography,
} from '@mui/material';
import { AccountTree, DeviceHub,  Layers, LocalShipping } from '@mui/icons-material';
import BusinessProcess from './../../public/home/business-process.jpg';

const Process = () => {

  const steps = [
    {
      id: 1,
      subtitle: 'Step 1',
      title: 'Research and Content Planing',
      description: 'Progressively foster enterprise-wide systems whereas equity invested web-readiness harness installed base bandwidth.',
      icon: <AccountTree color="inherit" fontSize="inherit" />,
    },
    {
      id: 2,
      subtitle: 'Step 2',
      title: 'Publishing and Execution',
      description: 'Dramatically administrate progressive metrics without error-free globally simplify standardized alignments plagiarize distributed.',
      icon: <DeviceHub color="inherit" fontSize="inherit" />,
    },
    {
      id: 3,
      subtitle: 'Step 3',
      title: 'Product Prototyping',
      description: 'Interactively whiteboard transparent testing procedures before bricks-and-clicks initiatives administrate competencies.',
      icon: <Layers color="inherit" fontSize="inherit" />,
    },
    {
      id: 4,
      subtitle: 'Step 4',
      title: 'Deliver the Final Product',
      description: 'Dramatically plagiarize distributed progressive metrics without error-free globally simplify standardized alignments.',
      icon: <LocalShipping color="inherit" fontSize="inherit" />,
    },
  ];

  const processImage = {
    width: '530px',
    height: '620px',
    maxWidth: '100%',
  };

  return (
    <Box sx={{ background: '#fff', p: '7rem 0 6rem 0' }}>
      <Container maxWidth="lg">
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
              maxWidth: '650px',
            }}
            >
            <Typography
              sx={{
                fontFamily: 'PoppinsBold',
                color: '#0e7a6d',
                fontWeight: 600,
                fontSize: '1.25rem',
              }}
              component="h4"
            >
              Process
            </Typography>
            <Typography
              sx={{
                color: '#000',
                fontWeight: 700,
                fontSize: {
                  lg: '2.5rem',
                  md: 'calc(1.325rem + .9vw)',
                  sm: 'calc(1.325rem + .9vw)',
                  xs: 'calc(1.325rem + .9vw)',
                },
                fontFamily: 'PoppinsBold',
              }}
              component="h2"
            >
              We Follow Our Work Process
            </Typography>
            <Typography
              sx={{
                color: '#575757',
                fontSize: '1rem',
                fontFamily: 'OpenSans',
                lineHeight: 1.75,
                fontWeight: 400,
              }}
              component="p"
            >
              Enthusiastically engage cross-media leadership skills for alternative experiences. Proactively drive vertical systems than intuitive architectures.
            </Typography>
          </Box>
        </Box>
        <Grid sx={{ p: '3.5rem 0' }} container>
          <Grid item xs={12} sm={12} md={6} order={{ xs: 2, sm: 2, md: 1, }}>
            <Box 
              sx={{
                display: {
                  md: 'block',
                  sm: 'flex',
                  xs: 'flex',
                },
                justifyContent: {
                  md: 'initial',
                  sm: 'center',
                  xs: 'center',
                },
                height: '100%',
                width: {
                  lg: '100%',
                  md: '90%',
                  sm: '100%',
                  xs: '100%',
                },
                '& img': {
                  borderRadius: '1rem',
                },
              }}
            >
              <Image
                src={BusinessProcess}
                style={processImage}
                alt="Business Process Image"
                priority={false}
              />
            </Box>
          </Grid>
          <Grid 
            sx={{
              position: 'relative',
              '&:before':{
                content: `""`,
                position: 'absolute',
                top: 5,
                left: '32px',
                border: '1px dashed #57575754',
                height: {
                  sm: '82%',
                  xs: '78%'
                },
              },
            }}
            item 
            xs={12} 
            sm={12} 
            md={6}
            order={{ xs: 1, sm: 1, md: 2, }}
          >  
            {steps.map((step) => (
              <Box key={step.id} sx={{ display: 'flex' }}>
                <Box 
                  sx={{
                    flexShrink: 1,
                    pr: '1.5rem',
                  }}
                >
                  <Avatar
                    sx={{
                      background: '#fff',
                      mt: '5px',
                      borderRadius: '1rem',
                      border: '2px solid #57575754',
                      p: '2rem',
                      zIndex: 1,
                      '&:hover svg': {
                        color: '#0e7a6d',
                      },
                    }}
                    variant="rounded">
                      <Box
                        sx={{
                          transition: 'all 0.2s',
                          fontSize: '1.5rem',
                          color: '#575757c2',
                        }}
                      >
                        {step.icon}
                      </Box>
                  </Avatar>
                </Box>
                <Box
                  sx={{
                    width: '100%',
                  }}
                >
                  <Typography
                    sx={{
                      color: '#0e7a6d',
                      fontWeight: 600,
                      fontFamily: 'PoppinsRegular',
                      fontSize: '1rem',
                    }}
                    component="h6"
                  >
                    {step.subtitle}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: 'PoppinsRegular',
                      fontSize: '1.25rem',
                    }}
                    component="h3"
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: '#575757',
                      lineHeight: 1.75,
                      fontFamily: 'OpenSans',
                      fontSize: '1rem',
                      fontWeight: 400,
                      p: '0.3rem 0 3rem 0',
                    }}
                    component="p"
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Process;
