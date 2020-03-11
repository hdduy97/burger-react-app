import React from 'react'

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger = ({ ingredients }) => {
  let renderIngredients = Object.keys(ingredients)
    .map(ingredient => {
      return [...Array(ingredients[ingredient])].map((_, i) => {
        return <BurgerIngredient key={ingredient + i} type={ingredient} />
      })
    }).flat()
  if (renderIngredients.length === 0) {
    renderIngredients = <p>Please start adding ingredients</p>
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="BreadTop" />
      {renderIngredients}
      <BurgerIngredient type="BreadBottom" />
    </div>
  )
}

export default Burger
