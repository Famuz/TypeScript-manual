"use strict";
(function () {
    var fullName = function (firstName, lastName, uppercase) {
        if (uppercase === void 0) { uppercase = false; }
        if (uppercase) {
            return "".concat(firstName, " ").concat(lastName || '-- no lastname').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || '-- no lastname');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
//# sourceMappingURL=args-default.js.map