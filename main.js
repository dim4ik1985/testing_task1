/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/components/card-format/card-format.js
const regs = {
  visa: /^4[0-9]{0,12}(?:[0-9]{0,3})?$/,
  american_express: /^3[47][0-9]{0,13}$/,
  diners_club: /^3(?:0[0-5]|[68][0-9])[0-9]{0,11}$/,
  master_card: /^(5[1-5][0-9]{0,14}|2(22[1-9][0-9]{0,12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
  discover: /^65[4-9][0-9]{0,13}|64[4-9][0-9]{0,13}|6011[0-9]{0,12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{0,10})$/,
  maestro: /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{0,15}$/,
  mir: /^(220[0-4])[0-9]+$/
};
class CardFormat {
  checkFormat(number) {
    for (let form in regs) {
      if (regs[form].test(number)) {
        return form;
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/components/widget-actions/widget_actions.js

class WidgetActions {
  constructor(element, inputNum, checkNum) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this._inputNum = inputNum;
    this._checkNum = checkNum;
    this._element = element;
    this.onBtnClick = this.onBtnClick.bind(this);
    this.onInput = this.onInput.bind(this);
    this._validBtn = this._element.querySelector(".form__btn");
    this._validText = this._element.querySelector(".input__text");
    this._validBtn.addEventListener("click", this.onBtnClick);
    this._validText.addEventListener("input", this.onInput);
  }
  onBtnClick(e) {
    e.preventDefault();
    const text = this._validText.value;
    if (!/^[0-9]+$/.test(text)) {
      document.querySelector(".input-wrapper").classList.add("close");
    } else if (/^[0-9]+$/.test(text)) {
      const valid = document.querySelector(".validator__message");
      valid.classList.remove("valid");
      valid.classList.remove("invalid");
      valid.classList.remove("on");
      if (this._checkNum(text)) {
        valid.classList.add("on");
        valid.classList.add("valid");
        valid.textContent = "The credit card number you entered passed the Luhn Check and is therefore a valid credit card number!";
      } else if (!this._checkNum(text)) {
        valid.classList.add("on");
        valid.classList.add("invalid");
        valid.textContent = "The credit card number you entered failed the Luhn Check. It's not valid, did you make a typo?";
      }
    }
  }
  onInput(e) {
    e.preventDefault();
    const text = this._validText.value;
    document.querySelector(".validator__message").classList.remove("on");
    document.querySelector(".input-wrapper").classList.remove("close");
    if (!/^[0-9]+$/.test(text)) {
      document.querySelector(".input-wrapper").classList.add("close");
    }
    this._inputNum(text);
    document.querySelectorAll(".card__image").forEach(el => {
      el.classList.remove("active");
    });
    if (this._inputNum(text)) {
      document.querySelectorAll(".card__image").forEach(el => {
        el.classList.add("active");
        document.querySelector(`.${this._inputNum(text)}`).classList.remove("active");
      });
    }
  }
}
;// CONCATENATED MODULE: ./src/components/valid-number/valid-number.js
class ValidNumber {
  checkCard(number) {
    const arr = (number + "").split("").reverse().map(x => parseInt(x));
    const lastDigit = arr.shift();
    let sum = arr.reduce((acc, val, i) => i % 2 !== 0 ? acc + val : acc + ((val *= 2) > 9 ? val - 9 : val), 0);
    sum += lastDigit;
    return sum % 10 === 0;
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
// TODO: write code here




const format = new CardFormat(".validator__cards-list");
const validNum = new ValidNumber(".validator__message");
const inputText = new WidgetActions(".validator__form", format.checkFormat, validNum.checkCard);
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;