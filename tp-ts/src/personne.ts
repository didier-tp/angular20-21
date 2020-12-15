class Personne {
   prenom :string;
   nom : string;
   age :number;

   incrementerAge() :void {       
       this.age++;
   }
}

let p1 :Personne;
p1 = new Personne();
p1.prenom ="jean";p1.nom = "Bon";p1.age=40;
p1.incrementerAge(); console.log("age="+p1.age);
console.log(JSON.stringify(p1));