import React, { Fragment } from 'react'
import Header from './structure/Header'
import Footer from './structure/Footer'
import Menu from './ice-cream/Menu'
import './styles/ice-cream.scss'

const App = () => {
    return (
        <Fragment>
            <Header />
            <Menu />
            <Footer />
        </Fragment>
    );
};

export default App
