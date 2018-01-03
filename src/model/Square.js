import * as React from "react";
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
export function Square(props) {
    return (
        <Paper className="square" onClick={props.onClick}>
            {props.value}
        </Paper>
    );
}

Square.propTypes = {
    value: PropTypes.oneOf(['X', 'O', null]),
    onClick: PropTypes.func.isRequired,
}