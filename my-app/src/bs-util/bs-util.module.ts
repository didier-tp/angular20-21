import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsuTogglePanelComponent } from './bsu-toggle-panel/bsu-toggle-panel.component';



@NgModule({
  declarations: [BsuTogglePanelComponent],
  exports:[BsuTogglePanelComponent],
  imports: [
    CommonModule
  ]
})
export class BsUtilModule { }
