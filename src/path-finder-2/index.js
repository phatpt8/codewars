const maze = `
  .W.
  .W.
  ...
`;

const pathFinder = (maze) => {
  const parsedMaze = maze.trim().split('');
  const arrMaze = [];
  let current = { x: 0, y: 0};
  
  let idx = 0;
  parsedMaze.reduce((arr, parsed) => {
    const charCode = parsed.charCodeAt(0);
    if (charCode == 32) { return arr; } // empty space
    if (charCode == 10) { idx++; arr[idx] = []; return arr;}
    if (!Array.isArray(arr[idx])) arr[idx] = [];

    arr[idx].push(parsed);

    return arr;
  }, arrMaze);

  const moveNorth = () => {
    current.x -= 1;
    
    const isPossible = 
      !(current.x < 0 || current.y < 0)
      && !(current.x >= arrMaze.length || current.y >= arrMaze.length)
      && arrMaze[current.x][current.y].charCodeAt(0) != 87 // Wall
    if (!isPossible) {
      current.x += 1;
    }
    return isPossible;
  }

  const moveSouth = () => {
    current.x += 1;
    
    const isPossible = 
      !(current.x < 0 || current.y < 0)
      && !(current.x >= arrMaze.length || current.y >= arrMaze.length)
      && arrMaze[current.x][current.y].charCodeAt(0) != 87 // Wall
    if (!isPossible) {
      current.x -= 1;
    }
    return isPossible;
  }

  const moveEast = () => {
    current.y += 1;
    
    const isPossible = 
      !(current.x < 0 || current.y < 0)
      && !(current.x >= arrMaze.length || current.y >= arrMaze.length)
      && arrMaze[current.x][current.y].charCodeAt(0) != 87 // Wall
    if (!isPossible) {
      current.y -= 1;
    }
    return isPossible;
  }

  const moveWest = () => {
    current.y -= 1;
    
    const isPossible = 
      !(current.x < 0 || current.y < 0)
      && !(current.x >= arrMaze.length || current.y >= arrMaze.length)
      && arrMaze[current.x][current.y].charCodeAt(0) != 87 // Wall
    if (!isPossible) {
      current.y += 1;
    }
    return isPossible;
  }

  let move = 0;
  while(moveSouth() || moveEast() || moveNorth() || moveWest()) {
    move++;
    if (move > Math.pow(arrMaze.length, arrMaze.length)) { break; } // fail
    
    if (current.x == arrMaze.length - 1 && current.y == arrMaze.length - 1) {
      console.log('ok');
      break;
    }
  }

  return false;
}
pathFinder(maze);