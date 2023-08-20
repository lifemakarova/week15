// Шаг 1: Создала пустой массив с именем numbers
const numbers = [];

// Шаг 2: Заполнила массив numbers целыми числами от -10 до 10 (включительно) с помощью цикла
for (let i = -10; i <= 10; i++) {
  numbers.push(i);
}

// Шаг 3: Используя циклы, выполнила следующие операции над массивом numbers
// Удалила все отрицательные числа из массива
for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] < 0) {
    numbers.splice(i, 1);
  }
}

// Возвела каждое число в квадрат
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] ** 2;
}

// Отсортировала числа в порядке убывания
numbers.sort((a, b) => b - a);

// Шаг 4: Вывела полученный массив numbers в консоль
console.log(numbers);