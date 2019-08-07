import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Salad', type: 'salad' }
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(control => 
            <BuildControl key={control.label} label={control.label} />
        )}
    </div>
);

export default buildControls;