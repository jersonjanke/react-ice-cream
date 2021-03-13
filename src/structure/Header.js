import React from 'react';
import iceCreamImg from '../assets/img/ultimate-ice-cream.svg';
import FocusLink from '../structure/FocusLink';
import styled from '@emotion/styled';

const StyleHeader = styled.header`
  position: relative;
  text-align: center;
  padding-top: 3em;
`;

const HeaderH1 = styled.h1`
  display: flex;
  justify-content: center;
  color: #313030;
  font-weight: bold;
  font-family: 'cornerstone', sans-serif;
  font-size: 2.5em;
`;

const HeaderImg = styled.img`
  margin-right: 0.5em;
`;

const Header = () => {
  return (
    <StyleHeader>
      <HeaderImg src={iceCreamImg} alt="" />
      <HeaderH1>Ultimate Ice Cream</HeaderH1>
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
    </StyleHeader>
  );
};

export default Header;
