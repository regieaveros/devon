import { useState } from 'react';
import Image from 'next/image';
import {
    Box,
    Grid,
    Stack,
    Avatar,
    Container,
    Button,
    Modal,
    Zoom,
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { PlayCircleOutline, Close, CheckCircleOutline } from '@mui/icons-material';

//icons
import Icon1 from './../../public/home/3d-icons/1.png';
import Icon2 from './../../public/home/3d-icons/2.png';
import Icon3 from './../../public/home/3d-icons/3.png';
import Icon4 from './../../public/home/3d-icons/4.png';
import Icon5 from './../../public/home/3d-icons/5.png';
import Icon6 from './../../public/home/3d-icons/6.png';
import Icon7 from './../../public/home/3d-icons/7.png';
import Icon8 from './../../public/home/3d-icons/8.png';
import Icon9 from './../../public/home/3d-icons/9.png';
import Icon10 from './../../public/home/3d-icons/10.png';
import Icon11 from './../../public/home/3d-icons/11.png';
import Icon12 from './../../public/home/3d-icons/12.png';

//image
import CircleGreen from './../../public/home/circle-green.svg';
import CircleYellow from './../../public/home/circle-yellow.svg';

const Integration = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const icons_01 = [
        {
            id: 1,
            icon: Icon1,
        },
        {
            id: 2,
            icon: Icon2,
        },
        {
            id: 3,
            icon: Icon3,
        },
        {
            id: 4,
            icon: Icon4,
        },
        {
            id: 5,
            icon: Icon5,
        },
        {
            id: 6,
            icon: Icon6,
        },
    ];

    const icons_02 = [
        {
            id: 1,
            icon: Icon7,
        },
        {
            id: 2,
            icon: Icon8,
        },
        {
            id: 3,
            icon: Icon9,
        },
        {
            id: 4,
            icon: Icon10,
        },
        {
            id: 5,
            icon: Icon11,
        },
        {
            id: 6,
            icon: Icon12,
        },
    ];

    const drives = [
        {
            id: 1,
            status: 'Connect',
            icon: Icon4,
            title: 'Google Drive',
            content: `Competently generate unique e-services and client-based models. Globally engage tactical niche`,
            bg_badge: '#f3c6cb',
            color_badge: '#f25767',
        },
        {
            id: 2,
            status: 'Connected',
            icon: Icon9,
            title: 'Google Drive',
            content: `Globally engage tactical niche markets rather than client-based competently generate services`,
            bg_badge: '#7fcfc5',
            color_badge: '#0e7a6d',
        },
    ];

    const lists = [
        {
            id: 1,
            text: `Free 14-day trial`,
        },
        {
            id: 2,
            text: `No credit card required`,
        },
        {
            id: 3,
            text: `Support 24/7`,
        },
        {
            id: 4,
            text: `Cancel anytime`,
        },
    ];

    const circleImage = {
        width: '320px',
        height: 'auto',
        maxWidth: '100%',
    };

    return (
        <Box sx={{ p: '7rem 0' }}>
            <Container maxWidth="lg">
                <Grid
                    sx={{
                        m: {
                            md: '5rem 0',
                            sm: '0rem',
                            xs: '0rem',
                        },
                    }}
                    direction="row"
                    justifyContent="center"
                    container
                >
                    <Grid item xs={12} sm={12} md={3}>
                        <Box
                            sx={{
                                m: '1rem 0',
                                display: 'flex',
                                justifyContent: {
                                    md: 'flex-start',
                                    sm: 'center',
                                    xs: 'center',
                                },
                            }}
                        >
                            <Stack
                                sx={{
                                    width: '100%',
                                    position: 'relative',
                                    flexWrap: 'wrap',
                                }}
                                direction="row"
                                justifyContent="center"
                                spacing={1}
                            >
                                {icons_01.map((icon) => (
                                    <Avatar
                                        key={icon.id}
                                        sx={[
                                            {
                                                transition: 'all 0.2s',
                                                position: {
                                                    md: 'absolute',
                                                    sm: 'relative',
                                                    xs: 'relative',
                                                },
                                                width: '65px',
                                                height: '65px',
                                                p: '0.8rem',
                                                mb: '0.7rem !important',
                                                boxShadow: '7px 7px 10px 0 #545a5921',
                                                bgcolor: '#fff',
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                },
                                            },
                                            icon.id === 1 && {
                                                top: {
                                                    md: '-100px',
                                                    sm: '0px',
                                                    xs: '0px',
                                                },
                                                left: {
                                                    md: '25%',
                                                    sm: '0%',
                                                    xs: '0%',
                                                },
                                            },
                                            icon.id === 2 && {
                                                top: {
                                                    md: '-50px',
                                                    sm: '0px',
                                                    xs: '0px',
                                                },
                                                left: {
                                                    md: '80%',
                                                    sm: '0%',
                                                    xs: '0%',
                                                },
                                            },
                                            icon.id === 3 && {
                                                top: 0,
                                                left: 0,
                                            },
                                            icon.id === 4 && {
                                                top: {
                                                    md: '50px',
                                                    sm: '0px',
                                                    xs: '0px',
                                                },
                                                left: {
                                                    md: '60%',
                                                    sm: '0%',
                                                    xs: '0%',
                                                },
                                            },
                                            icon.id === 5 && {
                                                top: {
                                                    md: '100px',
                                                    sm: '0px',
                                                    xs: '0px',
                                                },
                                                left: {
                                                    md: '15%',
                                                    sm: '0%',
                                                    xs: '0%',
                                                },
                                            },
                                            icon.id === 6 && {
                                                top: {
                                                    md: '150px',
                                                    sm: '0px',
                                                    xs: '0px',
                                                },
                                                left: {
                                                    md: '80%',
                                                    sm: '0%',
                                                    xs: '0%',
                                                },
                                            },
                                        ]}
                                    >
                                        <Image 
                                            src={icon.icon} 
                                            alt={`Integration Icon ${icon.id}`}
                                            height={39}
                                            width={39}
                                            priority={false}
                                        />
                                    </Avatar>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
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
                                    textAlign: 'center',
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: '#0E7A6D',
                                        fontWeight: 600,
                                        fontFamily: 'PoppinsBold',
                                        fontSize: '1.25rem',
                                    }}
                                    component="h4"
                                >
                                    Integration
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
                                        lineHeight: 1.2,
                                    }}
                                    component="h2"
                                >
                                    We Collaborate with Top Software Company
                                </Typography>
                                <Button
                                    sx={{
                                        p: '0.65rem 1.75rem',
                                        transition: 'all 0.2s',
                                        textTransform: 'none',
                                        bgcolor: '#0E7A6D',
                                        color: '#fff',
                                        fontFamily: 'PoppinsRegular',
                                        fontSize: '1rem',
                                        boxShadow: '0 6px 13px -6px #0e7a6d',
                                        borderRadius: '0.375rem',
                                        mt: '1.5rem',
                                        '&:hover': {
                                            boxShadow: 'none',
                                            bgcolor: '#0E7A6D',
                                        },
                                    }}
                                >
                                    View all integration
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={3}>
                        <Box
                            sx={{
                                m: '1rem 0',
                                display: 'flex',
                                justifyContent: {
                                    md: 'flex-end',
                                    sm: 'center',
                                    xs: 'center',
                                },
                            }}
                        >
                            <Stack
                                sx={{
                                    width: '100%',
                                    position: 'relative',
                                    flexWrap: 'wrap',
                                }}
                                direction="row"
                                justifyContent="center"
                                spacing={1}
                            >
                                {icons_02.map((icon) => (
                                    <Avatar
                                        key={icon.id}
                                        sx={[
                                            {
                                                transition: 'all 0.2s',
                                                position: {
                                                    md: 'absolute',
                                                    sm: 'relative',
                                                    xs: 'relative',
                                                },
                                                width: '65px',
                                                height: '65px',
                                                p: '0.8rem',
                                                mb: '0.7rem !important',
                                                boxShadow: '7px 7px 10px 0 #545a5921',
                                                bgcolor: '#fff',
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                },
                                            },
                                            icon.id === 1 && {
                                                top: {
                                                    md: '-100px',
                                                    sm: '0px',
                                                    xs: '0px',
                                                },
                                                right: {
                                                    md: '25%',
                                                    sm: '0%',
                                                    xs: '0%',
                                                },
                                            },
                                            icon.id === 2 && {
                                                top: {
                                                    md: '-50px',
                                                    sm: '0px',
                                                    xs: '0px',
                                                },
                                                right: {
                                                    md: '80%',
                                                    sm: '0%',
                                                    xs: '0%',
                                                },
                                            },
                                            icon.id === 3 && {
                                                top: 0,
                                                right: 0,
                                            },
                                            icon.id === 4 && {
                                                top: {
                                                    md: '50px',
                                                    sm: '0px',
                                                    xs: '0px',
                                                },
                                                right: {
                                                    md: '60%',
                                                    sm: '0%',
                                                    xs: '0%',
                                                },
                                            },
                                            icon.id === 5 && {
                                                top: {
                                                    md: '100px',
                                                    sm: '0px',
                                                    xs: '0px',
                                                },
                                                right: {
                                                    md: '15%',
                                                    sm: '0%',
                                                    xs: '0%',
                                                },
                                            },
                                            icon.id === 6 && {
                                                top: {
                                                    md: '150px',
                                                    sm: '0px',
                                                    xs: '0px',
                                                },
                                                right: {
                                                    md: '80%',
                                                    sm: '0%',
                                                    xs: '0%',
                                                },
                                            },
                                        ]}
                                    >
                                        <Image 
                                            src={icon.icon} 
                                            alt={`Integration Icon ${icon.id}`}
                                            height={39}
                                            width={39}
                                            priority={false}
                                        />
                                    </Avatar>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
                <Box 
                    sx={{ 
                        p: {
                            sm: '3rem 7rem',
                            xs: '3rem 0rem',
                        }, 
                    }}
                >
                    <Grid spacing={3} container>
                        {drives.map((drive) => (
                            <Grid key={drive.id} item xs={12} sm={12} md={6}>
                                <Box
                                    sx={{
                                        background: '#fff',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        position: 'relative',
                                        borderRadius: '1rem',
                                        border: '2px solid hsla(0,0%,40%,.1)',
                                        p: '3.5rem 10%',
                                        height: '100%',
                                        '&:hover': {
                                            transform: 'translateY(-2px)',
                                            boxShadow: '0 20px 20px 0 rgb(2 19 79 / 9%)',
                                        },
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            background: drive.bg_badge,
                                            color: drive.color_badge,
                                            position: 'absolute',
                                            top: '8%',
                                            right: '8%',
                                            width: '90px',
                                            height: '28px',
                                            fontSize: '13px',
                                            fontFamily: 'PoppinsRegular',
                                            fontWeight: 700,
                                        }}
                                        variant="rounded"
                                    >
                                        {drive.status}
                                    </Avatar>
                                    <Avatar
                                        sx={{
                                            background: '#fff',
                                            width: '55px',
                                            height: '55px',
                                            p: '0.8rem',
                                            boxShadow: '0 2px 4px 0 rgb(0 0 0 / 12%)',
                                        }}
                                    >
                                        <Image 
                                            src={drive.icon} 
                                            alt="Google Drive Icon"
                                            height={29}
                                            width={29}
                                            priority={false}
                                        />
                                    </Avatar>
                                    <Typography
                                        sx={{
                                            p: '1rem 0 0.2rem 0',
                                            fontWeight: 600,
                                            fontFamily: 'PoppinsRegular',
                                            fontSize: '1.25rem',
                                        }}
                                        component="h5"
                                    >
                                        {drive.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#575757',
                                            lineHeight: 1.75,
                                            fontFamily: 'OpenSans',
                                            fontSize: '1rem',
                                            fontWeight: 400,
                                        }}
                                        component="p"
                                    >
                                        {drive.content}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box
                    sx={{
                        background: 'linear-gradient(90deg,#388572,#3dd5b0)',
                        position: 'relative',
                        mt: '8rem',
                        p: {
                            md: '7.5rem 2rem',
                            sm: '3rem 2rem',
                            xs: '3rem 2rem',
                        },
                        borderRadius: '1rem',
                        overflow: 'hidden',
                    
                    }}
                >
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
                                position: 'relative',
                            }}
                        >
                            <Typography
                                sx={{
                                    color: '#dbf335',
                                    fontWeight: 600,
                                    fontFamily: 'PoppinsRegular',
                                    fontSize: '1.25rem',
                                }}
                                component="h4"
                            >
                                Let&#39;s Try&#33; Get Free Support
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#fff',
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
                                Start Your 14&#45;Day Free Trial
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#fff',
                                    lineHeight: 1.75,
                                    fontFamily: 'OpenSans',
                                    fontSize: '1rem',
                                    fontWeight: 400,
                                }}
                                component="p"
                            >
                                We can help you to create your dream website for better business revenue&#46;
                            </Typography>
                            <Stack
                                sx={{
                                    pt: '2.5rem',
                                    pb: '1rem',
                                    flexWrap: 'wrap',
                                }}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={1}
                            >
                                <Button
                                    sx={{
                                        p: '0.65rem 1.75rem',
                                        transition: 'all 0.2s',
                                        textTransform: 'none',
                                        bgcolor: '#0E7A6D',
                                        color: '#fff',
                                        fontFamily: 'PoppinsRegular',
                                        fontSize: '1rem',
                                        borderRadius: '0.375rem',
                                        '&:hover': {
                                            bgcolor: '#0E7A6D',
                                        },
                                    }}
                                >
                                    Contact with Us
                                </Button>
                                <Button 
                                    onClick={() => handleOpen()} 
                                    sx={{
                                        color: '#fff',
                                        fontFamily: 'PoppinsRegular',
                                        bgcolor: 'transparent',
                                        border: 0,
                                        padding: '13px 20px',
                                        textTransform: 'none',
                                        fontSize: '13px',
                                        '&:hover': {
                                        bgcolor: 'transparent',
                                        },
                                    }} 
                                    disableRipple
                                >
                                    <PlayCircleOutline 
                                        sx={{ fontSize: '2.7rem', marginRight: '5px' }} 
                                        color="inherit" 
                                    />
                                    Watch Video
                                </Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                >
                                    <Zoom in={open}>
                                        <Box
                                            sx={{
                                            position: 'absolute',
                                            bgcolor: 'transparent',
                                            p: 0,
                                            boxShadow: 24,
                                            inset: {
                                                lg: '18% 25%',
                                                md: '18% 15%',
                                                sm: '18% 10%',
                                                xs: '18% 8%',
                                            },
                                            width: {
                                                lg: '50%',
                                                md: '70%',
                                                sm: '80%',
                                                xs: '80%',
                                            },
                                            height: {
                                                md: '70%',
                                                sm: '60%',
                                            },
                                            }}
                                        >
                                            <Box sx={{ position: 'relative' }}>
                                                <IconButton 
                                                    onClick={handleClose} 
                                                    sx={{
                                                    position: 'absolute',
                                                    top: '-5px',
                                                    right: '-35px',
                                                    color: '#fff',
                                                    p: '2px',
                                                    }}
                                                >
                                                    <Close sx={{ fontSize: '30px' }} />
                                                </IconButton>
                                            </Box>
                                            <iframe 
                                                width="100%" 
                                                height="100%" 
                                                src="https://www.youtube.com/embed/hAP2QF--2Dg" 
                                                title="Product Explainer Video | UpSend |  Best SaaS Explainer Video" 
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            ></iframe>
                                        </Box>
                                    </Zoom>
                                </Modal>
                            </Stack>
                            <Stack
                                sx={{
                                    flexWrap: 'wrap',
                                    color: '#fff',
                                }}
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                spacing={3}
                            >
                                {lists.map((list) => (
                                    <Typography
                                        sx={{
                                            fontFamily: 'OpenSans',
                                            fontSize: '1rem',
                                            fontWeight: 400,
                                        }}
                                        key={list.id}
                                        color="inherit"
                                    >
                                        <CheckCircleOutline
                                            sx={{
                                                position: 'relative',
                                                top: '3px',
                                                left: 0,
                                                color: '#0E7A6D',
                                                fontSize: '20px',
                                                mr: '0.3rem',
                                            }}
                                        />
                                        {list.text}
                                    </Typography>
                                ))}
                            </Stack>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: {
                                md: 'block',
                                sm: 'none',
                                xs: 'none',
                            },
                            position: 'absolute',
                            bottom: -230,
                            left: 50,
                        }}
                    >
                        <Image 
                            src={CircleGreen}
                            style={circleImage}
                            alt="Circle Green"
                            priority={false}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: {
                                md: 'block',
                                sm: 'none',
                                xs: 'none',
                            },
                            position: 'absolute',
                            top: -250,
                            right: 50,
                        }}
                    >
                        <Image 
                            src={CircleYellow}
                            style={circleImage}
                            alt="Circle Yellow" 
                            priority={false}
                        />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Integration;