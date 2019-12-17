/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */
export function rle(input) {
  let letter = input[0];
  let counter = 0;
  let str = '';


  for (let i = 0; i !== input.length; ++i) {
    if (input[i] !== letter) {
      str += input[i - 1];
      if (counter > 1) {
        str += counter.toString();
      }
      counter = 1;
      letter = input[i];
    } else {
      ++counter;
    }
  }
  str += input[input.length - 1];
  if (counter > 1) {
    str += counter.toString();
  }
  return str;
}


//test
console.log(rle('BCCDDDEEEE'));