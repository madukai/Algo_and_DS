var res = false;

const hasPath = function(maze, start, destination) {
  let row = maze.length;
  let column = maze[0].length;

  helperMaze(maze, start[0], start[1]);
  return res;
};

const helperMaze = (m, i, j) => {
  let result = false;

  if (m[i][j] == 2) {
    res = true;
  } else if (m[i][j] == 0) {
    //visited
    m[i][j] = '#';
    //right
    if (i < m.length - 1) {
      helperMaze(m, i + 1, j);
    }
    //top
    if (j > 0) {
      helperMaze(m, i, j - 1);
    }
    //bottom
    if (j < m.length - 1) {
      helperMaze(m, i, j + 1);
    }
    //left
    if (i > 0) {
      helperMaze(m, i - 1, j);
    }
  } else {
    return false;
  }
  return res;
};

let maze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 2]
];

let start = [0, 4];
let destination = [4, 4];

console.log(hasPath(maze, start, destination));
