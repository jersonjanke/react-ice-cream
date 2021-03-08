import React, { useState, useEffect } from 'react'
import { getMenu } from '../data/iceCreamData'
import Helmet from 'react-helmet'

const Menu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        getMenu().then(menuData => {
            let isMounted = true
            if (isMounted) {
                setMenu(menuData)
            }
            return isMounted = false
        })
    }, [])

    return (
        <main>
            <Helmet>
                <title>Rock your taste buds with of these! | Ultimate Ice Cream</title>
            </Helmet>
            <h2 className="main-heading">Rock your taste with one of these!</h2>
            {menu.length > 0 ?
                <ul className="container">
                    {menu.map(({ id, iceCream, price, description, inStock, quantity }) =>
                        <li key={id}>
                            <section className="card">
                                <div className="image-container" />
                                <div className="text-container">
                                    <h3>{iceCream.name}</h3>
                                    <div className="content card-content">
                                        <p className="price">{`$${price.toFixed(2)}`}</p>
                                        <p className={`stock${inStock ? '' : 'out'}`}>
                                            {inStock ? `${quantity} in stock` : `Currently out of stock`}
                                        </p>
                                        <p className="description">{description}</p>
                                    </div>
                                </div>
                            </section>
                        </li>)}
                </ul> : <p>Your menu is empty! The sadness!</p>
            }
        </main>
    )
}

export default Menu