// @flow

const winningSeq = 5;


export function calculateWinner(squares) {
    return [
        check_rows,
        check_columns,
        check_axis_right_up_to_left_down,
        check_axis_left_up_to_right_down
    ].map(fun => fun(squares)).find(res => res !== null) || null;
}

function check_rows(squares) {
    const size = squares.length;
    const rows = range(squares.length);
    const columns = range(size - winningSeq + 1);
    const startingPoints = combinationOfCheckStartPoints(rows, columns);
    return findWinningPattern(squares, startingPoints, winningSeq, (x, y) => [x, y + 1]);
}

function check_columns(squares) {
    const size = squares.length;
    const columns = range(squares.length);
    const rows = range(size - winningSeq + 1);
    const startingPoints = combinationOfCheckStartPoints(rows, columns);
    return findWinningPattern(squares, startingPoints, winningSeq, (x, y) => [x + 1, y]);
}

function check_axis_left_up_to_right_down(squares) {
    const size = squares.length;
    const rows = range(winningSeq - 1);
    const columns = range(size - winningSeq + 1);
    const startingPoints = combinationOfCheckStartPoints(rows, columns);
    return findWinningPattern(squares, startingPoints, winningSeq, (x, y) => [x + 1, y + 1]);
}

function check_axis_right_up_to_left_down(squares) {
    const size = squares.length;
    const rows = range(size - winningSeq + 1);
    const columns = range(size).slice(winningSeq - 1);
    const startingPoints = combinationOfCheckStartPoints(rows, columns);
    return findWinningPattern(squares, startingPoints, winningSeq, (x, y) => [x + 1, y - 1]);
}

function findWinningPattern(squares, startingPoints, winningSeq, nextPointGenerator /*fun*/) {
    const res = startingPoints.find(point => {
            let [point_x, point_y] = point;
            const sign = squares[point_x][point_y];
            if (sign === null) {
                return false;
            }
            let x = point_x, y = point_y;

            /*winningSeq-1 'cause we got first of signs to compare*/
            for (let iter = 0; iter < winningSeq - 1; iter++) {
                [x, y] = nextPointGenerator(x, y);
                let nextSing = squares[x][y];
                if (nextSing !== sign) {
                    return false;
                }
            }
            return true;
        }
    );
    return res === undefined ? null : squares[res[0]][res[1]];
}

function combinationOfCheckStartPoints(rowIdxArr, colIdxArr) {
    return rowIdxArr.reduce((actRes, curVal) =>
            actRes.concat(
                colIdxArr.map(c =>
                    [curVal, c]
                ))
        , []); // initial value is empty array
}

function range(upperBound, lowerBound = 0) {
    return Array.from(new Array(upperBound), (x, i) => i + lowerBound)
}
