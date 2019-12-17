/**
 * Напишите функцию anagram(first, second), определяющую,
 * являются ли переданные строки first и second анаграммами.
 *
 * Пример:
 * anagram('просветитель', 'терпеливость') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} first первая строка
 * @param  {string} second вторая строка
 * @return {boolean}
 */
export function anagram(first, second) {
  const var1 = first.toLocaleLowerCase();
  const var2 = second.toLocaleLowerCase();
  const array1 = [];
  const array2 = [];

  if (var1.length !== var2.length) {
    return false;
  }
  for (let i = 0; i !== var1.length; ++i) {
    array1.push(var1[i]);
    array2.push(var2[i]);
  }
  array1.sort();
  array2.sort();
  for (let i = 0; i !== array1.length; ++i) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
