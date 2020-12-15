import { Personne } from "./personne";

let p1 :Personne; 
p1 = new Personne();
console.log("p1 initial="+JSON.stringify(p1));
p1.prenom ="jean";p1.nom = "Bon";p1.age=40; 
p1.incrementerAge(); console.log("age="+p1.age);
console.log("p1="+JSON.stringify(p1));

let p2 = new Personne("alex","Therieur",30);
console.log("p2="+JSON.stringify(p2));