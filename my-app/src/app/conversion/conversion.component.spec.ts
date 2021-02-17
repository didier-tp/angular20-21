// ng test --include=**/conversion/*.spec.ts
// pour ne lancer que le test unitaire sur le composant conversion

import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BsUtilModule } from '../bs-util/bs-util.module';
import { AbstractDeviseService } from '../common/service/abstract-devise-service';
import { DeviseServiceSimu } from '../common/service/devise.service_simu';

import { ConversionComponent } from './conversion.component';

describe('ConversionComponent', () => {
  let component: ConversionComponent;
  let fixture: ComponentFixture<ConversionComponent>;

  let deSourceSelect : DebugElement;
  let elSourceSelect : HTMLSelectElement;
  let deCibleSelect : DebugElement;
  let elCibleSelect : HTMLSelectElement;
  let deMontantSource : DebugElement;
  let elMontantSource : HTMLInputElement;
  let deBtnConv : DebugElement;
  let elBtnConv : HTMLInputElement;

  let deviseServiceWithinTest : AbstractDeviseService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionComponent ],
      imports: [FormsModule, BsUtilModule] ,
      providers: [ {provide: AbstractDeviseService,
        useClass: DeviseServiceSimu } ],
    })
    .compileComponents()
    .then(() => {
    fixture = TestBed.createComponent(ConversionComponent);
    deviseServiceWithinTest = fixture.debugElement.injector.get(AbstractDeviseService);
    component = fixture.componentInstance;
    fixture.detectChanges();
    deMontantSource = fixture.debugElement.query(By.css('input[name=montant]'));
    elMontantSource = deMontantSource.nativeElement;
    deSourceSelect = fixture.debugElement.query(By.css('select[name=codeDevSource]'));
    elSourceSelect = deSourceSelect.nativeElement;
    deCibleSelect = fixture.debugElement.query(By.css('select[name=codeDevCible]'));
    elCibleSelect = deCibleSelect.nativeElement;
    deBtnConv = fixture.debugElement.query(By.css('#btnConv'));
    elBtnConv = deBtnConv.nativeElement;
    
  }); 
});


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('conversion result=montantSource if cible=source', fakeAsync(() => {
     
        component.montant=200;        
        component.codeDeviseSource='EUR';  
        component.codeDeviseCible='EUR'; 
        component.onConvertir(); //async 
        tick(300); //300ms 
        fixture.detectChanges();
        //expect(spy.calls.any()).toBe(true, 'convertir should be called');
        console.log("** conversion - component.montantConverti:"+component.montantConverti);
        expect(component.montantConverti).toBeCloseTo(200,0.0001);
          
  }));

  it('should display good conversion result', fakeAsync(() => {
    component.listeDevises= [
      { code : "EUR" , name : "Euro" , change : 1.0} ,
      { code : "GBP" , name : "Livre" , change : 0.9} ,
      { code : "JPY" , name : "Yen" , change : 123.1} ,
      { code : "USD" , name : "Dollar" , change : 1.1} 
    ];
      fixture.detectChanges(); //in order to synchronize options of select 
      elMontantSource.value="200"; elMontantSource.dispatchEvent(new Event('input'));
      elSourceSelect.value=elSourceSelect.options[0].value;//"EUR"; 
      elSourceSelect.dispatchEvent(new Event('change'));
      elCibleSelect.value=elSourceSelect.options[3].value;//"USD"; 
      elCibleSelect.dispatchEvent(new Event('change'));
      elBtnConv.dispatchEvent(new Event('click'));//déclencher evt click
      tick(300); //300ms
      fixture.detectChanges();
      expect(Number(component.montant)).toBe(200);
      expect(component.codeDeviseSource).toBe('EUR');
      expect(component.codeDeviseCible).toBe('USD');
       // fixture.detectChanges();
        //expect(spy.calls.any()).toBe(true, 'convertir should be called');
      console.log("## conversion - component.montantConverti:"+component.montantConverti);
      expect(component.montantConverti).toBeCloseTo(217.3913,0.0001);
       
  }));


});

