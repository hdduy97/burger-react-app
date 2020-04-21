import React, { useState } from 'react'

import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
  Salad: 0.5,
  Cheese: 0.4,
  Meat: 1.3,
  Bacon: 1.7
}

const BurgerBuilder = (props) => {
  const [ingredients, setIngredients] = useState({
    Salad: 0,
    Bacon: 0,
    Cheese: 0,
    Meat: 0
  })
  const [totalPrice, setTotalPrice] = useState(4)
  const [totalIngredients, setTotalIngredients] = useState(0)
  const [purchasing, setPurchasing] = useState(false)

  const addIngredientHandler = type => {
    setIngredients(prev => {
      prev[type]++
      return prev
    })
    setTotalPrice(prev => prev + INGREDIENT_PRICES[type])
    setTotalIngredients(prev => prev + 1)
  }

  const purchaseHandler = () => setPurchasing(true)

  const purchaseCancelHandler = () => setPurchasing(false)

  const purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in ingredients) {
        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]));
    }
    queryParams.push('price=' + totalPrice);
    const queryString = queryParams.join('&');
    props.history.push({
        pathname: '/checkout',
        search: '?' + queryString
    });
  }

  const removeIngredientHandler = type => {
    setIngredients(prev => {
      prev[type]--
      return prev
    })
    setTotalPrice(prev => prev - INGREDIENT_PRICES[type])
    setTotalIngredients(prev => prev - 1)
  }
  
  return (
    <Aux>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary 
          price={totalPrice}
          ingredients={ingredients} 
          purchaseCancelled={purchaseCancelHandler}
          purchaseContinued={purchaseContinueHandler}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls 
        addIngredient={addIngredientHandler} 
        removeIngredient={removeIngredientHandler}
        ingredients={ingredients}
        price={totalPrice}
        ordered={purchaseHandler}
        purchasable={totalIngredients > 0}  
      />
    </Aux>
)}

export default BurgerBuilder