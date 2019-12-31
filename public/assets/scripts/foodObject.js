export class Food {
  constructor(x, y) {
    this.x = x,
    this.y = y,
    this.value = 100,
    this.exponent = 1,
    this.color = '#b11226'
  }

  static GetRandomFood(map) {
    var randomX = Math.floor(Math.random() * map.numCols) * map.GetBlockSize();
    var randomY = Math.floor(Math.random() * map.numRows) * map.GetBlockSize();
    var food = new Food(randomX, randomY);
    return food;
  }

  FoodInTail(snake){
    for (var i = 1; i < snake.positions.length; i++){
      if ( snake.positions[i].x == this.x
        && snake.positions[i].y == this.y){
          return true;
        }
      }
      return false;
    }
  GetValue(){
    var val = 100;
    this.value = +val ** +this.exponent
  }

  }
