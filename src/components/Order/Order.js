import React from 'react';
import classes from './Order.module.css'

const order = (props) => {
    let ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            qty: props.ingredients[ingredientName]
        });
    }
    const ingredientsOutput = ingredients.map(ig =>
        <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.name}>{ig.name} ({ig.qty})</span>);
    return (
        <div className={classes.Order} key={props.id}>
            <p>Ingredients: {ingredientsOutput} </p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
};

export default order;