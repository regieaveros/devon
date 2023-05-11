import {
    Box,
    Stack,
    Container,
    Grid,
    Button,
    Avatar,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { Circle } from '@mui/icons-material';
import TriangleMaskGray from './../../public/home/triangle-mask-gray.png';

const Pricing = () => {

    const listings = [
        {
            id: 1,
            title: 'Starter',
            pricing: '$25',
            list: [
                '1 Team',
                '1 Installed Agent',
                'Real-Time Feedback',
                'Video Dedicated Support',
                'Attacked Targets Per Month',
                'Team Collaboration Tools',
                'Automated Updated Features',
                '24/7 Life time Support',
            ],
            title_color: '#0E7A6D',
            pricing_color: '#000',
            list_color: '#0E7A6D',
            bg_color: '#fff',
        },
        {
            id: 2,
            title: 'Advance',
            pricing: '$45',
            list: [
                '5 Team',
                '3 Installed Agent',
                'Real-Time Feedback',
                'Video Dedicated Support',
                '24 Attacked Targets Per Month',
                'Team Collaboration Tools',
                'Automated Updated Features',
                '24/7 Life time Support',
            ],
            title_color: '#dbf335',
            pricing_color: '#fff',
            list_color: '#dbf335',
            bg_color: 'linear-gradient(90deg,#388572,#3dd5b0)',
        },
        {
            id: 3,
            title: 'Premium',
            pricing: '$75',
            list: [
                '6 Team',
                '8 Installed Agent',
                'Real-Time Feedback',
                'Video Dedicated Support',
                '40 Attacked Targets Per Month',
                'Team Collaboration Tools',
                'Automated Updated Features',
                '24/7 Life time Support',
            ],
            title_color: '#0E7A6D',
            pricing_color: '#000',
            list_color: '#0E7A6D',
            bg_color: '#fff',
        },
    ];

    const masks = [
        {
            id: 1,
            image: TriangleMaskGray,
        },
        {
            id: 2,
            image: TriangleMaskGray,
        }
    ];

    return (
        <Box 
            sx={{
                pt: '4.2rem',
                pb: '5rem', 
                position: 'relative', 
                zIndex: 1, 
            }}
        >
            <Container maxWidth="lg">
                {masks.map((mask) => (
                    <Box
                        key={mask.id}
                        sx={[
                            {
                                display: {
                                    sm: 'block',
                                    xs: 'none',
                                },
                                zIndex: -1,
                                position: 'absolute',
                                bgcolor: '#80808069',
                                height: '200px',
                                width: '250px',
                                maskImage: `url(${mask.image.src})`,
                                maskSize: '16px', 
                            },
                            mask.id === 1  && {
                                bottom: {
                                    lg: 31,
                                    md: 31,
                                    sm: 31,
                                    xs: 0,
                                },
                                left: {
                                    lg: 78,
                                    md: 2,
                                    sm: 174,
                                    xs: 0,
                                },
                            },
                            mask.id === 2 && {
                                top: {
                                    lg: 20,
                                    md: 20,
                                    sm: 20,
                                    xs: 0,
                                },
                                right: {
                                    lg: 84,
                                    md: 7,
                                    sm: 0,
                                    xs: 0,
                                },
                            }
                        ]}
                        component="div"
                    ></Box>
                ))}
                <Container>
                    <Grid
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={3} 
                        container
                    >
                        {listings.map((listing) => (
                            <Grid 
                                key={listing.id} 
                                item 
                                xs={12} 
                                sm={6} 
                                md={4}
                            >
                                <Box
                                    sx={{
                                        background: listing.bg_color,
                                        p: '3rem 10%',
                                        borderRadius: '1rem',
                                        boxShadow: '0 1px 10px 1px #cfe6e370',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: listing.title_color,
                                            fontSize: '18px',
                                            fontWeight: 600,
                                            fontFamily: 'PoppinsRegular',
                                        }}
                                        component="h3"
                                    >
                                        {listing.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: listing.pricing_color,
                                            fontWeight: 700,
                                            fontFamily: 'PoppinsBold',
                                            fontSize: {
                                                lg: '2.5rem',
                                                md: 'calc(1.375rem + 1.5vw)',
                                                sm: 'calc(1.375rem + 1.5vw)',
                                                xs: 'calc(1.375rem + 1.5vw)',
                                            },
                                            pb: '2.5rem',
                                            borderBottom: '1px dashed #c0c0c5',
                                        }}
                                        component="h4"
                                    >
                                        {listing.pricing}
                                        <Typography
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                fontFamily: 'PoppinsRegular',
                                            }}
                                            color="inherit"
                                            component="span"
                                        >
                                            &nbsp;/month
                                        </Typography>
                                    </Typography>
                                    <List
                                        sx={{
                                            color: listing.id === 2 ? '#fff' : '#575757',
                                            fontFamily: 'OpenSans',
                                            fontSize: '15px',
                                            lineHeight: 1.75,
                                            p: '2rem 0',
                                            height: {
                                                sm: '390px',
                                                xs: '100%',
                                            },
                                        }}
                                    >
                                        {listing.list.map((list) => (
                                            <ListItem sx={{ p: 0 }} key={list}>
                                                <ListItemIcon 
                                                    sx={{
                                                        p: 0,
                                                        color: listing.list_color,
                                                        fontSize: '10px', 
                                                        minWidth: '20px' 
                                                    }}
                                                >
                                                    <Circle color="inherit" fontSize="inherit" />
                                                </ListItemIcon>
                                                <ListItemText 
                                                    primary={list} 
                                                    color="inherit"
                                                    fontSize="inherit"
                                                    disableTypography 
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                    <Button
                                        sx={{
                                            bgcolor: listing.id === 2 ? '#0e7a6d' : 'transparent',
                                            color: listing.id === 2 ? '#fff' : '#0e7a6d',
                                            border: '2px solid #0e7a6d',
                                            textTransform: 'none',
                                            p: '0.65rem 1.75rem',
                                            fontWeight: 500,
                                            fontFamily: 'PoppinsRegular',
                                            fontSize: '1rem',
                                            '&:hover': {
                                                bgcolor: listing.id === 2 ? '#167e71' : '#0e7a6d',
                                                color: '#fff',
                                            },
                                        }}
                                        disableRipple
                                    >
                                        Buy Now
                                    </Button>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Container>
        </Box>
    )
}

export default Pricing;