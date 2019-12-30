export class Snake {
  constructor(map) {
    this.positions = [{
      x: map.GetBlockSize() * 5,
      y: map.GetBlockSize() * 5
    },
    {
      x: map.GetBlockSize() * 4,
      y: map.GetBlockSize() * 5
    },
    {
      x: map.GetBlockSize() * 3,
      y: map.GetBlockSize() * 5
    }],
    this.colorBody = '#45b6fe',
    this.colorHead = '#0e2433',
    this.direction = "RIGHT",
    this.maxLength = 3,
    this.moves = 0

  }

Direction(keyCode,keys){
  if (keyCode == keys.ARROW_LEFT || keyCode == keys.A){
    if (this.direction != "RIGHT"){
      this.direction = "LEFT";
    }
  }
  else if (keyCode == keys.ARROW_UP || keyCode == keys.W){
    if (this.direction != "DOWN"){
      this.direction = "UP";
    }
  }
  else if (keyCode == keys.ARROW_RIGHT || keyCode == keys.D){
    if (this.direction != "LEFT"){
      this.direction = "RIGHT";
    }
  }
  else if (keyCode == keys.ARROW_DOWN || keyCode == keys.S){
    if (this.direction != "UP"){
      this.direction = "DOWN";
    }
  }
}

DirectionChange(map) {
  switch(this.direction){
    case "LEFT":
      this.positions[0].x -= map.GetBlockSize();
      this.positions[0].y += 0;
      break;
    case "UP":
      this.positions[0].x += 0;
      this.positions[0].y -= map.GetBlockSize();
      break;
    case "RIGHT":
      this.positions[0].x += map.GetBlockSize();
      this.positions[0].y += 0;
      break;
    case "DOWN":
      this.positions[0].x += 0;
      this.positions[0].y += map.GetBlockSize();
      break;
    default:
      this.positions[0].x += 0;
      this.positions[0].y += 0;
      break;
    }
  }

  IsOutOfBounds(map){
    if (   this.positions[0].x >= map.width
        || this.positions[0].x < 0
        || this.positions[0].y >= map.height
        || this.positions[0].y < 0
      ){
        console.log('Sanke is attempting to flee.');
        return true;
      }
  }

  EatFood(food){
    if (  this.positions[0].x == food.x
       && this.positions[0].y == food.y){
         return true;
       } else {
         return false;
       }
   }

   IncrementTail(){
     var headPosition = { x: this.positions[0].x,
                          y: this.positions[0].y };

     this.positions.unshift(headPosition);
     if (this.positions.length > this.maxLength){
       this.positions.pop()
     }
   }

   IsTouchingItself(){
     for (var i = 1; i < this.positions.length; i++){
       if (this.positions[0].x === this.positions[i].x
        && this.positions[0].y === this.positions[i].y){
          console.log('Sanke is touching itself!');
          return true;
        }
      }
     console.log('The sanke is well raised')
     return false;
   }

   ResetSnake(map) {
     this.positions = [{
       x: map.GetBlockSize() * 5,
       y: map.GetBlockSize() * 5
     }],
     this.direction = 'RIGHT',
     this.maxLength = 0,
     this.moves = 0
   }

   IncrementMove() {
     this.moves++;
   }

   IsMovementKey(keys, keyCode) {
     switch(keyCode) {
       case keys.ARROW_LEFT:
        return true;
          break;
       case keys.ARROW_UP:
        return true;
          break;
       case keys.ARROW_RIGHT:
        return true;
          break;
       case keys.ARROW_DOWN:
        return true;
          break;
       case keys.W:
        return true;
          break;
       case keys.A:
        return true;
          break;
       case keys.S:
        return true;
          break;
       case keys.D:
        return true;
          break;
       default:
        return false;
          break;
     }
   }
}
