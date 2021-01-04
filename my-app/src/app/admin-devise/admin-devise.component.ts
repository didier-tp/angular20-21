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

  constructor(private _deviseService : DeviseService) { 
    this.selectedDevise = new Devise();
  }

  onNouvelleDevise(){
     this.selectedDevise = new Devise();
  }

  onActualiser(){
    this._deviseService.getAllDevises$()
         .subscribe({
            next: (tabDevises : Devise[])=>{ this.listeDevises = tabDevises },
            error: (err) => { console.log("error:"+err)}
         });
  }
  

  onRecupToutesDevise(){
  }

  onAjouterDevise(){    
  }

  onModifierDevise(){    
  }

  onSupprimer(){
    this._deviseService.deleteDeviseServerSide$(this.selectedDevise.code)
    .subscribe(
      ()=>{this.message="ok"; } ,
      (error) => { console.log(error);
                   this.message = JSON.stringify(error); }
     );
  }

  ngOnInit(): void {
  }

}
