export class Personne {
   
   constructor(public prenom:string="?",
               public nom:string="?",
               private _age:number=0){
   }

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

  

   incrementerAge() :void {       
       this._age++;
   }
}


