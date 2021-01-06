import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

  public onChangementHumeur(evt){
    console.log("nouvelle humeur=" + evt.value);
  }
}
