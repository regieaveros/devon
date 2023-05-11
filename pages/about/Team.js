import Image from 'next/image';
import {
    Box,
    Grid,
    IconButton,
    Container,
    Typography,
} from '@mui/material';
import { LinkedIn, Twitter, GitHub, Facebook  } from '@mui/icons-material';
import Team1 from './../../public/about/team-1.jpg';
import Team2 from './../../public/about/team-2.jpg';
import Team3 from './../../public/about/team-3.jpg';
import Team4 from './../../public/about/team-4.jpg';
import Team5 from './../../public/about/team-5.jpg';
import Team6 from './../../public/about/team-6.jpg';
import Team7 from './../../public/about/team-7.jpg';
import Team8 from './../../public/about/team-8.jpg';


const Team = () => {

    const teams = [
        {
            id: 1,
            name: 'John Sullivan',
            position: 'Data Analyst',
            image: Team1,
        },
        {
            id: 2,
            name: 'Stacy Smith',
            position: 'Lead QA Tester',
            image: Team2,
        },
        {
            id: 3,
            name: 'Robert Hudson',
            position: 'Project Manager',
            image: Team3,
        },
        {
            id: 4,
            name: 'Alex Ford',
            position: 'Senior Developer',
            image: Team4,
        },
        {
            id: 5,
            name: 'Kelly Turner',
            position: 'CEO',
            image: Team5,
        },
        {
            id: 6,
            name: 'Franklin Miller',
            position: 'Graphic Designer',
            image: Team6,
        },
        {
            id: 7,
            name: 'Hakeem Brooklyn',
            position: 'Programmer',
            image: Team7,
        },
        {
            id: 8,
            name: 'Ashley Cortney',
            position: 'Multimedia Animation',
            image: Team8,
        },
    ];

    const teamImage = {
        width: '100%',
        height: 'auto',
    };

    return (
        <Box  sx={{ p: '8rem 0' }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                lg: '45%',
                                md: '60%',
                                sm: '80%',
                                xs: '100%',
                            },
                            textAlign: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '1.0625rem',
                                fontFamily: 'PoppinsRegular',
                                color: '#0E7A6D',
                                mb: '0.375rem',
                            }}
                            variant="h5"
                        >
                            Our Team
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: {
                                    lg: '2.5rem',
                                    md: 'calc(1.325rem + .9vw)',
                                    sm: 'calc(1.325rem + .9vw)',
                                    xs: 'calc(1.325rem + .9vw)',
                                },
                                fontWeight: 700,
                                fontFamily: 'PoppinsBold',
                                mb: '0.625rem',
                            }}
                            variant="h2"
                        >   
                            The People Behind DevOn
                        </Typography>
                        <Typography
                            sx={{
                                color: '#575757',
                                mb: '1rem',
                                fontFamily: 'OpenSans',
                                fontSize: '1rem',
                                fonteight: 400,
                            }}
                            variant="p"
                        >
                            Intrinsicly strategize cutting-edge before interoperable applications incubate extensive expertise through integrated intellectual capital.
                        </Typography>
                    </Box>
                </Box>
                <Grid sx={{ mt: '2rem' }} spacing={3} container>
                    {teams.map((team) => (
                        <Grid key={team.id} item xs={12} sm={6} md={3}>
                            <Box
                                sx={{
                                    overflow: 'hidden',
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    pb: '1rem',
                                    boxShadow: '0 0.125rem 0.3rem -0.0625rem rgba(12,8,0,.03), 0 0.275rem 0.75rem -0.0625rem rgba(12,8,0,.06)',
                                    borderRadius: '1rem 1rem 0 0',
                                    '& img': {
                                        transition: 'all 0.3s ease',
                                    },
                                    '&:hover img': {
                                        transform: 'scale(1.1)',
                                    },
                                    '&:hover .css-7bi5wi': {
                                        transform: 'translateX(0)',
                                    },
                                }}
                            >
                                <Box sx={{ overflow: 'hidden' }}>
                                    <Image
                                        src={team.image}
                                        alt={`Team Photo ${team.id}`}
                                        style={teamImage}
                                        priority={false}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        transform: 'translateX(250px)',
                                        transition: 'all 0.4s ease-in-out',
                                        position: 'absolute',
                                        top: 30,
                                        right: 40,
                                        display: 'flex',
                                        flexDirection: 'column',
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            transition: 'all 0.2s ease-in-out',
                                            p: '10px',
                                            height: '35px',
                                            width: '35px',
                                            fontSize: '23px',
                                            bgcolor: '#809b98de',
                                            color: '#fff',
                                            borderRadius: '5px',
                                            boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 12%)',
                                            '&:hover': {
                                                bgcolor: '#0e7a6d',
                                                color: '#fff',
                                            },
                                            mb: '0.5rem',
                                        }}
                                    >
                                        <LinkedIn fontSize="inherit" />
                                    </IconButton>
                                    <IconButton
                                        sx={{
                                            transition: 'all 0.2s ease-in-out',
                                            p: '10px',
                                            height: '35px',
                                            width: '35px',
                                            fontSize: '23px',
                                            bgcolor: '#809b98de',
                                            color: '#fff',
                                            borderRadius: '5px',
                                            boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 12%)',
                                            '&:hover': {
                                                bgcolor: '#0e7a6d',
                                                color: '#fff',
                                            },
                                            mb: '0.5rem',
                                        }}
                                    >
                                        <Twitter fontSize="inherit" />
                                    </IconButton>
                                    <IconButton
                                        sx={{
                                            transition: 'all 0.2s ease-in-out',
                                            p: '10px',
                                            height: '35px',
                                            width: '35px',
                                            fontSize: '23px',
                                            bgcolor: '#809b98de',
                                            color: '#fff',
                                            borderRadius: '5px',
                                            boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 12%)',
                                            '&:hover': {
                                                bgcolor: '#0e7a6d',
                                                color: '#fff',
                                            },
                                            mb: '0.5rem',
                                        }}
                                    >
                                        <GitHub fontSize="inherit" />
                                    </IconButton>
                                    <IconButton
                                        sx={{
                                            transition: 'all 0.2s ease-in-out',
                                            p: '10px',
                                            height: '35px',
                                            width: '35px',
                                            fontSize: '23px',
                                            bgcolor: '#809b98de',
                                            color: '#fff',
                                            borderRadius: '5px',
                                            boxShadow: '0 0.5rem 1rem rgb(0 0 0 / 12%)',
                                            '&:hover': {
                                                bgcolor: '#0e7a6d',
                                                color: '#fff',
                                            },
                                            mb: '0.5rem',
                                        }}
                                    >
                                        <Facebook fontSize="inherit" />
                                    </IconButton>
                                </Box>
                                <Box
                                    sx={{
                                        mt: '2rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            mb: '0.25rem',
                                            fontWeight: 600,
                                            fontSize: '1.0625rem',
                                            fontFamily: 'PoppinsRegular',
                                        }}
                                        variant="h5"
                                    >
                                        {team.name}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '0.8em',
                                            fontFamily: 'OpenSans',
                                            fontWeight: 400,
                                        }}
                                        variant="p"
                                    >
                                        {team.position}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Team;