"use strict";
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo est\u00E1 salvado!"; };
    // let myFunction: (y: number, z: number) => number;
    // let myFunction: (y: string) => string;
    var myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    // myFunction = addNumber;
    // console.log(myFunction(1, 2));
    // myFunction = greet;
    // console.log(myFunction('Juan'));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
//# sourceMappingURL=function-type.js.map