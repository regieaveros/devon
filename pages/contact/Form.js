import Image from 'next/image';
import {
    Box,
    TextField,
    Grid,
    Container,
    Button,
    Typography,
} from '@mui/material';
import Collaboration from './../../public/contact/collaboration.svg';
import ContactForm from './../../public/contact/contact-form.svg';

const Form = () => {

    const names = [
        {
            id: 1,
            name: 'First Name',
        },
        {
            id: 2,
            name: 'Last Name',
        },
        {
            id: 3,
            name: 'Phone',
        },
        {
            id: 4,
            name: 'Email',
        },
        {
            id: 5,
            name: 'Message',
        },
    ];

    const formImage = {
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
    };

    return (
        <>
            <Box 
                sx={{
                    pt: {
                        md: '5rem',
                        sm: 0,
                        xs: 0,
                    },
                    pb: '5rem',
                    background: `url(${ContactForm.src}) center bottom no-repeat`,
                }}
            >
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6}>
                            <Typography
                                id="contact-form-title"
                                sx={{
                                    mb: '0.625rem',
                                    color: '#000',
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
                                Talk to Our Sales & Marketing Department Team
                            </Typography>
                            <Typography
                                id="contact-form-description"
                                sx={{
                                    mb: '1rem',
                                    fontFamily: 'OpenSans',
                                    fontSize: '1rem',
                                    fontWeight: 400,
                                    color: '#575757',
                                    lineHeight: 1.75,
                                }}
                                variant="p"
                            >
                                Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via standardized infrastructures.
                            </Typography>
                            <Grid sx={{ mt: '0.5rem' }} spacing={3} container>
                                {names.map((name) => (
                                    <Grid
                                        key={name.id}
                                        item 
                                        xs={12}
                                        sm={name.id === 5 ? 12 : 6}
                                        md={name.id === 5 ? 12 : 6}
                                    >
                                        {name.id === 5 ? 
                                        (<>
                                            <TextField
                                                sx={{
                                                    color: 'red',
                                                    '& label.Mui-focused': {
                                                        color: '#0E7A6D',
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontWeight: 600,
                                                        color: '#686c6c',
                                                    },
                                                    '& .MuiOutlinedInput-root': {
                                                        color: '#808585cc',
                                                        '& fieldset': {
                                                            borderColor: '#808585cc',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: '#0E7A6D',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#0E7A6D',
                                                        },
                                                    },
                                                }}
                                                label={name.name}
                                                variant="outlined" 
                                                fullWidth
                                                multiline
                                                rows={8}
                                            />
                                            <Button
                                                sx={{
                                                    transition: 'all 0.3s',
                                                    mt: '2.5rem',
                                                    bgcolor: '#0E7A6D',
                                                    color: '#fff',
                                                    textTransform: 'none',
                                                    fontWeight: 500,
                                                    fontFamily: 'PoppinsRegular',
                                                    fontSize: '1rem',
                                                    p: '0.65rem 2rem',
                                                    borderRadius: '0.375rem',
                                                    '&:hover': {
                                                        bgcolor: '#088e7e',
                                                    },
                                                }}
                                                size="large"
                                            >
                                                Get in Touch
                                            </Button>
                                        </>) 
                                        : 
                                        (<>
                                            <TextField
                                                sx={{
                                                    '& label.Mui-focused': {
                                                        color: '#0E7A6D',
                                                    },
                                                    '& .MuiInputLabel-root': {
                                                        fontWeight: 600,
                                                        color: '#686c6c',
                                                    },
                                                    '& .MuiOutlinedInput-root': {
                                                        color: '#808585cc',
                                                        '& fieldset': {
                                                            borderColor: '#808585cc',
                                                        },
                                                        '&:hover fieldset': {
                                                            borderColor: '#0E7A6D',
                                                        },
                                                        '&.Mui-focused fieldset': {
                                                            borderColor: '#0E7A6D',
                                                        },
                                                    },
                                                }}
                                                label={name.name}
                                                variant="outlined" 
                                                fullWidth
                                            />
                                        </>)
                                        }
                                    </Grid>
                                ))} 
                            </Grid>
                        </Grid>
                        <Grid
                            sx={{
                                display: {
                                    md: 'flex',
                                    sm: 'none',
                                    xs: 'none',
                                },
                                justifyContent: {
                                    md: 'flex-end',
                                    sm: 'flex-start',
                                    xs: 'center',
                                },
                            }}
                            item 
                            xs={12} 
                            sm={12} 
                            md={6}
                        >
                            <Box
                                sx={{
                                    mt: {
                                        md: '10rem',
                                        sm: '3rem',
                                        xs: '3rem',
                                    },
                                    width: {
                                        md: '80%',
                                        sm: '75%',
                                        xs: '100%',
                                    },
                                }}
                            >
                                <Image
                                    src={Collaboration}
                                    style={formImage}
                                    alt="Contact Form"
                                    priority={false}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Form;