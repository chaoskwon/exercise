'use strict'

export default class DashBoard {
  constructor(carrot_count, seconds_count) {
    this.lives = carrot_count;
    this.seconds = seconds_count; 
    this.on = false;

    this.timer_message = document.querySelector(".timer");
    this.count_message = document.querySelector(".count");

    this.count_message.innerHTML = '0';
    this.timer_message.innerHTML = `00:00`;    
  }

  setShowWinMessage(showBanner) {
    this.showWinMessage = showBanner;
  }

  setShowLostMessage(showBanner) {
    this.showLostMessage = showBanner;
  }

  start() {
    this.on = true;
    this.count = this.seconds;
    this.remains = this.lives;       

    this.timer_message.innerHTML = `0:${this.count}`;
    this.count_message.innerHTML = `${this.remains}`;    

    this.timer = setInterval(() => {this._tickTock()}, 1000);
  }

  _tickTock() {
    if (!(this.count > 0 && this.on)) {
      this.stop();
      return;
    }

    --this.count;
    this.timer_message.innerHTML = `0:${this.count}`
    if (this.count === 0) this.stop(true);
  }  

  score() {
    if (!(this.remains > 0 && this.on)) return;

    --this.remains
    this.count_message.innerHTML = `${this.remains}`

    if (this.remains ===  0) {
      this.showWinMessage && this.showWinMessage();      
      this.stop(true);      
    }
  }

  stop(withMessage) {
    clearInterval (this.timer);    
    withMessage && (this.remains ===  0 ? this.showWinMessage() : this.showLostMessage());
    this.on = false;
  }
}