import Head from 'next/head'
import { Fragment } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Hero from './Hero';
import Pricing from './Pricing';
import Faq from './Faq';
import Testimonials from './Testimonials';

const index = () => {
    
  return (
    <Fragment>
        <Head>
            <title>Devon | Pricing</title>
            <meta name="description" content="Price Suit to Your Business" />
            <link rel="icon" href="/logo/icon.ico" />
        </Head>
        <Header />
        <Hero />
        <Pricing />
        <Faq />
        <Testimonials />
        <Footer />
    </Fragment>
  )
}

export default index