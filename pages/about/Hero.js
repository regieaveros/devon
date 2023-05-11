import Image from 'next/image';
import {
    Box,
    Grid,
    Stack,
    Container,
    Button,
    Typography,
} from '@mui/material';
import BackgroundImage from './../../public/about/background.svg';
import Image1 from './../../public/about/img-1.jpg';
import Image2 from './../../public/about/img-2.jpg';
import Image3 from './../../public/about/img-3.jpg';

const Hero = () => {

    const image_1 = {
        width: '609px',
        height: 'auto',
        maxWidth: '100%',
        borderRadius: '1rem',
        boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
    };

    const image_2 = {
        width: '900px',
        height: 'auto',
        maxWidth: '100%',
        borderRadius: '1rem',
        boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
    };

    const image_3 = {
        width: '510px',
        height: 'auto',
        maxWidth: '100%',
        borderRadius: '1rem',
        boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
    };

    return (
        <Box sx={{ background: '#1a5553', position: 'relative' }}>
            <Box
                sx={{
                    pt: {
                        md: '12rem',
                        sm: '8rem',
                        xs: '8rem',
                    },
                    background: `url(${BackgroundImage.src}) right center no-repeat`,
                }}
            >
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid sx={{ zIndex: 1 }} item xs={12} sm={12} md={6}>
                            <Box 
                                sx={{
                                    pr: {
                                        md: '2rem',
                                        sm: 0,
                                        xs: 0,
                                    },
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#fff',
                                        fontWeight: 800,
                                        fontFamily: 'PoppinsBold',
                                        fontSize: {
                                            lg: '3rem',
                                            md: 'calc(1.425rem + 2.1vw)',
                                            sm: 'calc(1.425rem + 2.1vw)',
                                            xs: 'calc(1.425rem + 2.1vw)',
                                        },
                                        lineHeight: 1.2,
                                    }}
                                    component="h1"
                                >
                                    Grow your Business & Customer Satisfaction with Devon
                                </Typography>
                                <Typography
                                    sx={{
                                        p: '1rem 0',
                                        color: '#fff',
                                        fontWeight: 400,
                                        fontSize: '1.25rem',
                                        lineHeight: 1.75,
                                        fontFamily: 'OpenSans',
                                    }}
                                    component="p"
                                >
                                    Dynamically disintermediate technically sound technologies with compelling quality vectors error-free communities.
                                </Typography>
                                <Stack sx={{ flexWrap: 'wrap' }} direction="row">
                                    <Button
                                        sx={{
                                            mt: '1rem',
                                            mr: '1rem',
                                            transition: 'all 0.3s',
                                            textTransform: 'none',
                                            color: '#fff',
                                            bgcolor: '#0E7A6D',
                                            p: '0.65rem 1.75rem',
                                            fontWeight: 500,
                                            fontFamily: 'PoppinsRegular',
                                            borderRadius: '0.375rem',
                                            fontSize: '1rem',
                                            '&:hover': {
                                                bgcolor: '#077063',
                                            },
                                        }}
                                    >
                                        Open Positions
                                    </Button>
                                    <Button
                                        sx={{
                                            mt: '1rem',
                                            transition: 'all 0.3s',
                                            textTransform: 'none',
                                            color: '#0E7A6D',
                                            bgcolor: '#d6f8f4',
                                            p: '0.65rem 1.75rem',
                                            fontWeight: 500,
                                            fontFamily: 'PoppinsRegular',
                                            borderRadius: '0.375rem',
                                            fontSize: '1rem',
                                            '&:hover': {
                                                bgcolor: '#0E7A6D',
                                                color: '#fff',
                                            },
                                        }}
                                    >
                                        Meet Our Team
                                    </Button>
                                </Stack>
                                <Box
                                    sx={{
                                        zIndex: 1,
                                        mt: {
                                            lg: '6rem',
                                            md: '8.7rem',
                                            sm: '3rem',
                                            xs: '3rem',
                                        },
                                    }}
                                >
                                    <Image 
                                        src={Image3}
                                        style={image_3}
                                        alt="Hero Image 3"
                                        priority={false}
                                    />
                                </Box> 
                            </Box>
                        </Grid>
                        <Grid sx={{ zIndex: 1 }} item xs={12} sm={12} md={6}>
                            <Stack
                                sx={{
                                    m: {
                                        md: 0,
                                        sm: '2rem 0 0 0',
                                        xs: '2rem 0 0 0',
                                    },
                                }}
                                direction={{
                                    md: "column",
                                    sm: "row",
                                    xs: "row",
                                }}
                                spacing={2}
                            >
                                <Box
                                    sx={{
                                        mb: {
                                            lg: '3rem',
                                            md: '6rem',
                                            sm: 0,
                                            xs: 0,
                                        },
                                        alignSelf: 'flex-end',
                                    }}
                                >
                                    <Image 
                                        src={Image1}
                                        style={image_1}
                                        alt="Hero Image 1"
                                        priority={false}
                                    />
                                </Box>
                                <Box sx={{ alignSelf: 'flex-end' }}>
                                    <Image 
                                        src={Image2}
                                        style={image_2}
                                        alt="Hero Image 2" 
                                        priority={false}
                                    />
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Box
                sx={{
                    zIndex: 0,
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: '3rem 0',
                    height: {
                        lg: '252px',
                        md: '156px',
                        sm: '290px',
                        xs: '290px',
                    },
                    bgcolor: '#fff',
                }}
            ></Box>
        </Box>
    )
}

export default Hero;