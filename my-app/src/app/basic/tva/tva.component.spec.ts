import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { TvaComponent } from './tva.component';

// ng test --include=**/tva/*.spec.ts
// pour ne lancer que le test unitaire sur le composant tva



describe('TvaComponent', () => {
  let component: TvaComponent;
  let fixture: ComponentFixture<TvaComponent>;
  let elTva,elTtc: HTMLElement;
  let elHt : HTMLInputElement;
  let elTaux: HTMLSelectElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ], // FormsModule is for [(ngModel)]
      declarations: [ TvaComponent ]
    })
    .compileComponents();
  });

  /*
  function initDebugAndNativeElements_v1(){
    const fde = fixture.debugElement;
    elHt = fde.query(By.css('input[name=ht]')).nativeElement;
    elTaux = fde.query(By.css('select[name=taux]')).nativeElement;
    //Attention (piege) , via la div englobante
    //<div *ngIf="tva != 0"> , elTva et elTtc sont pas prets/accessibles au départ
    elTva = fde.query(By.css('#spanTva')).nativeElement; 
    elTtc = fde.query(By.css('#spanTtc')).nativeElement;
  }
  */
  function initDebugAndNativeElements_p1(){
    const fne = fixture.debugElement.nativeElement;
    elHt = fne.querySelector('input[name=ht]');
    elTaux = fne.querySelector('select[name=taux]');
  }

  function initDebugAndNativeElements_p2(){
    const fne = fixture.debugElement.nativeElement;
    //partie 2 (accessible plus tard) car  div englobante
    //<div *ngIf="tva != 0"> 
    elTva = fne.querySelector('#spanTva'); 
    elTtc = fne.querySelector('#spanTtc');
  }

  beforeEach(() => {
    fixture = TestBed.createComponent(TvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    initDebugAndNativeElements_p1()
    initDebugAndNativeElements_p2();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('20% , 200 -> 240 from model', /*fakeAsync(*/() => {
    component.ht=200;
    component.taux=20; //20%
    component.onCalculerTvaEtTtc();
    
    fixture.detectChanges();
    //initDebugAndNativeElements_p2();
     expect(elTva.textContent).toContain('40');
    console.log("from model, ttc:" +elTtc.textContent);
    expect(elTtc.textContent).toContain('240');
    }/*)*/);

    it('10% , 300 -> 330 from input', /*fakeAsync(*/() => {
      fixture.detectChanges();
      //initDebugAndNativeElements_p1();
      elHt.value="300";//saisir 300 dans zone input ht
      elHt.dispatchEvent(new Event('input'));//déclencher evt input
      fixture.detectChanges();
      expect(Number(component.ht)).toBe(300);
      elTaux.value = elTaux.options[1].value;  // <-- select a new value in [ 5 , 10 , 20]
      elTaux.dispatchEvent(new Event('change'));//déclencher evt input ou change
      
      fixture.detectChanges();
      expect(Number(component.taux)).toBe(10); 
  
      //initDebugAndNativeElements_p2();
      console.log("from html, ttc:" +elTtc.textContent);
      expect(elTtc.textContent).toContain('330');
    }/*)*/);


});
