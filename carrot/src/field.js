'use strict'

export default class Field {
  constructor(carrotCount, bugCount) {
    this.carrotCount = carrotCount;    
    this.bugCount = bugCount;

    this.field = document.querySelector(".game_field");
    this.rect = this.field.getBoundingClientRect();

    this.carrots = document.querySelector(".carrots");
    this.bugs = document.querySelector(".bugs");

    this.bugImg = new Image();
    this.bugImg.src = "../img/bug.png";
    this.carrotImg = new Image();
    this.carrotImg.src = "../img/carrot.png";    

    this.bugs.addEventListener('click', (event) => {
      event.target.style.visibility = 'hidden';
      this.onBugClick();
    });

    this.carrots.addEventListener('click', (event) => {
      event.target.style.visibility = 'hidden';
      this.onCarrotClick();
    });
  }

  setBugClickListener(onClick) {
    this.onBugClick = onClick;
  }

  setCarrotClickListener(onClick) {
    this.onCarrotClick = onClick;
  }    

  init() {
    let bugs_html = '';
    let carrots_html = '';

    let x, y;
    for(let i=0; i < 10; i++) {
      x = this._random(this.rect.left, this.rect.right - this.bugImg.width,);
      y = this._random(this.rect.top, this.rect.bottom - this.bugImg.height);
      
      bugs_html += `<img data-id=${i} class="img_bug" style="position: absolute; top: ${y}px; left: ${x}px;" src="img/bug.png"></img>`
  
      x = this._random(this.rect.left, this.rect.right - this.carrotImg.width);
      y = this._random(this.rect.top, this.rect.bottom - this.carrotImg.height);    
      carrots_html += `<img data-id=${i} class="img_carrot" style="position: absolute; top: ${y}px; left: ${x}px;" src="img/carrot.png"></img>`      
    }

    this.carrots.innerHTML = carrots_html;  
    this.bugs.innerHTML = bugs_html;
  }

  _random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}