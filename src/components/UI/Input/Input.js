import React from 'react';
import classes from './Input.module.css'

const input = (props) => {
    let inputElemnet = null;

    switch (props.elementType) {
        case ('input'):
            inputElemnet = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('textarea'):
            inputElemnet = <textarea
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            inputElemnet = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option =>
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    )}
                </select>
            )
            break;
        default:
            inputElemnet = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElemnet}
        </div>
    );
};

export default input;