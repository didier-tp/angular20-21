import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BasicComponent } from './basic/basic.component';
import { CalculatriceComponent } from './basic/calculatrice/calculatrice.component';
import { TvaComponent } from './basic/tva/tva.component';
import { FormsModule } from '@angular/forms';
import { XyComponent } from './basic/xy/xy.component';
import { ZzComponent } from './basic/zz/zz.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsUtilModule } from './bs-util/bs-util.module';
import { MyHighLightDirective } from './common/directive/my-high-light.directive';
import { ConversionComponent } from './conversion/conversion.component';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyAuthInterceptor } from './common/interceptor/my-auth.interceptor';
import { AdminDeviseComponent } from './admin-devise/admin-devise.component';
import { AbstractDeviseService } from './common/service/abstract-devise-service';
import { DeviseService } from './common/service/devise.service';
import { DeviseServiceSimu } from './common/service/devise.service_simu';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import localeFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { ExponentialPipe } from './common/pipe/exponential.pipe';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasicComponent,
    CalculatriceComponent,
    ExponentialPipe ,
    TvaComponent, XyComponent , ZzComponent, LoginComponent, WelcomeComponent, MyHighLightDirective, ConversionComponent, AdminDeviseComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    BsUtilModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyAuthInterceptor,
      multi: true
      },
      //{ provide: AbstractDeviseService, useClass: DeviseService }
      { provide: AbstractDeviseService, useClass: DeviseServiceSimu }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
