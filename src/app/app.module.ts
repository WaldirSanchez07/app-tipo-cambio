import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCambiosComponent } from './components/lista-cambios/lista-cambios.component';
import { TipoCambioComponent } from './pages/tipo-cambio/tipo-cambio.component';
import { ListarCambiosComponent } from './pages/listar-cambios/listar-cambios.component';
import { JwtInterceptor } from './data/interceptors/jwt.interceptor';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaCambiosComponent,
    TipoCambioComponent,
    ListarCambiosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
