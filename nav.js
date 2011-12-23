function KeyNav (el, config) {
    var me = this;
    me.config = config;
    el.onkeydown = function (e) {
        me.keyHandler(e);
    };
};

KeyNav.prototype = {
    map: {
        8: 'backspace',
        9: 'tab',
        13: 'enter',
        27: 'escape',
        32: 'space',
        33: 'pageup',
        34: 'pagedown',
        35: 'end',
        36: 'home',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down',
        46: 'delete'
    },

    keyHandler: function (e) {
        var keyCode = e.keyCode || window.event.keyCode;

        var fn = this.config[this.map[keyCode]];
        if (fn) {
            fn();
        }
    }
};