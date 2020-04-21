import React from 'react'

import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders'

const ContactData = (props) => {
    const orderHandler = ( event ) => {
        event.preventDefault()
        const order = {
            ingredients: props.ingredients,
            price: props.price,
            customer: {
                name: 'Duy Huynh',
                address: {
                    street: 'Street 1',
                    zipCode: '51342',
                    country: 'Vietnam'
                },
                email: 'duyhuynh@example.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders', order )
            .then( () => {
                props.history.push('/');
            } )
    }

    let form = (
        <form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
            <input className={classes.Input} type="text" name="street" placeholder="Street" />
            <input className={classes.Input} type="text" name="postal" placeholder="Postal Code" />
            <Button btnType="Success" clicked={orderHandler}>ORDER</Button>
        </form>
    )

    return (
        <div>
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        </div>
    )
}

export default ContactData
