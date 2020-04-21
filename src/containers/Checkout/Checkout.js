import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'
import ContactData from './ContactData/ContactData'

const Checkout = (props) => {
    const [ingredients,setIngredients] = useState([])
    const [price,setPrice] = useState(0)

    useEffect(() => {
        const query = new URLSearchParams( props.location.search )
        const igs = {};
        let pr = 0;
        for ( let param of query.entries() ) {
            if (param[0] === 'price') {
                pr = param[1];
            } else {
                igs[param[0]] = +param[1]
            }
        }
        setPrice(pr)
        setIngredients(igs)
    }, [])

    const checkoutCancelledHandler = () => {
        props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        props.history.replace( '/checkout/contact-data' );
    }

    return (
        <div>
            <CheckoutSummary
                ingredients={ingredients}
                checkoutCancelled={checkoutCancelledHandler}
                checkoutContinued={checkoutContinuedHandler} />
            <Route 
                path={props.match.path + '/contact-data'} 
                render={(props) => (<ContactData ingredients={ingredients} price={price} {...props} />)} />
        </div>
    )
}

export default Checkout
