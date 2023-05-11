import Image from 'next/image';
import {
  Box,
  Container,
  Grid,
  Avatar,
  Typography,
} from '@mui/material';
import { CheckCircle, Polyline, Fingerprint, Settings } from '@mui/icons-material';
import Virtual from './../../public/about/virtual.jpg';

const Values = () => {

    const lists = [
        {
            id: 1,
            icon: <Polyline color="inherit" fontSize="inherit" />,
            title: 'Pixel Perfect Design',
            description: 'Progressively foster enterprise-wide systems whereas equity invested web-readiness harness installed.',
            bg_color: '#0e7a6d',
        },
        {
            id: 2,
            icon: <Fingerprint color="inherit" fontSize="inherit" />,
            title: 'Unique & Minimal Design',
            description: 'Dramatically administrate progressive metrics without error-free globally simplify standardized engineer efficient strategic.',
            bg_color: '#de4949',
        },
        {
            id: 3,
            icon: <Settings color="inherit" fontSize="inherit" />,
            title: 'Efficiency & Accountability',
            description: 'Objectively transition prospective collaboration and idea-sharing without focused maintain focused niche markets niches.',
            bg_color: '#2c7d50',
        },
    ];

    const contents = [
        {
            id: 1,
            content: 'Create a Free Account',
        },
        {
            id: 2,
            content: 'Install Our Tracking Pixel',
        },
        {
            id: 3,
            content: 'Start Tracking your Website',
        },
    ];

    const valuesImage = {
        width: '448px',
        height: '650px',
        maxWidth: '100%',
    };

    return (
        <Box
            sx={{
                background: '#f8f9fa',
                pt: '6.5rem',
                pb: {
                    md: '4rem',
                    sm: '6rem',
                    xs: '6.5rem',
                },
            }}
        >
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box sx={{ width: '95%' }}>
                            <Typography
                                sx={{
                                    mb: '0.375rem',
                                    fontWeight: 600,
                                    fontSize: '1.25rem',
                                    fontFamily: 'PoppinsRegular',
                                    color: '#0E7A6D',
                                }}
                                variant="h4"
                            >
                                Our Values
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
                                    fontFamily: 'PoppinsBold',
                                }}
                                variant="h2"
                            >
                                The Core Values that Drive Everything
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#575757',
                                    mb: '1rem',
                                    fontFamily: 'OpenSans',
                                    fontSize: '1rem',
                                    fontWeight: 400,
                                    lineHeight: 1.75,
                                }}
                                variant="p"
                            >
                                Quickly incubate functional channels with multidisciplinary architectures. Authoritatively fabricate formulate exceptional innovation.
                            </Typography>
                            <Box sx={{ mb: '3rem' }}>
                                {lists.map((list) => (
                                    <Box 
                                        key={list.id} 
                                        sx={{ 
                                            display: 'flex',
                                            mt: '2.5rem',
                                            mb: '1rem',
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                background: list.bg_color,
                                                fontSize: '2.3rem',
                                                height: '55px',
                                                width: '55px',
                                            }}
                                            variant="rounded"
                                        >
                                            {list.icon}
                                        </Avatar>
                                        <Box sx={{ ml: '1.5rem', }}>
                                            <Typography
                                                sx={{
                                                    mb: '0.375rem',
                                                    fontWeight: 600,
                                                    fontSize: '1.25rem',
                                                    fontFamily: 'PoppinsRegular',
                                                }}
                                                variant="h3"
                                            >
                                                {list.title}
                                            </Typography>
                                            <Typography
                                                
                                                sx={{
                                                    color: '#575757',
                                                    fontFamily: 'OpenSans',
                                                    fontSize: '1rem',
                                                    fontWeight: 400,
                                                    lineHeight: 1.75,
                                                }}
                                                variant="p"
                                            >
                                                {list.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: {
                                    md: 'flex-end',
                                    sm: 'center',
                                    xs: 'center',
                                },
                            }}
                        >
                            <Box 
                                sx={{
                                    position: 'relative',
                                    '& img': {
                                        borderRadius: '1rem',
                                    },          
                                }}
                            >
                                <Box
                                    sx={{
                                        zIndex: 1,
                                        position: 'absolute',
                                        bottom: '8%',
                                        left: {
                                            lg: '-23%',
                                            md: '7%',
                                            sm: '15%',
                                            xs: '7%',
                                        },
                                    }}
                                >   
                                    {contents.map((content) => (
                                        <Box
                                            sx={{
                                                background: '#fff',
                                                display: 'flex',
                                                borderRadius: '0.3rem',
                                                p: {
                                                    sm: '1rem',
                                                    xs: '0.6rem',
                                                },
                                                m: '0.8rem 0',
                                                boxShadow: '0 .125rem .3rem -.0625rem rgba(12,8,0,.03),0 .275rem .75rem -.0625rem rgba(12,8,0,.06)',
                                            }}
                                            key={content.id}
                                        >
                                            <CheckCircle
                                                sx={{
                                                    color: '#0E7A6D',
                                                    fontSize: '2em',
                                                    mr: '0.5rem',
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    fontSize: '1.0625rem',
                                                    fontFamily: 'PoppinsRegular',
                                                    fontWeight: 600,
                                                }}
                                                variamt="h6"
                                            >
                                                {content.content}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                                <Image
                                    src={Virtual}
                                    alt="Virtual Image"
                                    style={valuesImage}
                                    priority={false}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Values;