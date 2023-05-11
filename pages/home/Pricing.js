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
import { CreditCard, EventAvailable, EventBusy, Circle } from '@mui/icons-material';
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

    const offers = [
        {
            id: 1,
            content: 'No credit card required',
            icon: <CreditCard color="inherit" fontSize="inherit" />,
            color_icon: '#0e7a6d',
            bg_icon: '#7fcfc5',
        },
        {
            id: 2,
            content: 'Get 30 day free trial',
            icon: <EventAvailable color="inherit" fontSize="inherit" />,
            color_icon: '#5cc9a7',
            bg_icon: '#c6ffe8',
        },
        {
            id: 3,
            content: 'Cancel anytime',
            icon: <EventBusy color="inherit" fontSize="inherit" />,
            color_icon: '#f25767',
            bg_icon: '#f3c6cb',
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
        <Box sx={{ pb: '4rem' }}>
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
                            width: '650px',
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#0e7a6d',
                                fontWeight: 600,
                                fontFamily: 'PoppinsBold',
                                fontSize: '1.25rem',
                            }}
                            component="h4"
                        >
                            Pricing
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
                            }}
                            component="h2"
                        >
                            Check Our Valuable Price
                        </Typography>
                        <Typography
                            sx={{
                                color: '#575757',
                                pt: '0.2rem',
                                lineHeight: 1.75,
                                fontFamily: 'OpenSans',
                                fontSize: '1rem',
                                fontWeight: 400,
                            }}
                            component="p"
                        >
                            Conveniently mesh cooperative services via magnetic outsourcing. Dynamically grow value whereas accurate e-commerce vectors.
                        </Typography>
                    </Box>
                </Box>
                <Container>
                    <Stack
                        sx={{
                            p: '3rem 0',
                        }}
                        direction={{
                            md: 'row',
                            sm: 'column',
                            xs: 'column',
                        }}
                        alignItems={{
                            md: 'center',
                            sm: 'flex-start',
                            xs: 'flex-start',
                        }}
                        justifyContent="center"
                        spacing={{
                            lg: 12,
                            md: 8,
                            sm: 3,
                            xs: 3
                        }}
                    >
                        {offers.map((offer) => (
                            <Box
                                key={offer.id}
                                sx={{ 
                                    display: 'flex',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar
                                    sx={{
                                        background: offer.bg_icon,
                                        p: '1.7rem',
                                        mr: '12px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: offer.color_icon,
                                            fontSize: '1.4rem',
                                        }}
                                    >
                                        {offer.icon}
                                    </Box>
                                </Avatar>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontFamily: 'PoppinsRegular',
                                        fontSize: '1rem',
                                    }}
                                    component="h6"
                                >
                                    {offer.content}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>
                    <Box
                        sx={{
                            position: 'relative',
                        }}
                    >
                        {masks.map((mask) => (
                            <Box
                                key={mask.id}
                                sx={[
                                    {
                                        display: {
                                            sm: 'block',
                                            xs: 'none',
                                        },
                                        zIndex: 0,
                                        position: 'absolute',
                                        bgcolor: '#80808069',
                                        height: '200px',
                                        width: '250px',
                                        maskImage: `url(${mask.image.src})`,
                                        maskSize: '16px',
                                    },
                                    mask.id === 1  && {
                                        bottom: {
                                            md: 31,
                                            sm: 31,
                                            xs: 0,
                                        },
                                        left: {
                                            md: -45,
                                            sm: 127,
                                            xs: 0,
                                        },
                                    },
                                    mask.id === 2 && {
                                        top: {
                                            md: 58,
                                            sm: 58,
                                            xs: 0,
                                        },
                                        right: {
                                            md: -41,
                                            sm: -41,
                                            xs: 0,
                                        },
                                    }
                                ]}
                                component="div"
                            ></Box>
                        ))}
                        <Grid 
                            sx={{ p: '5rem 0' }}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={3} 
                            container
                        >
                            {listings.map((listing) => (
                                <Grid 
                                    sx={{ position: 'relative' }}
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
                                                color: listing.id === 2 ? '#dbf335' : '#0E7A6D',
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
                                                color: listing.id === 2 && '#fff',
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
                                                color: listing.id === 2 && '#fff',
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
                                                            color: listing.id === 2 ? '#dbf335' : '#0E7A6D',
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
                    </Box>
                </Container>
            </Container>
        </Box>
    )
}

export default Pricing;