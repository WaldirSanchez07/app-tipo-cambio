import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoCambioComponent } from './pages/tipo-cambio/tipo-cambio.component';
import { ListarCambiosComponent } from './pages/listar-cambios/listar-cambios.component';

const routes: Routes = [
  {
    path: '',
    component: TipoCambioComponent
  },
  {
    path: 'listar',
    component: ListarCambiosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
