import { Injectable } from '@angular/core';
import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';
import { delay, map} from 'rxjs/operators';
import { AbstractDeviseService } from './abstract-devise-service';


@Injectable({
  providedIn: 'root'
})
export class DeviseServiceSimu extends AbstractDeviseService {
  
  public deleteDeviseServerSide$(deviseCode: any): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public addDeviseServerSide$(devise: Devise): Observable<Devise> {
    throw new Error('Method not implemented.');
  }
  public updateDeviseServerSide$(devise: Devise): Observable<Devise> {
    throw new Error('Method not implemented.');
  }

  //jeux de données (en dur) pour pré-version (simulation asynchrone)
  private devises : Devise[] = [
    new Devise('EUR','euro',1.0),
    new Devise('USD','dollar',1.1),
    new Devise('GBP','livre',0.9),
    new Devise('JPY','yen',123.1)
  ];

  public getAllDevises$() : Observable<Devise[]>{
      return of(this.devises) //version préliminaire (cependant asynchrone)
            .pipe(
               delay(111) //simuler une attente de 111ms 
            );
  }

  public convertir$(montant: number,
                   codeDeviseSrc : string, 
                   codeDeviseTarget : string
                   ) : Observable<number> {
      let coeff =  Math.random();//coefficient aleatoire ici (simple simulation)
      let montantConverti = montant * coeff; 
      if(codeDeviseSrc==codeDeviseTarget)  
           montantConverti=montant; 
      if(codeDeviseSrc=='EUR'&&codeDeviseTarget=='USD')  
           montantConverti=217.3913;                 
      return of(montantConverti) //version temporaire (cependant asynchrone)
            .pipe(
                 delay(222) //simuler une attente de 222ms 
            );
  }

}