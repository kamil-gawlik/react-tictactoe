export const CHANGE_SIZE = 'CHANGE_SIZE';
export const CHANGE_WINNING_LEN = 'CHANGE_WINNING_LEN';
export const CHANGE_STARTING_PLAYER = 'CHANGE_STARTING_PLAYER';
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER';


export const changeSize = (size) => {
    return {
        type: CHANGE_SIZE,
        size
    }
};

export const changeWinningSeqLength = (winningSeq) => {
    return {
        type: CHANGE_WINNING_LEN,
        winningSeq
    }
};

export const changeStartingPlayer = (startingPlayer) => {
    return {
        type: CHANGE_STARTING_PLAYER,
        startingPlayer
    }
};

export const toggleDrawer = () => {
    return {
        type: TOGGLE_DRAWER,
    }
};
