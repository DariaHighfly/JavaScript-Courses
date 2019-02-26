module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.array = [];
}


Collection.prototype.values = function () {
    return this.array;
};

Collection.prototype.count = function () {
    return this.array.length;
};

Collection.prototype.at = function(position) {
    if (position <= 0 || position > this.array.length) {
        return null;
    } else {
        return this.array[position - 1];
    }
};

Collection.prototype.append = function(newValue) {
    if (newValue instanceof Collection) {
        this.array = this.array.concat(newValue.array);
    } else {
        this.array.push(newValue);
    }
};

Collection.prototype.removeAt = function(position) {
    if (position <= 0 || position > this.array.length) {
        return false;
    } else {
        this.array.splice(position - 1, 1);
        return true;
    }
};

// другие методы

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (args) {
    let newCol = new Collection();
    newCol.array = args;
    return newCol;
};
