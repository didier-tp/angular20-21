import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bsu-toggle-panel',
  templateUrl: './bsu-toggle-panel.component.html',
  styleUrls: ['./bsu-toggle-panel.component.scss']
})
export class BsuTogglePanelComponent implements OnInit {

  toggleP : boolean = false;

  @Input()
  title : string = "default-panel-title";

  constructor() { }

  ngOnInit(): void {
  }

}
