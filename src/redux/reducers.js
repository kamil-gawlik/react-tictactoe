import {TOGGLE_DRAWER} from "./actions";
import {combineReducers} from "redux";

export const startConfig = {
    size: 5,
    winningSeq: 5,
    startingPlayer: 'X'
};

const settingsChange = (state = startConfig, action) => {

    switch (action.type) {
        case 'CHANGE_SIZE':
            return Object.assign({}, state, {size: action.size});
        case 'CHANGE_WINNING_LEN':
            return Object.assign({}, state, {winningSeq: action.winningSeq});
        case 'CHANGE_STARTING_PLAYER':
            return Object.assign({}, state, {startingPlayer: action.startingPlayer});
        default:
            return state;
    }
};

const drawerVisibility = (state = false, action) => {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return !state;
        default:
            return state;
    }
};

const combinedReducers = combineReducers({settingsChange, drawerVisibility});

export default combinedReducers