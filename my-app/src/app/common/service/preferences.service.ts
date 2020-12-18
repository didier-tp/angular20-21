import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  private _couleurFondPreferee$ :BehaviorSubject<string> ;

  constructor() { 
    let c = localStorage.getItem('preferences.couleurFond');
    c=c?c:'lightgrey';
    this._couleurFondPreferee$ = new BehaviorSubject<string>(c);
  }

  public get couleurFondPrefereeObservable() {
    return this._couleurFondPreferee$;
  }

  public set couleurFondPreferee(c:string){
    this._couleurFondPreferee$.next(c);
    localStorage.setItem('preferences.couleurFond',c);
  }
}