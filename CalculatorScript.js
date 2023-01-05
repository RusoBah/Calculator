//пользовательский ввод
const userInput = document.getElementById("userInput");
let expression = '';

// создание функции при нажатие
function press(num){
   // к вырожению прибавляется то что мы ввели
   expression += num;
   // устанавливаем значения поля ввода
   userInput.value = expression;
}

// функция "равно"
function equal(){
   userInput.value = eval(expression);
   // очещает поле ввода 
   expression = '';
}
// функция "очистки"
function erase(){
   expression = '';
   // поле ввода становиться равным прошлой переменной
   userInput.value = expression
}