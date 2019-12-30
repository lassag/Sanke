import { Map }   from './mapObject.js';
import { Snake } from './snakeObject.js';
import { Food }  from './foodObject.js';



var canvas = document.getElementById('snake');
//var ctx = canvas.getContext('2d');

// Global variables
var score = 0;
var scorePerMove = 0;
const ROWS = 30;
const COLUMNS = 30;
const FPS = 15;
var isGameOver = false;
const SECONDS = 1000;
const REFRESH_RATE = SECONDS / FPS;
const currentScoreBoard = document.getElementById('current-score');
const scorePerMoveBoard = document.getElementById('score-per-move');
const playerMovesBoard  = document.getElementById('player-moves');
const bestScoreBoard    = document.getElementById('best-score');
const bestScoreLocalStorage = 'bestScore';
localStorage.setItem(bestScoreLocalStorage, 0);

const KEY = {
  SPACEBAR: 32,
  ARROW_LEFT: 37,
  ARROW_UP: 38,
  ARROW_RIGHT: 39,
  ARROW_DOWN: 40,
  R: 82,
  W: 87,
  A: 65,
  S: 83,
  D: 68
}

var map = new Map(ROWS, COLUMNS, canvas);
var snake = new Snake(map);
var food = Food.GetRandomFood(map);

document.addEventListener("keydown", key => {
  snake.Direction(key.keyCode, KEY);
  //console.log(key.keyCode);
  //console.log(snake.d);
  //console.log(snake);

  // Start spillet ved trykk av SPACE
  if (key.keyCode == KEY.SPACEBAR) {
    ResetScore();
    isGameOver = false;
    GameLoop();
  }

  // Restart spillet ved trykk av R
  if (key.keyCode == KEY.R) {
    isGameOver = true;
    ResetScore();
    snake.ResetSnake(map);
    food = Food.GetRandomFood(map);
    map.DrawMap();
    map.DrawSnake(snake);
    map.DrawFood(food);
    RenderScore();
  }

  if (snake.IsMovementKey(KEY, key.keyCode)) {
    snake.IncrementMove();
  }
});

function IncrementScore() {
  score += food.value;
  scorePerMove = Math.floor(score / snake.moves);

  if (IsCurrentScoreNewBest(score, localStorage.getItem(bestScoreLocalStorage))) {
    localStorage.setItem(bestScoreLocalStorage, score);
  }
}

function IsCurrentScoreNewBest(score, best) {
  if (score > best) {
    return true;
  } else {
    return false;
  }
}

function RenderScore() {
  scorePerMoveBoard.innerText = scorePerMove;
  playerMovesBoard.innerText = snake.moves;
  currentScoreBoard.innerText = score;
  bestScoreBoard.innerText = localStorage.getItem(bestScoreLocalStorage);
}

function ResetScore() {
  score = 0;
  scorePerMove = 0;
  currentScoreBoard.innerText = score;
  scorePerMoveBoard.innerText = scorePerMove;
  playerMovesBoard.innerText  = snake.moves;
}

function StartGame() {
  GameLoop();
}

function Debug() {
  console.log(map);
  console.log(snake);
  console.log(food);
  console.log('----SCORES-----');
  console.log(`Score: ${score}`);
  console.log(`Moves: ${snake.moves}`);
  console.log(`SPM: ${scorePerMove}`);
}

map.DrawMap();
map.DrawSnake(snake);
map.DrawFood(food);

Debug();


function GameLoop() {
  map.DrawMap();
  map.DrawSnake(snake);
  map.DrawFood(food);
  RenderScore();

  snake.IncrementTail();
  snake.DirectionChange(map);

  if (snake.EatFood(food)){
    IncrementScore();
    snake.maxLength++;
    food = Food.GetRandomFood(map);
  }

  if (!snake.isOutOfBounds(map) && !snake.IsTouchingItself()) {
  setTimeout(GameLoop, REFRESH_RATE);
  }
}
