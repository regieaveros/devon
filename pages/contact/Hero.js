import Image from 'next/image';
import {
    Box,
    Container,
    Typography,
} from '@mui/material';
import Background from './../../public/page-header/background.svg';
import Circle from './../../public/page-header/circle.svg';


const Hero = () => {

    const circleImage = {
        width: '260px',
        height: '260px',
        maxWidth: '100%',
    };

    return (
        <Box sx={{ background: '#1a5553' }}>
            <Box
                sx={{
                    position: 'relative',
                    pt: {
                        md: '10rem',
                        sm: '8rem',
                        xs: '6.5rem',
                    },
                    pb: '3.5rem',
                    height: {
                        md: '430px',
                        sm: '320px',
                        xs: '100%',
                    },
                    background: `url(${Background.src}) left bottom no-repeat`,
                    backgroundPosition: {
                        md: '-35px 52px',
                        sm: '-141px -34px',
                        xs: '-141px -20px',
                    },
                    overflow: 'hidden',
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            width: {
                                lg: '842px',
                                md: '610px',
                                sm: '100%',
                                xs: '100%',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                mb: '0.6rem',
                                color: '#fff',
                                fontWeight: 800,
                                fontSize: {
                                    lg: '3rem',
                                    md: 'calc(1.425rem + 2.1vw)',
                                    sm: 'calc(1.425rem + 2.1vw)',
                                    xs: 'calc(1.425rem + 2.1vw)',
                                },
                                fontFamily: 'PoppinsBold',
                            }}
                            variant="h1"
                        >
                            Contact Us
                        </Typography>
                        <Typography
                            sx={{
                                color: '#fff',
                                fontSize: '1.25rem',
                                fontWeight: 400,
                                fontFamily: 'OpenSans',
                            }}
                            variant="p"
                        >
                            Seamlessly actualize client-based users after out-of-the-box value data through frictionless expertise. Proactively coordinate quality quality vectors vis-a-vis supply chains. Quickly engage client-centric web services.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: {
                                md: 'block',
                                sm: 'none',
                                xs: 'none',
                            },
                            position: 'absolute',
                            bottom: '-180px',
                            right: 50,
                        }}
                    >
                        <Image
                            src={Circle}
                            alt="Background Circle"
                            style={circleImage}
                            priority={false}
                        />
                    </Box> 
                </Container>
            </Box>
        </Box>
    )
}

export default Hero;