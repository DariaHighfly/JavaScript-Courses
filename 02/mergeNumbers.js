/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 *
 * @param number
 */
export function mergeNumbers(number) {
  let newNum = number.toString();
  let sum;

  while (newNum.length !== 1) {
    sum = 0;
    newNum.toString();
    for (const numbers of newNum) {
      sum += parseInt(numbers, 10);
    }
    newNum = sum.toString();
  }
  return parseInt(newNum, 10);
}
