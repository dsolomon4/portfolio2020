import React from 'react';

import GoogleFontLoader from 'react-google-font-loader';

import Header from './components/Header/Header'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Banner from './components/Banner/Banner'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

import './App.css'

const App = () => (
   <div>
        <Header/>
        <Banner/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>

        <GoogleFontLoader
    fonts={[
        {
            font: 'Lora',
            weights: [400],
        },
        {
            font: 'Libre Baskerville',
            weights: [400, 700],
          },
        {
            font: 'Rock Salt',
            weights: [400, 700],
        },
    ]}
/>
   </div>

);

export default App;