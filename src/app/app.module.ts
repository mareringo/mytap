import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.router';
import { HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DemoComponent } from './demo/demo.component';
import { NotFoundComponent } from './utility/not-found/not-found.component';
import { HeaderComponent } from './utility/header/header.component';
import { FooterComponent } from './utility/footer/footer.component';
import { MyHttpService } from './utility/service/myHttp.service';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CookieService } from './utility/service/cookie.service';
import { TopsComponent } from './tops/tops.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DemoComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    DetailComponent,
    LoginComponent,
    RegisterComponent,
    TopsComponent
  ],
  imports: [
    BrowserModule,
    // NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule
  ],
  providers: [MyHttpService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
