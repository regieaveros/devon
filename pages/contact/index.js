import Head from 'next/head'
import { Fragment } from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Hero from './Hero';
import Contact from './Contact';
import Form from './Form';

const index = () => {
    
  return (
    <Fragment>
        <Head>
            <title>Devon | Contact</title>
            <meta name="description" content="Contact Us" />
            <link rel="icon" href="/logo/icon.ico" />
        </Head>
        <Header />
        <Hero />
        <Contact />
        <Form />
        <Footer />
    </Fragment>
  )
}

export default index