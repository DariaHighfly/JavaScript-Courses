/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    let words = tweet.split(' ');
    let hash = [];
    words.forEach(function(word) {
        if (word[0] == '#') {
            word = word.slice(1);
            hash.push(word);
        }
    })
    return hash;
};
