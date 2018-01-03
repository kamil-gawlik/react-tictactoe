import * as React from "react";
import {calculateWinner} from "../utils/winnerCalculator";
import {Board} from "./Board";
import {List, ListItem} from 'material-ui/List';
import {Card, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import EditorModuleEdit from 'material-ui/svg-icons/editor/mode-edit'
import {toggleDrawer} from "../redux/actions";
import {connect} from "react-redux";

class GameBase extends React.Component {
    constructor(props) {
        super(props);
        const size = this.props.size;
        this.state = {
            size: this.props.size,
            winningSeq: this.props.winningSeq,
            history: [{
                squares: [...Array(size)].map(() => Array(size).fill(null)),
            }],
            stepNumber: 0,
            xIsNext: true
        }

    }


    handleClick(x, y) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = JSON.parse(JSON.stringify(current.squares)); // deep copy of multidimensional array

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
                <ListItem key={move}
                          onClick={() => this.jumpTo(move)}
                          primaryText={desc}
                />
            )
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Card>
                        <CardHeader title={status}
                                    subtitle={'Winning seq: ' + this.props.winningSeq}
                        >

                            <EditorModuleEdit style={{float: 'right'}}
                                              onClick={this.props.onToggleClick}/>
                        </CardHeader>
                        <CardText>
                            <Board
                                squares={current.squares}
                                onClick={(x, y) => this.handleClick(x, y)}
                            />
                        </CardText>
                        <CardActions>
                            <FlatButton
                                label="Last Move"
                                onClick={() => this.jumpTo(this.state.stepNumber - 1)}
                            />
                            <FlatButton
                                label="Reset"
                                onClick={() => this.jumpTo(0)}
                            />
                        </CardActions>
                    </Card>
                </div>
                <div className="game-info">
                    <Card initiallyExpanded={true}>
                        <CardHeader title='History' showExpandableButton={true} actAsExpander={true}/>
                        <CardText expandable={true}>
                            <List>{moves}</List>
                        </CardText>
                    </Card>
                </div>

            </div>

        );
    }


    jumpTo(step) {
        if (this.state.stepNumber > 0) {
            this.setState({
                stepNumber: step,
                xIsNext: (step % 2) === 0,
            })
        }
    }

    componentWillReceiveProps(nextProps) {
        const size = nextProps.size;
        this.setState({
            size: size,
            winningSeq: nextProps.winningSeq,
            history: [{
                squares: [...Array(size)].map(() => Array(size).fill(null)),
            }],
            stepNumber: 0,
            xIsNext: nextProps.xIsNext
        })
    }
}

const mapStateToProps = state => {
    const res = {
        size: state.settingsChange.size,
        winningSeq: state.settingsChange.winningSeq,
        xIsNext: state.settingsChange.startingPlayer === 'X'
    }
    return res;

};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleClick: () => {
            dispatch(toggleDrawer())
        }
    }
};

const Game = connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBase);


export default Game;

