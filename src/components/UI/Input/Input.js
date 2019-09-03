import React from 'react';
import classes from './Input.module.css'

const input = (props) => {
    let inputElemnet = null;

    switch (props.inputtype) {
        case ('input'):
            inputElemnet = <input
                className={classes.InputElement}
                {...props.inputConfig}
                value={props.value} />
            break;
        case ('textarea'):
            inputElemnet = <textarea
                className={classes.InputElement}
                {...props.inputConfig}
                value={props.value} />
            break;
        default:
            inputElemnet = <input
                className={classes.InputElement}
                {...props.inputConfig}
                value={props.value} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElemnet}
        </div>
    );
};

export default input;