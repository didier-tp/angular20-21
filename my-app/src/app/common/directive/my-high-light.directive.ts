import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[myHighLight]'
})
export class MyHighLightDirective {
 /*
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    }
  */
 constructor(){
   this.couleurFond="yellow";
 }

 @Input('myHighLight')
 @HostBinding("style.backgroundColor")
 couleurFond : string ;


}

// <span myHighLight>....</span>
// <span myHighLight='red' >....</span>
// <span [myHighLight]='variableXy' >....</span>
