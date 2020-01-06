export class Settings {
  constructor() {
    this.IsHumanPlaying = true,
    this.IsSnakeVisionVisible = false,
    this.humanToggle = document.getElementById('player-type'),
    this.snakeVisionToggle = document.getElementById('snake-vision')
  }

  Read() {
    console.log(this.REFRESH_RATE);
  }

  GetRefreshRate(FPS = 15) {
    const SECONDS = 1000;
    return (SECONDS / FPS);
  }

  SetInitialState() {
    this.IsHumanPlaying      = true;
    this.humanToggle.checked = true;

    this.IsSnakeVisionVisible      = false;
    this.snakeVisionToggle.checked = false;

  }

  ToggleHuman() {
    if (this.IsHumanPlaying) {
      this.IsHumanPlaying = false;
    } else {
      this.IsHumanPlaying = true;
    }
  }

  ToggleSnakeVision() {
    if (this.IsSnakeVisionVisible) {
      this.IsSnakeVisionVisible = false;
    } else {
      this.IsSnakeVisionVisible = true;
    }
  }
}
