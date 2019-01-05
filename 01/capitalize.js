/**
 * Напишите функцию capitalize(input), возвращающую копию строки input,
 * в которой каждое слово начинается с заглавной буквы.
 *
 * "Слово" в данном контексте - последовательность юникод-символов из группы "letters".
 * В целях упрощения в тестовых кейсах будут использоваться только строки из латинских букв
 * и кириллицы. Слова с дефисами ("Что-то", "кто-либо" и т.д.) считаются одним словом.
 *
 * capitalize('А роза упала на лапу Азора') === 'А Роза Упала На Лапу Азора'
 * capitalize('Use the force, Luke') === 'Use The Force, Luke'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input строка с произвольным предложением.
 * @return {string}
 */
export function capitalize(input) {
  if (input.length === 0) {
    return '';
  }
  let str = '';
  let flag = true;
  const reg = /\s/;

  for (let i = 0; i !== input.length; ++i) {
    if (flag) {
      str += input[i].toLocaleUpperCase();
      flag = false;
    } else if (input[i].match(reg)) {
      flag = true;
      str += input[i];
    } else {
      str += input[i];
    }
  }
  return str;
}
