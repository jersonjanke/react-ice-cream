import React, { useEffect, useState, useRef } from 'react'
import Helmet from 'react-helmet'
import LoaderMessage from '../structure/LoaderMessage'
import { getMenuItem, putMenuItem } from '../data/iceCreamData'
import PropTypes from 'prop-types'
import IceCreamImage from './IceCreamImage'
import '../styles/forms-spacer.scss'

const EditIceCream = ({ match, history }) => {
    const isMounted = useRef(true)
    const [menuItem, setMenuItem] = useState({
        price: '0.00',
        inStock: true,
        quantity: '0',
        description: '',
        iceCream: {}
    })
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setIsLoading(true)
        getMenuItem(match.params.menuItemId).then(({ id, price, inStock, quantity, description, iceCream }) => {
            if (isMounted.current) {
                setMenuItem({
                    id,
                    price: price.toFixed(2),
                    inStock,
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

    const onChangeHandler = e => {
        let newMenuItemData = {
            ...menuItem,
            [e.target.name]:
                e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }

        if (e.target.name === 'quantity') {
            newMenuItemData.inStock = e.target.value !== 0
        }

        if (e.target.name === 'inStock' && !e.target.checked) {
            newMenuItemData.quantity = '0'
        }

        setMenuItem(newMenuItemData)
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        const { id, price, inStock, quantity, description, iceCream } = menuItem
        const submitItem = {
            id,
            iceCream: { id: iceCream.id },
            price: parseFloat(price),
            inStock,
            quantity: parseInt(quantity),
            description
        }
        putMenuItem(submitItem).then(() => {
            history.push('/')
        })
    }

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
            {!isLoading &&
                <div className="form-frame">
                    <div className="image-container">
                        <IceCreamImage iceCreamId={menuItem.iceCream.id} />
                    </div>
                    <div className="form-container">
                        <dl>
                            <dt>Name:</dt>
                            <dd>{menuItem.iceCream.name}</dd>
                        </dl>
                        <form onSubmit={onSubmitHandler}>
                            <label htmlFor="descripton">
                                Description:
                            </label>
                            <textarea
                                name="descripton"
                                rows="3"
                                value={menuItem.description}
                                onChange={onChangeHandler}>
                            </textarea>
                            <label htmlFor="inStock">In Stock:</label>
                            <div className="checkbox-wrapper">
                                <input
                                    type="checkbox"
                                    name="inStock"
                                    checked={menuItem.inStock}
                                    onChange={onChangeHandler}
                                />
                                <div className="checkbox-wrapper-checked"></div>
                            </div>
                            <label htmlFor="quantity">Quantity</label>
                            <select
                                name="quantity"
                                value={menuItem.quantity}
                                onChange={onChangeHandler}
                            >
                                <option value="0">0</option>
                                <option value="10">10</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                                <option value="40">40</option>
                                <option value="50">50</option>
                            </select>
                            <label htmlFor="price">Price: </label>
                            <input
                                type="number"
                                step="0.01"
                                name="price"
                                value={menuItem.price}
                                onChange={onChangeHandler}
                            />
                            <div className="button-container">
                                <button className="ok" type="submit">OK</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
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