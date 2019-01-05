/**
 * Напишите функцию promiseRace(promises), поведение
 * которой аналогично поведению Promise.race(promises).
 *
 * @param  {Promise[]} promises массив с исходными промисами
 * @return {Promise}
 */

export const promiseRace = promises => new Promise((resolve, reject) => {
  promises.forEach(promise => promise
    .then(resolve)
    .catch(reject));
});
