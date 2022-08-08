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

  back() {
    this.curInputScreen = this.curInputScreen.toString().slice(0, -1);
  }

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

  calculate() {
    let result;
    const prev = parseFloat(this.prevInputScreen);
    const cur = parseFloat(this.curInputScreen);
    if (isNaN(prev || isNaN(cur))) {
      return;
    }
    switch (this.operation) {
      case "+":
        result = prev + cur;
        break;
      case "x":
        result = prev * cur;
        break;
      case "÷":
        result = prev / cur;
        break;
      case "-":
        result = prev - cur;
        break;
      default:
        return;
    }
    this.curInputScreen = result;
    this.operation = undefined;
    this.prevInputScreen = "";
  }

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

acBtn.addEventListener("click", function () {
  calculator.clear();
  calculator.updateScreen();
});

equalBtn.addEventListener("click", function () {
  calculator.calculate();
  calculator.updateScreen();
});

backBtn.addEventListener("click", function () {
  calculator.back();
  calculator.updateScreen();
});
