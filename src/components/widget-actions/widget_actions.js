import "./widget-actions.css";
export default class WidgetActions {
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
        valid.textContent =
          "The credit card number you entered passed the Luhn Check and is therefore a valid credit card number!";
      } else if (!this._checkNum(text)) {
        valid.classList.add("on");
        valid.classList.add("invalid");
        valid.textContent =
          "The credit card number you entered failed the Luhn Check. It's not valid, did you make a typo?";
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
    document.querySelectorAll(".card__image").forEach((el) => {
      el.classList.remove("active");
    });
    if (this._inputNum(text)) {
      document.querySelectorAll(".card__image").forEach((el) => {
        el.classList.add("active");
        document
          .querySelector(`.${this._inputNum(text)}`)
          .classList.remove("active");
      });
    }
  }
}
