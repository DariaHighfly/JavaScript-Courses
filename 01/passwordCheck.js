/**
 * Напишите функцию passwordCheck(password), принимающую строку password
 * и проверяющую её на сложность. Если сложность достаточна, вернуть true,
 * иначе - false.
 *
 * Достаточной сложность считается, если в строке:
 * - Есть хотя бы одно число
 * - Есть хотя бы две буквы латинского алфавита в разных регистрах
 * - Есть хотя бы один символ из ряда ! ? . , + - * / =
 * - Содержит не менее 10 символов
 *
 * Пример:
 * passwordCheck('Nagibator777') === false
 * passwordCheck('password') === false
 * passwordCheck('This is the 7th password I have come up with!') === true
 *
 * Больше примеров в тестах.
 *
 * @param  {string} password пароль
 * @return {boolean}
 */
export function passwordCheck(password) {
  const number = /[0-9]/;
  const letterBig = /[A-Z]/;
  const letterSmall = /[a-z]/;
  const arraySim = /[-!?.,+*/=]/;
  const isNull = (password !== null);
  const isLengthMoreThen10 = password.length >= 10;
  const AtLeastOneNumber = (password.match(number) !== null && password.match(number).length >= 1);
  //  password.match(number) !== null &&
  const AtLeastOneBigLetter = (password.match(letterBig) !== null && password.match(letterBig).length >= 1);
  //  password.match(letterBig) !== null &&
  //  const AtLeastOneSmallLetter = (password.match(letterSmall).length >= 1);
  //  password.match(letterSmall) !== null &&
  const isSimMoreThanOne = (password.match(arraySim) !== null && password.match(arraySim).length >= 1);

  if (isNull && isLengthMoreThen10 && AtLeastOneNumber
        && AtLeastOneBigLetter && password.match(letterSmall).length >= 1
        && isSimMoreThanOne) {
    return true;
  }
  return false;
}
