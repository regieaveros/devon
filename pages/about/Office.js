import parse from 'html-react-parser';
import {
    Box,
    Container,
    Grid,
    Button,
    Typography,
} from '@mui/material';

import Singapore from './../../public/about/singapore.jpg';
import LosAngeles from './../../public/about/los-angeles.jpg';
import NewYork from './../../public/about/new-york.jpg';
import BarlinCity from './../../public/about/barlin-city.jpg';

const Office = () => {

    const countries = [
        {
            id: 1,
            country: 'Singapore',
            address: '4636 Bombardier Way <br/> Sr, Worthington, <br/> California(CA), 94102',
            image: Singapore,
        },
        {
            id: 2,
            country: 'Los Angeles',
            address: '794 Mcallister <br/> St. Oak Harbor, <br/> Washington(WA), 98277',
            image: LosAngeles,
        },
        {
            id: 3,
            country: 'New York',
            address: '4219 Snowbird Lane <br/> St Carthage, <br/> New York(NY), 13619',
            image: NewYork,
        },
        {
            id: 4,
            country: 'Barlin City',
            address: 'Brandenburgische Straße <br/> DE. Berlin Kreuzberg, <br/> Berlin(CA), 10997',
            image: BarlinCity,
        }, 
    ];

    return (
        <Box sx={{ p: '7rem 0', }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        mb: '3rem',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box 
                        sx={{ 
                            textAlign: 'center', 
                            width: {
                                sm: '607px',
                                xs: '100%', 
                            }, 
                        }}
                    >
                        <Typography
                            sx={{
                                mb: '0.375rem',
                                fontWeight: 600,
                                fontSize: '1.25rem',
                                foontFamily: 'PoppinsRegular',
                                color: '#0E7A6D',
                            }}
                            variant="h4"
                        >
                            Our Office
                        </Typography>
                        <Typography
                            sx={{
                                mb: '0.625rem',
                                fontWeight: 700,
                                fontSize: {
                                    lg: '2.5rem',
                                    md: 'calc(1.325rem + .9vw)',
                                    sm: 'calc(1.325rem + .9vw)',
                                    xs: 'calc(1.325rem + .9vw)',
                                },
                                fontFamliy: 'PoppinsBold',
                            }}
                            variant="h2"
                        >
                            Located Around the World
                        </Typography>
                        <Typography
                            sx={{
                                color: '#575757',
                                fontFamily: 'OpenSans',
                                fontSize: '1rem',
                                fontWeight: 400,
                            }}
                            variant="p"
                        >
                            Dynamically technically sound technologies with parallel task convergence quality vectors through excellent relationships.
                        </Typography>
                    </Box>
                </Box>
                <Grid spacing={3} container>
                        {countries.map((country) => (
                            <Grid key={country.id} item xs={12} sm={6} md={3}>
                                <Box
                                    sx={{
                                        transition: 'all .3s ease-in',
                                        width: '100%',
                                        height: '360px',
                                        background: `url(${country.image.src}) center center / cover no-repeat`,
                                        borderRadius: '1rem',
                                        overflow: 'hidden',
                                        color: '#fff',
                                        '&:hover .css-16y0ry6': {
                                            opacity: 1,
                                        },
                                        '&:hover .css-280n8l': {
                                            transform: 'translateY(0%)',
                                        },
                                        '&:hover p': {
                                            opacity: 1,
                                            visibility: 'visible',
                                            transitionDelay: '0.3s',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            position: 'relative',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            textAlign: 'center',
                                            width: '100%',
                                            height: '100%',
                                            background: 'linear-gradient(180deg,transparent,rgba(0,0,0,.45))',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                opacity: 0,
                                                position: 'absolute',
                                                transition: 'all .3s linear',
                                                top: 0,
                                                left: 0,
                                                bgcolor: '#0e7a6d8a',
                                                height: '100%',
                                                width: '100%',
                                            }}
                                            variant="span"
                                        ></Box>
                                        <Box
                                            sx={{
                                                transition: 'all .3s linear',
                                                transform: 'translateY(150%)',
                                            }}
                                        >
                                            <Typography
                                                sx={{ 
                                                    mb: '0.5rem',
                                                    fontWeight: 600,
                                                    fontSize: '1.25rem',
                                                    fontFamily: 'PoppinsBold',
                                                }}
                                                variant="h5"
                                            >
                                                {country.country}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    transition: 'visibility 0s linear .5s,opacity .8s linear',
                                                    visibility: 'hidden',
                                                    opacity: 0,
                                                    fontFamily: 'OpenSans',
                                                    fontSize: '1rem',
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {parse(country.address)}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Office;