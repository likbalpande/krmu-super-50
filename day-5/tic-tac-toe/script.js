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

let isClickAllowed = true;

const handleClick = (e) => {
    const move = e.target.id.split(",");
    const x = Number(move[0]);
    const y = Number(move[1]);

    if (!isClickAllowed) {
        return;
    }

    if (A[x][y] == 1 || B[x][y] == 1) {
        alert("invalid click!");
        return;
    }

    // e.target.style.backgroundColor = flag ? "red" : "blue";
    // e.target.innerHTML = flag ? "<i>X</i>" : "O";
    e.target.innerText = flag ? "X" : "O";
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
        // alert("A Won!");
        document.getElementById("win-area").style.display = "block";
        isClickAllowed = false;
    } else if (isWin(B)) {
        // alert("B Won!");
        document.getElementById("win-area").style.display = "block";
        isClickAllowed = false;
        //
    } else if (moves(A) + moves(B) == 9) {
        alert("Draw!");
    }
};

const isWin = (grid) => {
    //rows
    for (let i = 0; i < 3; i++) {
        if (grid[i][0] == grid[i][1] && grid[i][1] == grid[i][2] && grid[i][0] == 1) {
            return true;
        }
    }
    //columns
    for (let i = 0; i < 3; i++) {
        if (grid[0][i] == grid[1][i] && grid[1][i] == grid[2][i] && grid[0][i] == 1) {
            return true;
        }
    }
    //diagonal 1
    if (grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2] && grid[1][1] == 1) {
        return true;
    }
    //diagonal 2
    if (grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0] && grid[1][1] == 1) {
        return true;
    }

    return false;
};

const moves = (grid) => {
    // ...
};

console.log("--end--");
