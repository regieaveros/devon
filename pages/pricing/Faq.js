import { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const Faq = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const questions = [
        {
            id: 1,
            title: 'How does back pricing work?',
            description: 'Dramatically formulate cross-unit products with web-enabled action items. Quickly maximize extensible methods of empowerment without out-of-the-box initiatives. Proactively myocardinate functional total linkage rather than seamless information. Holisticly fabricate timely initiatives vis-a-vis high-quality imperatives. Continually deploy open-source content through professional customer service.',
        },
        {
            id: 2,
            title: 'Can you show me an example?',
            description: 'Continually innovate technically sound internal or organic sources with market positioning content. Completely drive optimal intellectual capital vis-a-vis global human capital. Intrinsicly administrate robust materials and bleeding-edge resources. Dynamically envisioneer next-generation markets vis-a-vis market-driven applications',
        },
        {
            id: 3,
            title: 'How do I processing I need?',
            description: 'Phosfluorescently deliver cooperative testing procedures after integrated communities. Dramatically simplify resource-leveling models with unique outsourcing. Professionally simplify covalent partnerships whereas market positioning best practices. Collaboratively utilize magnetic technology for robust technology.',
        },
        {
            id: 4,
            title: 'What happens if I go over my limit?',
            description: 'Credibly facilitate leveraged process improvements for equity invested infrastructures. Continually mesh top-line human capital with backward-compatible outsourcing. Rapidiously coordinate intuitive deliverables rather than parallel metrics. Interactively monetize customer directed convergence and parallel sources. Enthusiastically architect client-centric e-services whereas granular e-commerce.',
        },
        {
            id: 5,
            title: 'How do I calculate how much processing I need?',
            description: 'Distinctively enable premier potentialities through market positioning models. Distinctively extend unique infomediaries without enterprise-wide ideas. Objectively deploy multifunctional catalysts for change for installed base content. Seamlessly create go forward convergence through quality schemas. Objectively deploy cross-media leadership skills through customer directed sources.',
        },
    ];

    return (
        <Box sx={{ background: '#f8f9fa', p: '5rem 0' }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box
                        sx={{
                            textAlign: 'center',
                            width: {
                                md: '55%',
                                sm: '90%',
                                xs: '100%',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                mb: '0.3rem',
                                color: '#0E7A6D',
                                fontWeight: 600,
                                fontSize: '1.25rem',
                                fontFamily: 'PoppinsRegular',
                            }}
                            variant="h4"
                        >
                            FAQ
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
                            Frequently Asked Questions
                        </Typography>
                        <Typography
                            sx={{
                                color: '#575757',
                                mb: '1rem',
                                fontFamily: 'OpenSans',
                                fontSize: '1rem',
                                fonWeight: 400,
                                lineHeight: 1.75,
                            }}
                            variant="p"
                        >
                            Completely whiteboard top-line channels and fully tested value. Competently generate testing procedures before visionary maintainable growth strategies for maintainable.
                        </Typography>
                    </Box>
                </Box>
                <Container sx={{ pt: '1.5rem', color: '#fff' }} maxWidth="md">
                    {questions.map((question) => (
                        <Box
                            key={question.id}
                            sx={{
                                borderRadius: '1rem',
                                '& .css-12h3f4j-MuiPaper-root-MuiAccordion-root': {
                                    borderRadius: '1rem',
                                },
                                '& .Mui-expanded': {
                                    '& .MuiAccordionSummary-content h5': {
                                        color: '#0E7A6D',
                                    },
                                    '& .MuiAccordionSummary-expandIconWrapper svg': {
                                        color: '#0E7A6D',
                                    },
                                },
                            }}
                        >
                            <Accordion
                                square={true}
                                expanded={expanded === `panel${question.id}`} 
                                onChange={handleChange(`panel${question.id}`)}
                                sx={{
                                    m: '1rem 0',
                                    p: '1rem 0.5rem',
                                    '&:before': {
                                        display: 'none',
                                    },
                                    '&.MuiPaper-root': {
                                        bgcolor: 'inherit',
                                        color: 'inherit',
                                    },
                                }}
                            >
                                <AccordionSummary 
                                    expandIcon={
                                        <ExpandMore
                                            id={`pricing-faq-box-icon-${question.id}`}
                                            sx={{ fontSize: '2.3rem' }}
                                            color="inherit"
                                        />
                                    }
                                >
                                    <Typography
                                        sx={{
                                            color: '#000',
                                            width: '100%',
                                            flexShrink: 0,
                                            fontWeight: 600,
                                            fontFamily: 'PoppinsRegular',
                                            fontSize: '1.15rem',
                                        }}
                                        variant="h5"
                                    >
                                        {question.title}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
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
                                        {question.description}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>
                    ))}
                </Container>
            </Container>
        </Box>
    )
}

export default Faq;