import { Component, OnInit, Input} from '@angular/core';
import { MenuDefinition } from "src/bs-util/data/MenuDefinition";

@Component({
  selector: 'bsu-nav-item',
  templateUrl: './bsu-nav-item.component.html',
  styleUrls: ['./bsu-nav-item.component.scss', '../css/bs-util.scss']
})
export class BsuNavItemComponent implements OnInit{ 

  @Input() //settings passed from grand parent to parent to child component
  public currentUserRoles : String=null;

  @Input()
  menuDef :MenuDefinition = {};

  @Input()
  subLevel :boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleNavBar () {
    let element: HTMLElement = document.getElementsByClassName( 'navbar-toggler' )[ 0 ] as HTMLElement;
    if ( element.getAttribute( 'aria-expanded' ) == 'true' ) {
        element.click();
    }
}

  private hasGoodRole():boolean{
    if(this.menuDef.role==null)
        return true;
    /*else*/
    if(this.currentUserRoles==null || this.currentUserRoles=="")
        return false;
    /*else*/
    return this.currentUserRoles.includes(this.menuDef.role);
  }

  setCssClasses() {
    if(this.subLevel)
    return {
      'nav-link': false, 
      'dropdown-item' : true,  
      'titre1': false, 
      'titre2': true,
      'disabled-link': !this.hasGoodRole()
    }
    else   return {
      'nav-link': true,  
      'dropdown-item' : false, 
      'titre1': true, 
      'titre2': false,     
      'disabled-link': !this.hasGoodRole()
    }
  }

}
