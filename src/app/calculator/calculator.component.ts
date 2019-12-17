import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNumber:number;
  secondNumber:number;
  result:number;
  operator = '+';

  onFirstChange(value) {
    this.firstNumber = Number(value);
  }
  onSecondChange(value) {
    this.secondNumber = Number(value);
  }
  onOperator(value) {
    this.operator = value;
  }
  constructor() { }
  operatorClick() {
    switch (this.operator) {
      case '+':
        this.result = this.firstNumber + this.secondNumber;
        break;
      case '-':
        this.result = this.firstNumber - this.secondNumber;
        break;
      case '*':
        this.result = this.firstNumber * this.secondNumber;
        break;
      case '/':
        if (this.secondNumber === 0) {
          alert('Không chia được cho số 0');
        }
        this.result = this.firstNumber / this.secondNumber;
        break;

    }
  }
  ngOnInit() {
  }

}
