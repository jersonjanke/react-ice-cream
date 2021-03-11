import React, { useState, useEffect } from 'react';
import Main from '../structure/Main';
import LoaderMessage from '../structure/LoaderMessage';
import { getIceCreams } from '../data/iceCreamData';
import IceCreamCardContainer from './IceCreamCardContainer';
import IceCreamCard from './IceCreamCard';
import PropTypes from 'prop-types';

const IceCreams = ({ history }) => {
    const [iceCreams, setIceCreams] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        let isMounted = true;
        getIceCreams().then(iceCreams => {
            setIceCreams(iceCreams)
            setIsLoading(false)
        });
        return () => {
            isMounted = false;
        }
    }, []);

    return (
        <Main headingText="Chose your poison and enjoy!">
            <LoaderMessage
                loadingMsg="Loading the stock list"
                doneMsg="Loading stock list complete"
                isLoading={isLoading} />
            {iceCreams.length > 0 ? <IceCreamCardContainer>
                {iceCreams.map(({ id, name }) => (
                    <IceCreamCard
                        key={id.toString()}
                        iceCreamId={id}
                        heading={name}
                        to="/"
                        history={history}
                    />
                ))}
            </IceCreamCardContainer> :
                !isLoading && (
                    <p className="fully-stocked">Your menu is fully stocked!</p>
                )}
        </Main>
    )
}

IceCreams.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
};

export default IceCreams

