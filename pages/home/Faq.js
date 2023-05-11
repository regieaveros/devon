import Image from 'next/image';
import {
    Box,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import QuestionImage from './../../public/home/faq.svg';

const Faq = () => {

    const lists = [
        {
            id: 1,
            title: 'How does back pricing work?',
            content: 'Progressively e-enable collaborative inexpensive supply chains. Efficiently maintain economically methods of empowerment for synergistic sound scenarios.',
        },
        {
            id: 2,
            title: 'How do I calculate how much price?',
            content: 'Globally benchmark customized mindshare before clicks-and-mortar partnerships. Efficiently maintain economically sound scenarios and whereas client-based progressively.',
        },
        {
            id: 3,
            title: 'Can you show me an example?',
            content: 'Dynamically visualize whereas competitive relationships. Progressively benchmark customized partnerships generate interdependent benefits rather sound scenarios and robust alignments.',
        },
    ];

    const faqImage = {
        width: '659px',
        height: 'auto',
        maxWidth: '100%',
    };
    
    return (
        <Box sx={{ background: '#f8f9fa', p: '7rem 0' }}>
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
                            width: '100%',
                            maxWidth: '650px',
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
                            FAQ
                        </Typography>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontFamily: 'PoppinsBold',
                                fontSize: {
                                    lg: '2.5rem',
                                    md: 'calc(1.325rem + .9vw)',
                                    sm: 'calc(1.325rem + .9vw)',
                                    xs: 'calc(1.325rem + .9vw)',
                                },
                            }}
                            component="h2"
                        >
                            Frequently Asked Questions
                        </Typography>
                        <Typography
                            sx={{
                                color: '#575757',
                                mt: '0.1rem',
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
                <Grid 
                    sx={{ pt: '4rem' }} 
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    container
                >
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            sx={{
                                width: {
                                    md: '82%',
                                    sm: '100%',
                                    xs: '100%',
                                }
                            }}
                        >
                            {lists.map((list) => (
                                <Box
                                    sx={{
                                        pb: '2.5rem',
                                    }}
                                    key={list.id}
                                >
                                    <Typography
                                        sx={{
                                            color: '#000',
                                            fontWeight: 600,
                                            fontFamily: 'PoppinsBold',
                                            fontSize: '1.25rem',
                                        }}
                                        component="h5"
                                    >
                                        <Typography
                                            sx={{
                                                mr: '0.6rem',
                                                color: '#0e7a6d',
                                                fontWeight: 700,
                                                fontFamily: 'PoppinsBold',
                                                fontSize: {
                                                    lg: '1.75rem',
                                                    md: 'calc(1.3rem + .6vw)',
                                                    sm: 'calc(1.3rem + .6vw)',
                                                    xs: 'calc(1.3rem + .6vw)',
                                                },
                                            }}
                                            component="span"
                                        >
                                        {list.id}.
                                    </Typography>
                                        {list.title}
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
                                        {list.content}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            sx={{
                                pt: {
                                    md: 0,
                                    sm: '0.5rem',
                                    xs: '0.5rem',
                                },
                                display: 'flex',
                                justifyContent: {
                                    md: 'flex-end',
                                    sm: 'center',
                                    xs: 'center',
                                },
                                width: '100%',
                                maxWidth: '700px',
                            }}
                        >
                            <Image 
                                src={QuestionImage} 
                                alt="Question Image" 
                                style={faqImage}
                                priority={false}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Faq;