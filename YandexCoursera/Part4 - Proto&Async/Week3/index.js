/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {

    if (operations.length === 0) {
        callback(null, []);
        return 0;
    }

    let returnArray = [];
    let counter = 0;
    let errorFlag = false;

    operations.forEach((operation, index) => {
        operation(function next (error, result) {
            if (errorFlag) {
                return 0;
            } else if (error) {
                errorFlag = true;
                callback(error);
                return 0;
            }
            ++counter;
            returnArray[index] = result;
            if (counter === operations.length) {
                callback(null, returnArray);
            }
        }
        );
    }
    );
};