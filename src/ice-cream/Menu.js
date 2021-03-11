import React, { useState, useEffect } from 'react';
import { getMenu } from '../data/iceCreamData';
import IceCreamImage from './IceCreamImage';
import LoaderMessage from '../structure/LoaderMessage';
import PropTypes from 'prop-types';
import Main from '../structure/Main';
import FocusLink from '../structure/FocusLink';

const Menu = ({ history }) => {
  const [menu, setMenu] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMenu().then(menuData => {
      let isMounted = true;
      if (isMounted) {
        setMenu(menuData);
        setIsLoading(false);
      }
      return (isMounted = false);
    });
  }, []);

  const onItemClickHandler = to => {
    history.push(to, { focus: true });
  };

  const onLinkClickHandler = e => {
    //This is done to avoid the click handler of the <section>
    //firing and placing two browse entries in browser history
    e.stopPropagation();
  };

  return (
    <Main headingText="Rock your taste with one of these!">
      <LoaderMessage
        loadingMsg="Loading menu."
        doneMsg="Loading menu complete."
        isLoading={isLoading}
      />
      {menu.length > 0 ? (
        <ul className="container">
          {menu.map(
            ({ id, iceCream, price, description, inStock, quantity }) => (
              <li key={id}>
                <section
                  className="card"
                  onClick={() => {
                    onItemClickHandler(`/menu-items/${id.toString()}`);
                  }}
                >
                  <div className="image-container">
                    <IceCreamImage iceCreamId={iceCream.id} />
                  </div>
                  <div className="text-container">
                    <h3>
                      <FocusLink
                        to={`/menu-items/${id.toString()}`}
                        onClick={onLinkClickHandler}
                      >
                        {iceCream.name}
                      </FocusLink>
                    </h3>
                    <div className="content card-content">
                      <p className="price">{`$${price.toFixed(2)}`}</p>
                      <p className={`stock${inStock ? '' : 'out'}`}>
                        {inStock
                          ? `${quantity} in stock`
                          : `Currently out of stock`}
                      </p>
                      <p className="description">{description}</p>
                    </div>
                  </div>
                </section>
              </li>
            )
          )}
        </ul>
      ) : (
        !isLoading && <p>Your menu is empty! The sadness!</p>
      )}
    </Main>
  );
};

Menu.prototype = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }),
};

export default Menu;
