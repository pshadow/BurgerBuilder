import React from 'react';
import classes from './Input.module.css'

const input = (props) => {
    let inputElemnet = null;

    switch (props.inputtype) {
        case ('input'):
            inputElemnet = <input className={classes.InputElement} {...props} />
            break;
        case ('textarea'):
            inputElemnet = <textarea className={classes.InputElement} {...props} />
            break;
        default:
            inputElemnet = <input className={classes.InputElement} {...props} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElemnet}
        </div>
    );
};

export default input;