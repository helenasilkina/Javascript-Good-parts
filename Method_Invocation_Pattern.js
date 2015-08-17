/*
* The Method Invocation Pattern - Шаблон вызова метода
* Методы, которые получают контекст объекта от this называются открытыми (public).
*
* Tests with:
* myObject.increment();
* console.log(myObject.value);
* myObject.increment(5);
* console.log(myObject.value);
*/

var myObject = {
  value: 0,
  increment: function (number) {
    this.value += typeof number === 'number' ? number : 1;
  }
};
