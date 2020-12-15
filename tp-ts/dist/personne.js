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
        this._age = age;
    }
    Object.defineProperty(Personne.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (newAge) {
            if (newAge >= 0) {
                this._age = newAge;
            }
            else {
                //console.log("age négatif invalide");
                throw "age négatif invalide";
            }
        },
        enumerable: false,
        configurable: true
    });
    Personne.prototype.incrementerAge = function () {
        this._age++;
    };
    return Personne;
}());
exports.Personne = Personne;
