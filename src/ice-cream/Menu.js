import React, { useState, useEffect } from 'react'
import { getMenu } from '../data/iceCreamData'

const Menu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        getMenu().then(menuData => {
            console.log(menuData)
            setMenu(menuData)
        })
    }, [])

    return (
        <main>
            <h2 className="main-heading">Rock your taste with one of these!</h2>
        </main>
    )
}

export default Menu