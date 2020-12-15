export class Personne {
   prenom :string;
   nom : string;
   private _age :number;  

   public get age() : number {
       return this._age;
   }

   public set age(newAge:number) {
       if(newAge>=0){
           this._age = newAge;
       }else{
           //console.log("age négatif invalide");
           throw "age négatif invalide";
       }
   }

   constructor(prenom:string="?",nom:string="?",age:number=0){
       this.prenom=prenom;
       this.nom=nom;
       this._age=age;
   }

   incrementerAge() :void {       
       this._age++;
   }
}


