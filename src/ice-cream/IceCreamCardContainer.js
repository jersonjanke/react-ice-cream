import React from 'react'
import PropTypes from 'prop-types'

const IceCreamCardContainer = ({ children }) => {
    return (
        <ul className="container">
            {React.Children.map(children, card =>
                (<li>{card}</li>
                ))}
        </ul>
    )

}

IceCreamCardContainer.prototype = {
    children: PropTypes.node.isRequired
}

export default IceCreamCardContainer