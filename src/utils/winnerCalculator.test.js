import {calculateWinner, combinationOfCheckStartPoints} from "./winnerCalculator";

const size = 9;
const winningSeq = 5;
let mockedSquares;

beforeEach(() => {
    mockedSquares = [...Array(size)].map(() => Array(size).fill(null))
});

describe('Should calculate properly winner', () => {
    it('should find basic winner for row', () => {
        mockedSquares[0] = Array(size).fill('x', 0, winningSeq);
        expect(calculateWinner(winningSeq, mockedSquares)).toEqual('x');
    });

    it('should not find winner for row', () => {
        mockedSquares[0][1] = 'x';
        mockedSquares[0][2] = 'x';
        mockedSquares[0][3] = 'x';
        mockedSquares[0][4] = 'x';
        expect(calculateWinner(winningSeq, mockedSquares)).toEqual(null);
    });

    it('should find basic winner for column', () => {
        mockedSquares[0][0] = 'x';
        mockedSquares[1][0] = 'x';
        mockedSquares[2][0] = 'x';
        mockedSquares[3][0] = 'x';
        mockedSquares[4][0] = 'x';
        expect(calculateWinner(winningSeq, mockedSquares)).toEqual('x');
    });

    it('should not find winner for column', () => {
        mockedSquares[0][0] = 'x';
        mockedSquares[1][0] = 'x';
        mockedSquares[2][0] = 'x';
        mockedSquares[3][0] = 'x';
        expect(calculateWinner(winningSeq, mockedSquares)).toEqual(null);
    });

    it('should find basic winner for axis left up to right down', () => {
        mockedSquares[1][1] = 'x';
        mockedSquares[2][2] = 'x';
        mockedSquares[3][3] = 'x';
        mockedSquares[4][4] = 'x';
        mockedSquares[5][5] = 'x';
        expect(calculateWinner(winningSeq, mockedSquares)).toEqual('x');
    });

    it('should find basic winner for axis right up to left down', () => {
        mockedSquares[0][4] = 'x';
        mockedSquares[1][3] = 'x';
        mockedSquares[2][2] = 'x';
        mockedSquares[3][1] = 'x';
        mockedSquares[4][0] = 'x';
        expect(calculateWinner(winningSeq, mockedSquares)).toEqual('x');
    });

    it('should not find winner for axis', () => {
        mockedSquares[0][0] = 'x';
        mockedSquares[1][1] = 'x';
        mockedSquares[2][2] = 'x';
        mockedSquares[3][3] = 'x';
        expect(calculateWinner(winningSeq, mockedSquares)).toEqual(null);
    });

});
