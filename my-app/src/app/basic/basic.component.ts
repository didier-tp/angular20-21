import { Component, OnInit } from '@angular/core';
import { LoginService } from '../common/service/login.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  constructor(public loginService :LoginService) { }

  ngOnInit(): void {
  }

}
