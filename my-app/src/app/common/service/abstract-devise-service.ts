import { Devise } from '../data/devise';
import { Observable, of } from 'rxjs';

export interface ConvertResult {
  source :string; //ex: "EUR",
  target :string; //ex: "USD",
  amount :number; //ex: 200.0
  result :number; //ex: 217.3913
};

export abstract class AbstractDeviseService {

  public abstract getAllDevises$() : Observable<Devise[]>;

  public abstract convertir$(montant: number,
                   codeDeviseSrc : string, 
                   codeDeviseTarget : string
                   ) : Observable<number>;

  public abstract deleteDeviseServerSide$(deviseCode):Observable<any>;

  public abstract addDeviseServerSide$(devise:Devise):Observable<Devise>;

  public abstract updateDeviseServerSide$(devise:Devise):Observable<Devise>;


}