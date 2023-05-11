import { Fragment } from 'react';
import Head from 'next/head';
import Hero from './Hero';
import Features from './Features';
import Analytics from './Analytics';
import Testimonials from './Testimonials';
import Process from './Process';
import Pricing from './Pricing';
import Faq from './Faq';
import Integration from './Integration';

const index = () => {
  
  return (
    <Fragment>
        <Head>
            <title>Devon | Home</title>
            <meta name="description" content="Get Fully Control and Visibility your Company" />
            <link rel="icon" href="/logo/icon.ico" />
        </Head>
        <Hero />
        <Features />
        <Analytics />
        <Testimonials />
        <Process />
        <Pricing />
        <Faq />
        <Integration />
    </Fragment>
  )
}

export default index