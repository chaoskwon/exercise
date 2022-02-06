'use strict'

import Popup from './popup.js';
import Field from './field.js';
import DashBoard from './dashboard.js';
import * as sound from "./audio.js";

const lives = 10;
const seconds = 10;

const winMessaage = "You Win!!!";
const lostMessage = "You Lost!!!";

const gameFinishBanner = new Popup();
const gameField = new Field(lives, lives);
const gameDashBoard = new DashBoard(lives, seconds);

const game_start = document.querySelector(".game_start");
const game_stop = document.querySelector(".game_stop");

gameDashBoard.setShowLostMessage(() => {
  if (gameDashBoard.on) {
    gameFinishBanner.showWithText(lostMessage);
    sound.stopGame();
    sound.playAlert();
  }
});

gameDashBoard.setShowWinMessage(() => {
  if (gameDashBoard.on) {
    gameFinishBanner.showWithText(winMessaage);
    sound.stopGame();
    sound.playWin();
  }
});

gameField.setBugClickListener(() => {
  if (gameDashBoard.on) {
    stopGame();
    gameFinishBanner.showWithText(lostMessage);
    sound.playBug();
  }
});
gameField.setCarrotClickListener(() => {
  if (gameDashBoard.on) {
    gameDashBoard.score();
    sound.playCarrot();
  }
});

gameFinishBanner.setClickReloadListener(() => {
  startGame();
});

game_start.addEventListener('click', () => {
  startGame();
});

game_stop.addEventListener('click', () => {
  stopGame()
});

function startGame() {
  gameDashBoard.start();
  gameField.init();
  game_stop.style.display = 'block';
  game_start.style.display = 'none';  
  sound.startGame();
}

function stopGame() {
  gameDashBoard.stop(false);
  game_start.style.display = 'block';
  game_stop.style.display = 'none';
  sound.stopGame();
  sound.playAlert();
}