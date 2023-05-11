import Head from 'next/head'
import { Fragment } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Hero from './Hero';
import Story from './Story';
import Values from './Values';
import Team from './Team';
import Testimonial from './Testimonial';
import Office from './Office';

const index = () => {
    
  return (
    <Fragment>
        <Head>
            <title>Devon | About</title>
            <meta name="description" content="Grow your Business & Customer Satisfaction with Devon" />
            <link rel="icon" href="/logo/icon.ico" />
        </Head>
        <Header />
        <Hero />
        <Story />
        <Values />
        <Team />
        <Testimonial />
        <Office />
        <Footer />
    </Fragment>
  )
}

export default index