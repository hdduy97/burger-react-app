import React, { useState, useEffect } from 'react'

import Order from '../../components/Order/Order'
import axios from '../../axios-orders'

const Orders = () => {
    const [orders,setOrders] = useState([])

    useEffect(() => {
        axios.get('/orders')
            .then(res => {
                const fetchedOrders = []
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }
                setOrders(fetchedOrders);
            })
    }, [])

    return (
        <div>
            {orders.map(order => (
                <Order 
                    key={order.id}
                    ingredients={order.ingredients}
                    price={order.price} />
            ))}
        </div>
    )
}

export default Orders
