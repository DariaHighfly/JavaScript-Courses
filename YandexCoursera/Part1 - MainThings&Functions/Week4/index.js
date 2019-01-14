/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    // пройдемся по всем аргументам и разделим их на группы select & filter
    let selectArgs =[];
    let filterArgs = [];
    for (let i = 1; i !== arguments.length; ++i) {
        if (arguments[i].name === 'filterIn') {
            filterArgs.push(arguments[i]); // берем только правила, по котором фильтруем
        }
        if (arguments[i].name === 'select') {
            selectArgs.push(arguments[i]); // берем только значения, которые выбираем
        }
    }

    for (let i = 0; i !== filterArgs.length; ++i) {
        collection = filterArgs[i](collection);
    }

    for (let i = 0; i !== selectArgs.length; ++i) {
        collection = selectArgs[i](collection);
    }

    return collection;
}

/**
 * @params {String[]}
 */
function select() {
    let args = [].slice.call(arguments);

    return function select(collection) {
        let newCollection = [];

        collection.forEach(function(elem) {
            let newElem = {};
            args.forEach(function(el) {
                if (el in elem) {
                    newElem[el] = elem[el];
                }
            });
            newCollection.push(newElem);
        });

        return newCollection;
    };
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */

function filterIn(property, values) {
    return function filterIn(collection) {
        return collection.reduce(function(newCollection, elem) {
            values.forEach(function(value) {
                if (elem[property] === value) {
                    newCollection.push(elem);
                }
            });

            return newCollection;
        }, []);
    };
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};