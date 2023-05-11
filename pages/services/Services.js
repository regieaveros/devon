import parse from 'html-react-parser';
import {
    Box,
    Container,
    Grid,
    Avatar,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
} from '@mui/material';
import { 
    SignalCellularAlt,
    Assessment,
    PeopleOutline,
    Repeat,
    Settings,
    CheckCircle,
    ArrowRightAlt,
} from '@mui/icons-material';

const Services = () => {

    const lists = [
        {
            id: 1,
            icon: <SignalCellularAlt fontSize="inherit" color="inherit" />,
            title: 'Advanced analytics',
            content: '<p>Synergistically pursue accurate initiatives without economically sound imperatives.</p><p>Professionally architect unique process improvements via optimal.</p>',
            includes: [
                {
                    id: 1,
                    content: 'High-converting',
                },
                {
                    id: 2,
                    content: 'Personal branding',
                },
                {
                    id: 3,
                    content: 'Modernized prospecting',
                },
                {
                    id: 4,
                    content: 'Clean and modern',
                },   
                {
                    id: 5,
                    content: 'Showcasing success',
                },
                {
                    id: 6,
                    content: 'Material UI latest version',
                },
            ],
            bg_avatar: '#7fcfc5',
            color_avatar: '#0e7a6d'
        },
        {
            id: 2,
            icon: <Assessment fontSize="inherit" color="inherit" />,
            title: 'Automated Reports',
            content: '<p>Synergistically pursue accurate initiatives without economically imperatives.</p>',
            bg_avatar: '#c6ffe8',
            color_avatar: '#5cc9a7'
        },
        {
            id: 3,
            icon: <PeopleOutline fontSize="inherit" color="inherit" />,
            title: 'User Journey Flow',
            content: '<p>Quickly productize prospective value before collaborative benefits.</p>',
            bg_avatar: '#f3c6cb',
            color_avatar: '#f25767'
        },
        {
            id: 4,
            icon: <Repeat fontSize="inherit" color="inherit" />,
            title: 'Compare A/B Testing',
            content: '<p>Credibly disintermediate functional processes for team driven action.</p>',
            bg_avatar: '#dddede',
            color_avatar: '#797b7e'
        },
        {
            id: 5,
            icon: <Settings fontSize="inherit" color="inherit" />,
            title: 'Easy Customization',
            content: '<p>Dynamically develop ubiquitous opportunities whereas relationships.</p>',
            bg_avatar: '#f7f0ba',
            color_avatar: '#ccba38'
        },
    ];

    return (
        <Box sx={{ p: '8rem 0' }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',

                    }}
                >
                    <Box
                        sx={{
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                color: '#0E7A6D',
                                fontWeight: 600,
                                fontSize: '1.25rem',
                                fontFamily: 'PoppinsRegular',
                            }}
                            variant="h4"
                        >
                            Services
                        </Typography>
                        <Typography
                            sx={{
                                mb: '0.5rem',
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
                            Best Services Grow Your Business Value
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
                            Globally actualize cost effective with resource maximizing leadership skills.
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        mt: '4rem',
                        display: 'grid',
                        width: '100%',
                        gridAutoColumns: '1fr',
                        gridColumnGap: '30px',
                        gridRowGap: '30px',
                        gridTemplateColumns: {
                            md: '1fr 1fr 1fr',
                            sm: '1fr',
                            xs: '1fr',
                        },
                        gridTemplateRows: 'auto auto',
                    }}
                >
                    {lists.map((list) => (
                        <Box
                            key={list.id}
                            sx={[
                                {
                                    p: '3.425rem 3rem',
                                    bgcolor: '#fff',
                                    boxShadow: '0 0.125rem 0.3rem -0.0625rem rgb(12 8 0 / 28%), 0 0.275rem 0.75rem -0.0625rem rgb(12 8 0 / 6%)',
                                    borderRadius: '1rem',
                                },
                                list.id === 1 && {
                                    display: 'block',
                                    gridColumnEnd: 2,
                                    gridColumnStart: 1,
                                    gridRowEnd: 3,
                                    gridRowStart: 1,
                                },
                            ]}
                        >
                            <Avatar
                                sx={{
                                    background: list.bg_avatar,
                                    position: 'relative',
                                    mb: '1.8rem',
                                    height: '55px',
                                    width: '55px',
                                }}
                            >
                                <Box
                                    sx={{
                                        color: list.color_avatar,
                                        position: 'absolute',
                                        top: '7.5px',
                                        fontSize: '40px',
                                    }}
                                >
                                    {list.icon}
                                </Box>
                            </Avatar>
                            <Typography
                                sx={{
                                    mb: '0.5rem',
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
                                }}
                                variant="p"
                            >
                                {parse(list.content)}
                            </Typography>
                            {list.id === 1 && (
                                <Box sx={{ mb: '0.5rem' }}>
                                    <Typography
                                        sx={{
                                            mb: '0.5rem',
                                            fontWeight: 600,
                                            fontSize: '1.0625rem',
                                            fontFamily: 'PoppinsRegular',
                                        }}  
                                        variant="h6"
                                    >
                                        Included with...
                                    </Typography>
                                    {list.includes.map((include) => (
                                        <ListItem 
                                            sx={{
                                                pt: 0,
                                                pb: 1,
                                                pl: 0,
                                                pr: 0,
                                            }}
                                            key={include.id}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    color: '#0e7a6d',
                                                    fontSize: '20px',
                                                    minWidth: '30px',
                                                }}
                                            >
                                                <CheckCircle color="inherit" fontSize="inherit" />
                                            </ListItemIcon>
                                            <ListItemText
                                                sx={{
                                                    color: '#575757',
                                                    fontFamily: 'OpenSans',
                                                    fontSize: '1rem',
                                                    fontWeight: 400,
                                                }}
                                                primary={include.content}
                                            />
                                        </ListItem>
                                    ))}
                                </Box>
                            )}
                            <Button
                                id={`services-list-button-${list.id}`}
                                sx={{
                                    p: 0,
                                    transition: 'all 0.3s',
                                    textTransform: 'none',
                                    fontSize: '15px',
                                    '&:hover': {
                                        color: '#0e7a6d',
                                        bgcolor: 'transparent',
                                    },
                                    '&:hover .css-zo1bgc-MuiSvgIcon-root': {
                                        ml: '8px',
                                    },
                                }}
                                disableRipple
                            >
                                View Details
                                <ArrowRightAlt
                                    color="inherit"
                                    sx={{
                                        transition: 'all 0.3s',
                                        fontSize: '24px',
                                        ml: '5px',
                                    }}
                                />
                            </Button>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    )
}

export default Services;