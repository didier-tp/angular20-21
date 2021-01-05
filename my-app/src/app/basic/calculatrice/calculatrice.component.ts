import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.scss']
})
export class CalculatriceComponent implements OnInit,OnDestroy {

  a : number;
  b : number ;
  res : number;
  modeChoisi : string; // "simple" ou "sophistiquee"

  constructor(private _route:ActivatedRoute) { 
      //dans app-routing.module.ts , { path: 'calculatrice/:mode', component: CalculatriceComponent }
      this._route.params.subscribe((params : Params)=>{ this.modeChoisi = params['mode']; })
  }

  ngOnDestroy(): void {
    console.log("juste avant destruction du composant calculatrice")
  }



  montrerHisto : boolean = true;
  historiqueCalculs :string[] = [];

  onCalculer(op:string){
       switch(op){
         case "+" :
            this.res = Number(this.a) + Number(this.b);  break;
        case "-" :
              this.res = Number(this.a)- Number(this.b);  break;
        case "*" :
            this.res = Number(this.a) * Number(this.b);  break;
        default:
            this.res = undefined;
       }
       this.historiqueCalculs.push(`${this.a} ${op} ${this.b} = ${this.res}`)
  }

  //coordonnées relatives de la souris qui survole une div
  x:number; 
  y:number;

  onMouseMove(evt : MouseEvent){
    let currentDiv : HTMLElement  = <HTMLElement> evt.target;
    this.x = evt.pageX - currentDiv.offsetLeft;
    this.y = evt.pageY - currentDiv.offsetTop;
  }

  onMouseLeave(evt : MouseEvent){
    this.x=undefined; this.y=undefined;
  }

  

  ngOnInit(): void {
  }

}
