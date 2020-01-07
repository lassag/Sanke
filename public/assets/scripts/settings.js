export class Settings {
  constructor() {
    this.IsHumanPlaying       = true,
    this.IsSnakeVisionVisible = false,
    this.IsFoodLineVisible    = false,
    this.humanToggle          = document.getElementById('player-type'),
    this.snakeVisionToggle    = document.getElementById('snake-vision'),
    this.foodLineToggle       = document.getElementById('food-line')
  }

  Read() {
    console.log(this.REFRESH_RATE);
  }

  GetRefreshRate(FPS = 15) {
    const SECONDS = 1000;
    return (SECONDS / FPS);
  }

  SetInitialState() {
    // Is human playing
    this.IsHumanPlaying      = true;
    this.humanToggle.checked = true;

    // Snake Vision
    this.IsSnakeVisionVisible       = false;
    this.snakeVisionToggle.disabled = true;
    this.snakeVisionToggle.checked  = false;

    // Food Line
    this.IsFoodLineVisible       = false;
    this.foodLineToggle.disabled = true;
    this.foodLineToggle.checked  = false;
  }

  ToggleHuman() {
    if (this.IsHumanPlaying) {
      this.IsHumanPlaying             = false;
      this.snakeVisionToggle.disabled = false;
      this.foodLineToggle.disabled    = false;
    } else {
      this.IsHumanPlaying = true;

      this.IsSnakeVisionVisible       = false;
      this.snakeVisionToggle.disabled = true;
      this.snakeVisionToggle.checked  = false;

      this.IsFoodLineVisible       = false;
      this.foodLineToggle.disabled = true;
      this.foodLineToggle.checked  = false;


    }
  }

  ToggleSnakeVision() {
    if (this.IsSnakeVisionVisible) {
      this.IsSnakeVisionVisible = false;
    } else {
      this.IsSnakeVisionVisible = true;
    }
  }

  ToggleFoodLine() {
    if (this.IsFoodLineVisible) {
      this.IsFoodLineVisible = false;
    } else {
      this.IsFoodLineVisible = true;
    }
  }
}
