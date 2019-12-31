export class Map {
  constructor(numRows, numCols, canvas, snakeBox) {
    this.width   = Math.floor(snakeBox.clientWidth),
    this.height  = Math.floor(snakeBox.clientWidth),
    this.numRows = Math.floor(this.height / numRows),
    this.numCols = Math.floor(this.width / numCols),
    this.backgroundColor = '#838383',
    this.canvas = canvas,
    this.ctx = canvas.getContext('2d')
  }

  GetBlockSize() {
    return Math.floor(this.height / this.numRows);
  }

  SetCanvasSize() {
    this.ctx.canvas.width  = this.width;
    this.ctx.canvas.height = this.height;
  }

  FitCanvasToContainer(){
  // Make it visually fill the positioned parent
  this.canvas.style.width ='100%';
  this.canvas.style.height='100%';
  // ...then set the internal size to match
  this.canvas.width  = this.canvas.offsetWidth;
  this.canvas.height = this.canvas.offsetHeight;
}

  DrawBlock(iRowCounter, iBlockCounter) {
    // Set the background
    this.ctx.fillStyle = this.backgroundColor;

    // Draw rectangle for the background
    this.ctx.fillRect(iRowCounter * this.GetBlockSize(), iBlockCounter * this.GetBlockSize(), this.GetBlockSize(), this.GetBlockSize());
    this.ctx.stroke();
  }

  DrawRow(iRowCounter) {
      for (let iBlockCounter = 0; iBlockCounter < this.numRows; iBlockCounter++) {
          this.DrawBlock(iRowCounter, iBlockCounter);
      }
  }

  DrawMap() {
    this.FitCanvasToContainer();
    this.SetCanvasSize();

    for (let iRowCounter = 0; iRowCounter < this.numCols; iRowCounter++) {
        this.DrawRow(iRowCounter);
    }

      // Draw outline
      this.ctx.lineWidth = 3;
      this.ctx.strokeRect(0, 0, this.numCols * this.GetBlockSize(), this.numRows * this.GetBlockSize());
  }

  DrawSnake(snake) {
    for (let i = 0; i < snake.positions.length; i++) {
      this.ctx.fillStyle = (i == 0) ? snake.colorBody : snake.colorHead;
      this.ctx.fillRect(snake.positions[i].x, snake.positions[i].y, this.GetBlockSize(), this.GetBlockSize());

      //this.ctx.fillStyle = "red";
      //this.ctx.fillRect(snake.positions[i].x, snake.positions[i].y, this.GetBlockSize(), this.GetBlockSize());
    }
  }

  DrawFood(food) {
    this.ctx.fillStyle = food.color;
    this.ctx.fillRect(food.x, food.y, this.GetBlockSize(), this.GetBlockSize());
  }
}
