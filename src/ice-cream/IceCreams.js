import React, { useState, useEffect } from 'react';
import Main from '../structure/Main';
import LoaderMessage from '../structure/LoaderMessage';
import { getIceCreams } from '../data/iceCreamData';

const IceCreams = () => {
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
        </Main>
    )
}

export default IceCreams

