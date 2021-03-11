import React from 'react';
import iceCreamImg from '../assets/img/ultimate-ice-cream.svg';
import FocusLink from '../structure/FocusLink';

const Header = () => {
    return (
        <header>
            <img src={iceCreamImg} alt="" />
            <h1>Ultimate Ice Cream</h1>
            <nav>
                <FocusLink
                    to={{ pathname: '/', state: { focus: true } }}
                    activeClassName="active"
                    exact
                >
                    Menu
        </FocusLink>
                <FocusLink to="/ice-creams" activeClassName="active">
                    Add Ice Cream
      </FocusLink>
            </nav>
        </header>
    );
};

export default Header;
