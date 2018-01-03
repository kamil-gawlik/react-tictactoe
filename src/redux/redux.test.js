import * as actions from './actions';
import settingsReducer, {startConfig} from './reducers';
import {CHANGE_SIZE} from "./actions";
import {CHANGE_WINNING_LEN} from "./actions";
import {CHANGE_STARTING_PLAYER} from "./actions";


describe('reducers', () => {
    it('should return initial state', () => {
        expect(settingsReducer(undefined, {}).settingsChange).toEqual(startConfig);
    });
    it('should handle size change', () => {
        const newSize = 9;
        const action = {
            type: CHANGE_SIZE,
            size: newSize
        };
        const expected = startConfig;
        expected.size = newSize;

        expect(settingsReducer(undefined, action).settingsChange).toEqual(expected);
    });
    it('should handle winning seq change', () => {
        const newWinningSeq = 9;
        const action = {
            type: CHANGE_WINNING_LEN,
            winningSeq: newWinningSeq
        };
        const expected = startConfig;
        expected.winningSeq = newWinningSeq;

        expect(settingsReducer(undefined, action).settingsChange).toEqual(expected);
    });
    it('should handle starting player change', () => {
        const newStartingPlayer = 'O';
        const action = {
            type: CHANGE_STARTING_PLAYER,
            startingPlayer: newStartingPlayer
        };
        const expected = startConfig;
        expected.startingPlayer = newStartingPlayer;

        expect(settingsReducer(undefined, action).settingsChange).toEqual(expected);
    });
});

describe('actions', () => {
    it('should create new size ', () => {
        const size = 3;
        const expectedResult = {
            type: actions.CHANGE_SIZE,
            size
        };

        expect(actions.changeSize(size)).toEqual(expectedResult)
    });

    it('should create new winning seq len ', () => {
        const winningSeq = 2;
        const expectedResult = {
            type: actions.CHANGE_WINNING_LEN,
            winningSeq
        };

        expect(actions.changeWinningSeqLength(winningSeq)).toEqual(expectedResult)
    });

    it('should create new size ', () => {
        const startingPlayer = 'O';
        const expectedResult = {
            type: actions.CHANGE_STARTING_PLAYER,
            startingPlayer
        };

        expect(actions.changeStartingPlayer(startingPlayer)).toEqual(expectedResult)
    })
});

