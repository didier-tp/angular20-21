import { Component, OnInit ,Input} from '@angular/core';
import { MenuDefinition } from 'src/bs-util/data/MenuDefinition';
import { LoginService } from '../common/service/login.service';
import { PreferencesService } from '../common/service/preferences.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public titre :string ="app";

  public myMenuDef: MenuDefinition[] = [
    { label : "administrateur" , 
      children : [
        { label : "login" , path : "/ngr-login" } ,
        { divider : true },
        { label : "admin-devise" , path : "/ngr-admin-devise" , role : "admin" },
        { label : "calculatrice sophistiquee" , path : "/ngr-basic/calculatrice/sophistiquee" , role : "admin" }
      ]
    },
    { label : "basic" , path : "/ngr-basic" } , 
    { label : "conversion" , path : "/ngr-conversion" } , 
    { label : "welcome" , path : "/ngr-welcome" }
    ];

  public couleurFondPrefereeLocale : string = "lightgrey";
  public couleurTexteLocale : string = "black";

  constructor(private _preferencesService : PreferencesService,
              public loginService : LoginService) {
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