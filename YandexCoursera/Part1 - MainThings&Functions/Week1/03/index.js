/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    let a = '';
    let b = '';
    let newDate = new Date();
    newDate.setHours(hours);
    newDate.setMinutes(minutes + interval);
    if (newDate.getHours().toString().length == 1) {
        a = '0'+ newDate.getHours().toString();
    } else {
        a = newDate.getHours().toString();
    }
    if (newDate.getMinutes().toString().length == 1) {
        b = '0' + newDate.getMinutes().toString();
    } else {
        b = newDate.getMinutes().toString();
    }
    return (a + ':' + b);
};
