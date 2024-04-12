"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var powerLevel;
    (function (powerLevel) {
        powerLevel[powerLevel["powerAcuaman"] = 0] = "powerAcuaman";
        powerLevel[powerLevel["powerBatman"] = 1] = "powerBatman";
        powerLevel[powerLevel["powerFlash"] = 5] = "powerFlash";
        powerLevel[powerLevel["powerSuperman"] = 100] = "powerSuperman";
    })(powerLevel || (powerLevel = {}));
    var fuerzaFlash = powerLevel.powerFlash;
    var fuerzaSuperman = powerLevel.powerSuperman;
    var fuerzaBatman = powerLevel.powerBatman;
    var fuerzaAcuaman = powerLevel.powerAcuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
//# sourceMappingURL=app.js.map