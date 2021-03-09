import React, { Fragment } from 'react'
import './styles/ice-cream.scss'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Header from './structure/Header'
import Footer from './structure/Footer'
import Menu from './ice-cream/Menu'
import EditIceCream from './ice-cream/EditIceCream'

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={Menu} exact />
                <Route path="/menu-items/:menuItemId" component={EditIceCream} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App
