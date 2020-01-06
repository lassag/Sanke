export class Settings {
  constructor() {
    this.IsHumanPlaying = true,
    this.IsSnakeVisionVisible = false,
    this.humanToggle = document.getElementById('player-type')
  }

  Read() {
    console.log(this.REFRESH_RATE);
  }

  GetRefreshRate(FPS = 15) {
    const SECONDS = 1000;
    return (SECONDS / FPS);
  }

  SetInitialState() {
    this.IsHumanPlaying = true;
    this.IsSnakeVisionVisible = false;
    this.humanToggle.checked = true;
  }
}
