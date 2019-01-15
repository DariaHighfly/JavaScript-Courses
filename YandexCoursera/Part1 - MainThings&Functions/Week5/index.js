module.exports = {

    events: {},

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (!this.events.hasOwnProperty(event)) {
            this.events[event] = [];
        }
        this.events[event].push([subscriber, handler]);
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (this.events.hasOwnProperty(event)) {
            for (let i = 0; i !== this.events[event].length; ++i) {
                if (this.events[event][i][0] === subscriber) {
                    this.events[event].splice(i, 1);
                    --i;
                }
            }
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if ((this.events.hasOwnProperty(event))) {
            this.events[event].forEach(function(person) {
                person[1].call(person[0]);
            });
        }
        return this;
    }
};
