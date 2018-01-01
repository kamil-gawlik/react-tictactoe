import * as React from "react";
import PropTypes from 'prop-types';

export function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

Square.propTypes = {
    value: PropTypes.oneOf(['X', 'O', null]),
    onClick: PropTypes.func.isRequired,
}