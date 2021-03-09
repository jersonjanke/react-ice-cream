import React, { useEffect, useState, useRef } from 'react'
import Helmet from 'react-helmet'
import LoaderMessage from '../structure/LoaderMessage'
import { getMenuItem } from '../data/iceCreamData'
import PropTypes from 'prop-types'

const EditIceCream = ({ match, history }) => {
    const isMounted = useRef(true)
    const [menuItem, setMenuItem] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setIsLoading(true)
        getMenuItem(match.params.menuItemId).then(({ id, price, inSotck, quantity, description, iceCream }) => {
            if (isMounted.current) {
                setMenuItem({
                    id,
                    price: price.toFixed(2),
                    inSotck,
                    quantity: quantity.toString(),
                    description,
                    iceCream
                })
                setIsLoading(false)
            }
        })
            .catch(err => {
                if (err.response.status === 404 && isMounted.current) {
                    history.replace('/')
                }
            })
    }, [match.params.menuItemId])

    return (
        <main>
            <Helmet>
                <title>Update this beauty | Ultimete Ice Cream</title>
            </Helmet>
            <h2>Update this beauty</h2>
            <LoaderMessage
                loadingMsg="Loading ice cream"
                doneMsg="Ice cream loaded."
                isLoading={isLoading}
            />
        </main>
    )
}

EditIceCream.prototype = {
    match: PropTypes.shape({
        params: PropTypes.object.isRequired
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
    })
}

export default EditIceCream