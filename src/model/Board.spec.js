import {Board} from "./Board";
import * as React from "react";
import {shallow} from 'enzyme';

const size = 9;
const mockedSquares = Array(size).fill(Array(size).fill(null));
const wrapper = shallow(<Board
        squares={mockedSquares}
        onClick={() => {
        }}
    />
);


it('should display the same number of rows and columns', () => {
    const board = wrapper;
    expect(board.find('.board-row').length).toEqual(size);
    expect(board.find('.board-row').children().length).toEqual(size*size);
});