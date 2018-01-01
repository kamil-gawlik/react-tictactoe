import * as React from "react";
import {Square} from "./Square";
import PropTypes from 'prop-types';

export class Board extends React.Component {
    renderSquare(x, y) {
        return <Square key={x+''+y}
            value={this.props.squares[x][y]}
            onClick={() => {this.props.onClick(x, y)}}
        />;
    }

    render() {
        const squares = this.props.squares;
        const res = squares.map((row, rowIdx) =>
            <div key={rowIdx} className="board-row">
                {row.map((colElem, colIdx) => {
                    return this.renderSquare(rowIdx, colIdx)
                })}
            </div>
        );
        return (
            <div>
                {res}
            </div>
        );
    }
}

Board.propTypes = {
    squares: PropTypes.arrayOf(PropTypes.array).isRequired,
    onClick: PropTypes.func.isRequired,
};
