export class Personne {
   prenom :string;
   nom : string;
   age :number;  

   constructor(prenom:string="?",nom:string="?",age:number=0){
       this.prenom=prenom;
       this.nom=nom;
       this.age=age;
   }

   incrementerAge() :void {       
       this.age++;
   }
}


