/**
 * @param {String} date
 * @returns {Object}
 */


function changeDate(number, type, newDate1) {
    let parse =  Date.parse(newDate1);
    var newDate = new Date(parse);
    switch(type) {
        case 'years':
            newDate.setFullYear(newDate.getFullYear() + number);
            return newDate;
        case 'months':
            newDate.setMonth(newDate.getMonth() + number);
            return newDate;
        case 'days':
            newDate.setDate(newDate.getDate() + number);
            return newDate;
        case 'hours':
            newDate.setHours(newDate.getHours() + number);
            return newDate;
        case 'minutes':
            newDate.setMinutes(newDate.getMinutes() + number);
            return newDate;
        default:
            throw new TypeError('Wrong format');
    }
    return newDate;
}

function addZero(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number;
    }
}

function dateToString(newDate) {
    var str = newDate.getFullYear() + '-';
    str += addZero(newDate.getMonth() + 1) + '-';
    str += addZero(newDate.getDate()) + ' ';
    str += addZero(newDate.getHours()) + ':';
    str += addZero(newDate.getMinutes());
    return str;
}
module.exports = function (date) {
    return {
        value: date,
        add: function (number, type) {
            if (number < 0) {
                throw new TypeError('Wrong format');
            }
            let newDate = changeDate(number, type, this.value);
            this.value = dateToString(newDate);
            return this;
        },
        subtract: function (number, type) {
            if (number < 0) {
                throw new TypeError('Wrong format');
            }
            let newDate = changeDate(-number, type, this.value);
            this.value = dateToString(newDate);
            return this;
        }
    }
};
