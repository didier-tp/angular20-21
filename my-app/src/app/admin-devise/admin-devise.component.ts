import { Component, OnInit } from '@angular/core';
import { Devise } from '../common/data/devise';
import { DeviseService } from '../common/service/devise.service';

@Component({
  selector: 'app-admin-devise',
  templateUrl: './admin-devise.component.html',
  styleUrls: ['./admin-devise.component.scss']
})
export class AdminDeviseComponent implements OnInit {

  //codeDevise : string;
  selectedDevise : Devise; //devise à supprimer ou à ajouter ou à modifier
  listeDevises : Devise[];//liste des devises (pour selection)
  message : string = "";
  isNew : boolean = true;
  confirmDelete :boolean = false;

  constructor(private _deviseService : DeviseService) { 
    this.selectedDevise = new Devise();
  }

  raz(){
    this.selectedDevise = new Devise();
    this.isNew=true;
    this.confirmDelete = false;
  }

  onNouvelleDevise(){
     this.raz();
     this.message = "nouvelle devise à saisir et ajouter"
  }

  onSelection(){
    this.isNew=false;
    this.message = "devise existante (modifiable)"
  }

  onActualiser(){
    this._deviseService.getAllDevises$()
         .subscribe({
            next: (tabDevises : Devise[])=>{ this.listeDevises = tabDevises },
            error: (err) => { console.log("error:"+err)}
         });
  }
  

  onAjouterDevise(){  
    this._deviseService.addDeviseServerSide$(this.selectedDevise)
    .subscribe(
      ()=>{this.message="devise ajoutée coté serveur"; this.onActualiser(); } ,
      (error) => { console.log(error);
                   this.message = JSON.stringify(error); }
     );  
  }

  onModifierDevise(){ 
    this._deviseService.updateDeviseServerSide$(this.selectedDevise)
    .subscribe(
      ()=>{this.message="devise modifiée coté serveur"; } ,
      (error) => { console.log(error);
                   this.message = JSON.stringify(error); }
     );   
  }

  onSupprimer(){
    this._deviseService.deleteDeviseServerSide$(this.selectedDevise.code)
    .subscribe(
      ()=>{this.message="devise " +  this.selectedDevise.code + " bien supprimée";
           this.onActualiser();   this.raz(); } ,
      (error) => { console.log(error);
                   this.message = JSON.stringify(error); }
     );
  }

  ngOnInit(): void {
    this.onActualiser();
  }

}
