import React from 'react'
import PropTypes from 'prop-types'

import classes from './BurgerIngredient.module.css'

const BurgerIngredient = ({type}) => {
  if (type === 'BreadTop') {
    return (
      <div className={classes[type]}>
        <div className={classes.Seeds1} />
        <div className={classes.Seeds2} />
      </div>
    )
  }
  return <div className={classes[type]} />
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient
