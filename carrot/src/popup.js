'use strict'

export default class Popup {
  constructor() {
    this.popup__message = document.querySelector(".popup__message");
    this.popup_reload = document.querySelector(".popup__reload");
    this.popup = document.querySelector(".popup");

    this.popup_reload.addEventListener('click', () => {
      this.onReloadClick && this.onReloadClick();
      this.hide();
    })
  }

  setClickReloadListener(onClick) {
    this.onReloadClick = onClick;
  }

  showWithText(text) {
    this.popup__message.innerHTML = text;
    this.popup.classList.remove("popup_hide");
  }

  hide() {
    this.popup.classList.add("popup_hide");
  }
}