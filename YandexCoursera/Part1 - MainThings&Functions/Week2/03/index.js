// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    let commands = command.split(' ');

    switch(commands[0]) {
        case 'ADD':
            let name = commands[1];
            if (phoneBook.hasOwnProperty(name)) {
                phoneBook[name] =  (phoneBook[name]).concat(commands[2].split(','));
            } else {
                Object.defineProperty(phoneBook, name, {
                    value: commands[2].split(','),
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
            break;
        case 'REMOVE_PHONE':
            let flag = false;
            for (let names in phoneBook) {
                for (let i = 0; i !== phoneBook[names].length; ++i) {
                    if (phoneBook[names][i] == commands[1]) {
                        phoneBook[names].splice(i, 1);
                        flag = true;
                        break;
                    }
                }
            }
            return flag;
        case 'SHOW':
            let ret = [];
            let sortPersons = [];
            for (let i in phoneBook) {
                sortPersons.push([i, phoneBook[i]]);
            }
            let sortPhoneBook = sortPersons.sort(function(person1, person2) {
                if (person1[0] < person2[0]) { return -1};
                if (person1[0] >= person2[0]) { return 1};
                return 0;
            });
            for (let i = 0; i !== sortPhoneBook.length; ++i) {
                if (sortPhoneBook[i][1].length === 0) {
                    continue;
                }
                let str = '';
                str += sortPhoneBook[i][0].toString() + ': ';
                str += sortPhoneBook[i][1].join(', ');
                ret.push(str);
            }
            return ret;
        default:
            break;
    }
    return 0;
};
