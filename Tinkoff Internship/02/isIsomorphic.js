/**
 * Напишите функцию isIsomorphic(left, right), определяющую,
 * являются ли строки left и right изоморфными.
 *
 * Две строки называются изоморфными, если в строке A можно заменить
 * символы таким образом, чтобы получилась строка B.
 *
 * Каждый конкретный символ может заменяться только на один конкретный
 * символ, в том числе на самого себя. При этом все вхождения символа N
 * могут быть заменены только на символ M.
 *
 * Порядок символов должен остаться неизменным.
 *
 * Пример:
 * isIsomorphic('egg', 'foo') === true
 * isIsomorphic('foo', 'bar') === false
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
export function isIsomorphic(left, right) {
  const customObject = {};
  const lettersCannotUse = new Set();

  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i !== right.length; ++i) {
    if (customObject[right[i]] === undefined && !(lettersCannotUse.has(left[i]))) {
      // && customObject[left[i]] === undefined
      customObject[right[i]] = left[i];
      lettersCannotUse.add(left[i]);
      // customObject[left[i]] = right[i];
    } else if (customObject[right[i]] === undefined && lettersCannotUse.has(left[i])
              || (customObject[right[i]] !== undefined && customObject[right[i]] !== left[i])) {
      return false;
    // } else if ((customObject[right[i]] !== undefined && customObject[right[i]] !== left[i])) {
      // || customObject[left[i]] !== undefined && customObject[left[i]] !== right[i])
      // return false;
    }
  }
  return true;
}
