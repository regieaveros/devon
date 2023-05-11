import parse from 'html-react-parser';
import {
    Box,
    Container,
    Grid,
    Button,
    Typography,
} from '@mui/material';
import { Chat, Email, PhoneCallback } from '@mui/icons-material';

const Contact = () => {

    const contacts = [
        {
            id: 1,
            icon: <Chat fontSize="inherit" color="inherit" />,
            title: 'Chat with us',
            content: 'We have got live Social Experts waiting to help you <strong>monday to friday</strong> from <strong>9am to 5pm EST.</strong>',
            btnName: 'Chat with us',
            href: 'mailto:devon@digitalmarketing.com',
        },
        {
            id: 2,
            icon: <Email fontSize="inherit" color="inherit" />,
            title: 'Email Us',
            content: 'Simple drop us an email at <strong>devon@digitalmarketing.com</strong> and you will receive a reply within 24 hours',
            btnName: 'Email Us',
            href: 'mailto:devon@digitalmarketing.com',
        },
        {
            id: 3,
            icon: <PhoneCallback fontSize="inherit" color="inherit" />,
            title: 'Give us a call',
            content: 'Give us a ring.Our Experts are standing by <strong>monday to friday</strong> from <strong>9am to 5pm EST.</strong>',
            btnName: '00-976-561-008',
            href: 'tel:00-976-561-008',
        },
    ];

    return (
        <Box sx={{ p: '8rem 0', }}>
            <Container maxWidth="lg">
                <Grid
                    direction="row"
                    justifyContent="center"
                    spacing={3} 
                    container
                >
                    {contacts.map((contact) => (
                        <Grid key={contact.id} item xs={12} sm={6} md={4}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'column',
                                    bgcolor: '#fff',
                                    p: '3rem',
                                    borderRadius: '1rem',
                                    boxShadow: '0 5px 20px 0 rgb(121 121 131 / 16%)',
                                    textAlign: 'center',
                                    height: '100%',
                                }}
                            >
                                <Box
                                    sx={{
                                        color: '#0E7A6D',
                                        fontSize: '3em',
                                        mb: '15px',
                                    }}
                                >
                                    {contact.icon}
                                </Box>
                                <Box sx={{ mb: '2.5rem' }}>
                                    <Typography
                                        sx={{
                                            mb: '0.375rem',
                                            fontWeight: 600,
                                            fontSize: '1.25rem',
                                            fontFamily: 'PoppinsRegular',
                                        }}
                                        variant="h5"
                                    >
                                        {contact.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            mb: '1rem',
                                            color: '#575757',
                                            fontFamily: 'OpenSans',
                                            fontSize: '1rem',
                                            fontWeight: 400,
                                            lineHeight: 1.75,
                                        }}
                                        variant="p"
                                    >
                                        {parse(contact.content)}
                                    </Typography>
                                </Box>
                                <Button
                                    sx={[
                                        {
                                            transition: 'all 0.3s',
                                            p: '0.65rem 1.75rem',
                                            fontSize: '1rem',
                                            fontWeight: 500,
                                            fontFamily: 'PoppinsRegular',
                                            mt: 'auto',
                                            '&:hover': {
                                                bgcolor: 'transparent',
                                            },
                                        },
                                        contact.id === 1 && {
                                            color: '#0E7A6D',
                                            '&:hover': {
                                                color: '#1a9183',
                                            },
                                        },
                                        contact.id === 3 && {
                                            color: '#0E7A6D',
                                            '&:hover': {
                                                color: '#1a9183',
                                            },
                                        },
                                        contact.id === 2 && {
                                            color: '#fff',
                                            bgcolor: '#0E7A6D',
                                            borderRadius: '0.375rem',
                                            '&:hover': {
                                                bgcolor: '#1a9183',
                                            },
                                        },
                                    ]}
                                    href={contact.href}
                                    disableRipple
                                >
                                    {contact.btnName}
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    )
}

export default Contact;