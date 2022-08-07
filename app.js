class Calculator {
  constructor(prevInput, curInput) {
    this.prevInput = prevInput;
    this.curInput = curInput;
    this.clear();
  }

  clear() {
    this.prevInputScreen = "";
    this.curInputScreen = "";
    this.operation = undefined;
  }

  back() {}

  addNumber(num) {
    if (num === "." && this.curInputScreen.includes(".")) {
      return;
    }
    this.curInputScreen = this.curInputScreen.toString() + num.toString();
  }

  selectOperation(operation) {
    if (this.curInputScreen === "") {
      return;
    }
    if (this.prevInputScreen !== "") {
      this.calculate();
    }
    this.operation = operation;
    this.prevInputScreen = this.curInputScreen;
    this.curInputScreen = "";
  }

  calculate() {}

  updateScreen() {
    this.curInput.innerText = this.curInputScreen;
    this.prevInput.innerText = this.prevInputScreen;
  }
}

const numBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalBtn = document.querySelector("[data-equals");
const acBtn = document.querySelector("[data-all-clear");
const backBtn = document.querySelector("[data-back");
const prevInput = document.querySelector("[data-prev-input");
const curInput = document.querySelector("[data-cur-input");

const calculator = new Calculator(prevInput, curInput);

numBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    calculator.addNumber(btn.innerText);
    calculator.updateScreen();
  });
});
operationBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    calculator.selectOperation(btn.innerText);
    calculator.updateScreen();
  });
});
