/**
 * Напишите функцию getIntersection(first, second), возвращающую
 * массив из общих значений массивов first и second.
 *
 * Результирующий массив должен быть отсортирован по возрастанию.
 *
 * Пример:
 * getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4]); //  [1, 3]
 * getIntersection([1, 1, 2], [2, 1, 1, 1]); // [1, 1, 2]
 *
 * @param  {number[]} first исходные массивы
 * @param  {number[]} second исходные массивы
 * @return {number[]} массив значений, отсортированный по возрастанию
 */

function mysort(x, y) {
  return x - y;
}

export function getIntersection(first, second) {
  const myMap = {};
  const array = [];

  for (let i = 0; i !== first.length; ++i) {
    typeof myMap[first[i]] === 'undefined' ? myMap[first[i]] = 1 : ++myMap[first[i]];
  }
  for (let i = 0; i !== second.length; ++i) {
    if (!((typeof myMap[second[i]] === 'undefined') || myMap[second[i]] === 0)) {
      array.push(second[i]);
      --myMap[second[i]];
    }
  }
  array.sort(mysort);
  return array;
}
