import { Component, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Login } from '../common/data/login'
import { LoginResponse } from '../common/data/login-response';
import { LoginService } from '../common/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , DoCheck {

  public details: string ="***";

  public login : Login = new Login();
  public message :string ;
  public loginOk : boolean ;

  public gererError(err :any){
    this.message = "Une erreur technique a eu lieu. Veuillez réessayer plus tard";
    this.loginOk=false;
    console.log(JSON.stringify(err));
  }

  public gererLoginResponse(resp :LoginResponse){
    this.message = resp.message;
    this.loginOk = resp.status;
    console.log(JSON.stringify(resp));
  }

  public onLogin(){
     //this.message = "donnees saisies = " + JSON.stringify(this.login);
     this._loginService.postLogin$(this.login).subscribe(
      {
        next : (resp :LoginResponse) => { this.gererLoginResponse(resp);  } ,
        error : (err) => { this.gererError(err);}
       }
     );
  }

  constructor(private _loginService : LoginService) { }
  
  @ViewChild('spy', { static: true })
e_username: ElementRef<HTMLElement>

  ngDoCheck(): void {
    this.details = "##" + this.e_username.nativeElement.classList;
  }
  

  ngOnInit(): void {
  }

}
