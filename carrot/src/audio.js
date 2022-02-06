"use strict"

const gameSound = new Audio('../sound/bg.mp3');
gameSound.loop = true;
const alertSound = new Audio('../sound/alert.wav');
const bugSound = new Audio('../sound/bug_pull.mp3');
const carrotSound = new Audio('../sound/carrot_pull.mp3');
const winSound = new Audio('../sound/game_win.mp3');

export function startGame() {
  gameSound.play();
}

export function stopGame() {
  gameSound.pause();
}

export function playCarrot() {
  carrotSound.play();
}

export function playBug() {
  bugSound.play();
}

export function playWin() {
  winSound.play();
}

export function playAlert() {
  alertSound.play();
}