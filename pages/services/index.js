import Head from 'next/head'
import { Fragment } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';

const index = () => {
    
  return (
    <Fragment>
        <Head>
            <title>Devon | Services</title>
            <meta name="description" content="We are Development Experts" />
            <link rel="icon" href="/logo/icon.ico" />
        </Head>
        <Header />
        <Hero />
        <Services />
        <Testimonials />
        <Footer />
    </Fragment>
  )
}

export default index