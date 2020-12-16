import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZzComponent } from './zz.component';

describe('ZzComponent', () => {
  let component: ZzComponent;
  let fixture: ComponentFixture<ZzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
