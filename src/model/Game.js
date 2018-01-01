import * as React from "react";
import {calculateWinner} from "../utils/winnerCalculator";
import {Board} from "./Board";
import PropTypes from 'prop-types';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        const size = this.props.size;
        this.state = {
            history: [{
                squares: [...Array(size)].map(()=>Array(size).fill(null)),
            }],
            xIsNext: true,
            stepNumber: 0,
        }
    }

    handleClick(x,y) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[x][y]) {
            return;
        }
        squares[x][y] = this.state.xIsNext ? 'X' : 'O';

        this.setState({
            history: history.concat([{squares: squares}]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const status = winner ? 'Winner ' + winner : 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');

        const moves = history.map((step, move) => {
            const desc = move ? 'Go to move #' + move : 'Go to game start';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            )
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(x,y) => this.handleClick(x,y)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        })
    }
}

Game.propTypes = {
    size: PropTypes.number.isRequired,
}

