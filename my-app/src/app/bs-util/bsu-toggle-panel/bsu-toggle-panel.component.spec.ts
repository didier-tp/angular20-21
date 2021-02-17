import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsuTogglePanelComponent } from './bsu-toggle-panel.component';

describe('BsuTogglePanelComponent', () => {
  let component: BsuTogglePanelComponent;
  let fixture: ComponentFixture<BsuTogglePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsuTogglePanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsuTogglePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
