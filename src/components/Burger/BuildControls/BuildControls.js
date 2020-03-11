import React from 'react'

import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
]

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
      {controls.map(ctrl => (
        <BuildControl 
          label={ctrl.label} 
          key={ctrl.label} 
          add={() => props.addIngredient(ctrl.label)}  
          remove={() => props.removeIngredient(ctrl.label)}
          disabledInfo={props.ingredients[ctrl.label] <= 0}
        />
      ))}
      <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}  
      >ORDER NOW</button>
    </div>
  )
}

export default BuildControls
