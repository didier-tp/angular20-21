import { Component, OnInit ,Input} from '@angular/core';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public titre :string ="app";

  public couleurFondPrefereeLocale : string = "lightgrey";
  public couleurTexteLocale : string = "black";

  constructor(private _preferencesService : PreferencesService) {
    //synchronisation de la "copie locale":
    this._preferencesService.couleurFondPrefereeObservable
    .subscribe(
      //callback éventuellement re-déclenchée plusieurs fois:
      (couleurFondPrefereePartagee)=>{
          console.log("nouvelle couleurFondPreferee="+couleurFondPrefereePartagee)
          this.couleurFondPrefereeLocale=couleurFondPrefereePartagee;
          if(couleurFondPrefereePartagee=="black"){
            this.couleurTexteLocale="white";
          }else{
            this.couleurTexteLocale="black";
          }
        }
    );
   }

  ngOnInit(): void {
  }

}