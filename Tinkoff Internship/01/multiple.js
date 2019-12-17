/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * Больше примеров в тестах.
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */
export function multiple(a, b) {
  let answer = a;
  let number = b;
  let flag = false;

  if (answer === 0 || number === 0) {
    return 0;
  }
  if (number < 0) {
    flag = true;
    number = -number;
  }
  for (let i = 1; i !== number; ++i) {
    answer += a;
  }
  if (flag) {
    return (-answer);
  }
  return answer;
}
