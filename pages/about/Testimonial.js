import Image from 'next/image';
import {
    Box,
    Container,
    Rating,
    Typography,
} from '@mui/material';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Triangle from './../../public/about/triangle-green.png';
import Testimonial1 from './../../public/about/testimonial-1.jpg';
import Testimonial2 from './../../public/about/testimonial-2.jpg';
import Testimonial3 from './../../public/about/testimonial-3.jpg';
import Testimonial4 from './../../public/about/testimonial-4.jpg';

const Testimonial = () => {

    const testimonials = [
        {
            id: 1,
            image: Testimonial1,
            name: 'Mr.Rupan Oberoi',
            position: 'Founder and CEO at Amaara Herbs',
            title: 'The Best Template You Got to Have it!',
            content: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical.',
            rating: 5,
        },
        {
            id: 2,
            image: Testimonial2,
            name: 'Joan Dho',
            position: 'Founder and CTO',
            title: 'Best Template for SAAS Company!',
            content: 'Dynamically create innovative core competencies with effective best practices promote innovative infrastructures.',
            rating: 5,
        },
        {
            id: 3,
            image: Testimonial3,
            name: 'Ranu Mondal',
            position: 'Lead Developer',
            title: 'It is undeniably good!',
            content: 'Rapidiously supply client-centric e-markets and maintainable processes progressively engineer.',
            rating: 5,
        },
        {
            id: 4,
            image: Testimonial4,
            name: 'Mr.Rupan Oberoi',
            position: 'Founder and CEO at Amaara Herbs',
            title: 'The Best Template You Got to Have it!',
            content: 'Globally network long-term high-impact schemas vis-a-vis distinctive e-commerce cross-media than ethical',
            rating: 5,
        },
    ];

    const testimonialImage = {
        zIndex: 1,
        marginRight: '1rem',
        width: '55px',
        height: '55px',
        maxWidth: '100%',
    };

    return (
        <Box sx={{ background: '#f8f9fa', p: '8rem 0' }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: '3rem',
                    }}
                >
                    <Box sx={{ textAlign: 'center', width: { sm: '568px', xs: '100%' } }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontFamily: 'PoppinsRegular',
                                fontSize: '1.25rem',
                                color: '#0E7A6D',
                            }}
                        >
                            Testimonial
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
                                mb: '0.2rem',
                            }}
                        >
                            What They Say About Us
                        </Typography>
                        <Typography
                            sx={{
                                color: '#575757',
                                fontWeight: 400,
                                fontSize: '1rem',
                                fontFamily: 'OpenSans',
                            }}
                        >
                            Dynamically initiate market positioning total linkage with clicks-and-mortar technology compelling data for cutting-edge markets.
                        </Typography>
                    </Box>
                </Box>
                <Swiper
                    slidesPerView={2}
                    slidesPerGroup={2}
                    spaceBetween={30}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                            spaceBetween: 30,
                        },
                        425: {
                          slidesPerView: 1,
                          slidesPerGroup: 1,
                          spaceBetween: 30,
                        },
                        768: {
                          slidesPerView: 2,
                          slidesPerGroup: 2,
                          spaceBetween: 30,
                        },
                        1024: {
                          slidesPerView: 2,
                          slidesPerGroup: 2,
                          spaceBetween: 30,
                        },
                    }}
                    grabCursor={true}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {testimonials.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <Box
                                sx={{
                                    background: '#2d726f',
                                    position: 'relative',
                                    p: '3.5rem 3rem',
                                    borderRadius: '1rem',
                                    border: '1px solid #86939130',
                                    height: {
                                        lg: '320px',
                                        md: '350px',
                                        sm: '390px',
                                        xs: '100%',
                                    },
                                }}
                            >
                                <Box 
                                    sx={{
                                        position: 'absolute',
                                        top: 14,
                                        left: 15,
                                        bgcolor: '#6eddc4',
                                        height: '106px',
                                        width: '100px',
                                        maskImage: `url(${Triangle.src})`,
                                        maskSize: '10px',
                                    }}
                                ></Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-start',
                                    }}
                                >
                                    <Image
                                        src={testimonial.image}
                                        alt={`testimonial Image ${testimonial.id}`}
                                        style={testimonialImage}
                                        priority={false}
                                    />
                                    <Box>
                                        <Typography
                                            sx={{
                                                color: '#fff',
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                fontFamily: 'PoppinsRegular',
                                            }}
                                            variant="h6"
                                        >
                                            {testimonial.name}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: '#fff',
                                                fontSize: '0.8em',
                                                fontFamily: 'OpenSans',
                                                fontWeight: 'inherit',
                                            }}
                                            variant="small"
                                        >
                                            {testimonial.position}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ mt: '1.5rem' }} >
                                    <Typography
                                        sx={{ 
                                            color: '#fff',
                                            mb: '0.3rem',
                                            fontWeight: 600,
                                            fontSize: '1.0625rem',
                                            fontFamily: 'PoppinsRegular',
                                        }}
                                        variant="h6"
                                    >
                                        {testimonial.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: '#fff',
                                            fontFamily: 'OpenSans',
                                            fontSize: '1rem',
                                            fontWeight: 400,
                                        }}
                                        variant="p"
                                    >
                                        {testimonial.content}
                                    </Typography>
                                </Box>
                                <Rating
                                    sx={{ mt: '1.5rem' }}
                                    value={testimonial.rating}
                                    readOnly
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    )
}

export default Testimonial;