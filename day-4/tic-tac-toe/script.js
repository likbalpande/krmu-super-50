let flag = true;

let A = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

let B = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
];

const handleClick = (e) => {
    const move = e.target.id.split(",");
    const x = Number(move[0]);
    const y = Number(move[1]);

    if (A[x][y] == 1 || B[x][y] == 1) {
        alert("invalid click!");
        return;
    }

    e.target.style.backgroundColor = flag ? "red" : "blue";
    // let [x, y] = e.target.id.split(",");
    if (flag) {
        A[x][y] = 1;
    } else {
        B[x][y] = 1;
    }
    console.log(e.target.id);
    console.log("----------------");
    console.log("A", A);
    console.log("B", B);
    console.log("----------------");

    flag = !flag;

    if (isWin(A)) {
        alert("A Won!");
    } else if (isWin(B)) {
        alert("B Won!");
    } else if (moves(A) + moves(B) == 9) {
        alert("Draw!");
    }
};

const isWin = (grid) => {
    // ...
};

const moves = (grid) => {
    // ...
};
