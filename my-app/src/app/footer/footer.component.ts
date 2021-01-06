import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Output()
  public changeHumeurEvent : EventEmitter<{value:string}> = new EventEmitter<{value:string}>();
  
  public listeHumeurs = [ "bonne humeur" , "mauvaise humeur"];
  public humeur = "bonne humeur";

  public onHumeurChange(){
    this.changeHumeurEvent.emit({value:this.humeur});
  }

  public couleurFondPrefereeLocale : string = "lightgrey";

  public listeCouleurs : string[] = [ "lightyellow", "white",
     "lightgrey" , "lightgreen" , "lightpink" , "lightblue" , "black"] ;


  constructor(private _preferencesService : PreferencesService) {
        //synchronisation de la "copie locale":
        this._preferencesService.couleurFondPrefereeObservable
            .subscribe(
              //callback éventuellement re-déclenchée plusieurs fois:
              (couleurFondPreferee)=>{
                  this.couleurFondPrefereeLocale=couleurFondPreferee;}
            );
  }

  public onCouleurFondPrefereeLocaleChange(){
    this._preferencesService.couleurFondPreferee=
                    this.couleurFondPrefereeLocale;
  }

  ngOnInit(): void {
  }

}