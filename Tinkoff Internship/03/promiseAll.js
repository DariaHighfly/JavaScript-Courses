/**
 * Напишите функцию promiseAll(promises), поведение
 * которой аналогично поведению Promise.all(promises).
 *
 * @param  {Promise[]} promises массив с исходными промисами
 * @return {Promise}
 */

export const promiseAll = promises => new Promise((resolve, reject) => {
  const returnArray = [];
  let resolvePromises = 0;

  promises.forEach(promise => promise
    .then(result => {
      returnArray.push(result);
      if (++resolvePromises >= promise.length) { return resolve(returnArray); }
    })
    .catch(error => { reject(error); }));
});
