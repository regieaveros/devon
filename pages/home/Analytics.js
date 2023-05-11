import Image from 'next/image';
import Link from 'next/link';
import {
Box,
Grid,
Avatar,
Container,
List,
ListItem,
ListItemIcon,
ListItemText,
Typography,
} from '@mui/material';
import { VerifiedUser, CheckCircle, East, Fingerprint } from '@mui/icons-material';
import AnalyticImage from './../../public/home/analytics.svg';
import BrandStyleImage from './../../public/home/brand.svg';

const Analytics = () => {

    const lists = [
        {
            id: 1,
            name: 'Thought leadership',
        },
        {
            id: 2,
            name: 'Modernized prospecting',
        },
        {
            id: 3,
            name: 'Showcasing success',
        },
        {
            id: 4,
            name: 'Personal branding',
        },
        {
            id: 5,
            name: 'Better win rates',
        },
        {
            id: 6,
            name: 'Sales compliance',
        },
    ];

    const analyticsImage = {
        width: '580px',
        height: 'auto',
        maxWidth: '100%',
    };

    return (
        <Box sx={{ background: '#fff', p: '6rem 0 10rem 0' }}>
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ width: {md: '90%', sm: '100%', xs: '100%'} }}
                        >
                            <Avatar
                                sx={{
                                    background: '#0e7a6d',
                                    m: '2rem 0',
                                    p: '1.8rem',
                                    borderRadius: '20%',
                                }}
                            >
                                <VerifiedUser />
                            </Avatar>
                            <Typography
                                sx={{
                                    color: '#000',
                                    fontFamily: 'PoppinsBold',
                                    fontSize: {
                                        lg: '2.5rem',
                                        md: 'calc(1.325rem + .9vw)',
                                        sm: 'calc(1.325rem + .9vw)',
                                        xs: 'calc(1.325rem + .9vw)',
                                    },
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                }}
                                component="h2"
                            >
                                Advanced Analytics, Understand Business
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#575757',
                                    m: '0.5rem 0 1rem 0',
                                    fontFamily: 'OpenSans',
                                    fontSize: '1rem',
                                    lineHeight: 1.75,
                                    fontWeight: 400,
                                }}
                                component="p"
                            >
                                Distinctively promote parallel vortals with ubiquitous e-markets. Proactively benchmark turnkey optimize next-generation strategic leadership without resource sucking ideas.
                            </Typography>
                            <List sx={{ color: '#575757', display: 'flex', flexWrap: 'wrap' }}>
                                {lists.map((list) => (
                                    <ListItem 
                                        sx={{ 
                                            flex: {
                                                sm: '0 0 50%',
                                                xs: '0 0 100%',
                                            }, 
                                            p: '5px 0', 
                                            m: 0,
                                        }} 
                                        key={list.id}
                                    >
                                        <ListItemIcon sx={{ minWidth: "30px" }}>
                                            <CheckCircle sx={{ color: '#0e7a6d', fontSize: '20px' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            sx={{
                                                fontFamily: 'OpenSans',
                                                fontSize: '1rem',
                                                fontWeight: 400,
                                                lineHeight: 1.4,
                                            }}
                                            primary={list.name}
                                            color="inherit"
                                            disableTypography 
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Box>
                        <Box sx={{ mt: '1rem' }}>
                            <Link href="/about" passHref legacyBehavior>
                                <Typography
                                    sx={{
                                        position: 'relative',
                                        fontFamily: 'PoppinsRegular',
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        color: '#0e7a6d',
                                        '& .css-1slfft2-MuiSvgIcon-root': {
                                            transition: 'all 0.3s',
                                        },
                                        '&:hover .css-1slfft2-MuiSvgIcon-root': {
                                            right: -35,
                                        },
                                    }}
                                    component="a"
                                >
                                    Know More About Us
                                    <East
                                        sx={{
                                            position: 'absolute',
                                            bottom: 4,
                                            right: -30,
                                        }} 
                                        fontSize="inherit"
                                        color="inherit" 
                                    />
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box 
                            sx={{
                                mt: '4rem',
                                display: 'flex',
                                justifyContent: {
                                    md: 'flex-end',
                                    sm: 'center',
                                    xs: 'center'
                                },
                            }}
                        >
                            <Image
                                src={AnalyticImage}
                                style={analyticsImage}
                                alt="Analytic Photo"
                                priority={false}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Grid sx={{ mt: {md: '8rem', sm: '2rem', xs: '2rem'} }} container>
                    <Grid item xs={12} sm={12} md={7} order={{ xs: 2, sm: 2, md: 1 }}>
                        <Box
                            sx={{
                                mt: '4rem',
                                display: 'flex',
                                justifyContent: {
                                    md: 'flex-start',
                                    sm: 'center',
                                    xs: 'center',
                                },
                                width: {
                                    md: '90%',
                                    sm: '100%',
                                    xs: '100%',
                                },
                            }}
                        >
                            <Image
                                src={BrandStyleImage}
                                style={analyticsImage}
                                alt="Brand and Style Photo"
                                priority={false}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} order={{ xs: 1, sm: 1, md: 2 }}>
                        <Avatar
                            sx={{
                                background: '#0e7a6d',
                                m: '2rem 0',
                                p: '1.8rem',
                                borderRadius: '20%',
                            }}
                        >
                            <Fingerprint />
                        </Avatar>
                        <Typography
                            sx={{
                                color: '#000',
                                fontFamily: 'PoppinsBold',
                                fontSize: {
                                    lg: '2.5rem',
                                    md: 'calc(1.325rem + .9vw)',
                                    sm: 'calc(1.325rem + .9vw)',
                                    xs: 'calc(1.325rem + .9vw)',
                                },
                                fontWeight: 700,
                                lineHeight: 1.2,
                            }}
                            component="h2"
                        >
                            Match Everything to Brand and Style
                        </Typography>
                        <Box
                            sx={{
                                color: '#575757',
                                mt: '0.5rem',
                                fontFamily: 'OpenSans',
                                fontSize: '1rem',
                                lineHeight: 1.75,
                                fontWeight: 400,
                            }}
                        >
                            <p>
                                Intrinsicly pontificate reliable metrics with enabled. Holisticly maintain clicks-and-mortar manufactured products empower viral customer service through resource deliverables.
                            </p>
                            <p>
                                Customer service through resource pontificate reliable metrics with enabled expedite resource maximizing information maintain manufactured products.
                            </p>
                        </Box>
                        <Box sx={{ mt: '1.5rem' }}>
                            <Link href="/about" passHref legacyBehavior>
                                <Typography
                                    sx={{
                                        position: 'relative',
                                        fontFamily: 'PoppinsRegular',
                                        fontWeight: 600,
                                        fontSize: '15px',
                                        color: '#0e7a6d',
                                        '& .css-1slfft2-MuiSvgIcon-root': {
                                            transition: 'all 0.3s',
                                        },
                                        '&:hover .css-1slfft2-MuiSvgIcon-root': {
                                            right: -35,
                                        },
                                    }}
                                    component="a"
                                >
                                    Know More About Us
                                    <East
                                        sx={{
                                            position: 'absolute',
                                            bottom: 4,
                                            right: -30,
                                        }} 
                                        fontSize="inherit"
                                        color="inherit" 
                                    />
                                </Typography>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Analytics
