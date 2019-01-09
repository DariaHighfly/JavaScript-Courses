/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
    let hashSet = new Set();
    hashtags.forEach(function(hash) {
        hashSet.add(hash.toLowerCase());
    })
    return Array.from(hashSet).join(', ');
};
