"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var personne_1 = require("./personne");
var p1;
p1 = new personne_1.Personne();
console.log("p1 initial=" + JSON.stringify(p1));
p1.prenom = "jean";
p1.nom = "Bon";
try {
    p1.age = -5;
}
catch (ex) {
    console.log("exception:" + ex);
}
p1.age = 40;
p1.incrementerAge();
console.log("age=" + p1.age);
console.log("p1=" + JSON.stringify(p1));
var p2 = new personne_1.Personne("alex", "Therieur", 30);
console.log("p2=" + JSON.stringify(p2));
