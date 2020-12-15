"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
var Personne = /** @class */ (function () {
    function Personne(prenom, nom, age) {
        if (prenom === void 0) { prenom = "?"; }
        if (nom === void 0) { nom = "?"; }
        if (age === void 0) { age = 0; }
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
    }
    Personne.prototype.incrementerAge = function () {
        this.age++;
    };
    return Personne;
}());
exports.Personne = Personne;
