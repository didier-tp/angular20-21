"use strict";
var Personne = /** @class */ (function () {
    function Personne() {
    }
    Personne.prototype.incrementerAge = function () {
        this.age++;
    };
    return Personne;
}());
var p1;
p1 = new Personne();
p1.prenom = "jean";
p1.nom = "Bon";
p1.age = 40;
p1.incrementerAge();
console.log("age=" + p1.age);
console.log(JSON.stringify(p1));
