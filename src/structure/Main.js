import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import PropType from 'prop-types';

const Main = ({ children, headingText, headingLevel = 2, location }) => {
  const heading = useRef(null);
  const H = `h${headingLevel}`;

  useEffect(() => {
    if (location.state && location.state.focus) {
      heading.current.focus();
    }
    window.scrollTo(0, 0);
  }, [location.state]);

  return (
    <main tabIndex="-1" id="main">
      <Helmet>
        <title>{headingText} | Ultimate Ice Cream</title>
      </Helmet>
      <H className="main-heading" ref={heading} tabIndex="-1">
        {headingText}
      </H>
      {children}
    </main>
  );
};

Main.prototype = {
  headingText: PropType.string.isRequired,
  headingLevel: PropType.oneOfType([PropType.string, PropType.number]),
  children: PropType.node.isRequired,
  location: PropType.shape({
    focus: PropType.bool,
  }),
};

export default withRouter(Main);
