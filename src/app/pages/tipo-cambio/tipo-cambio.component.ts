import { Component } from '@angular/core';
import { TipoCambioService } from '../../data/services/tipo-cambio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-cambio',
  templateUrl: './tipo-cambio.component.html',
  styleUrl: './tipo-cambio.component.css'
})
export class TipoCambioComponent {

  form: FormGroup;
  data: any;

  constructor(
    private fb: FormBuilder,
    private tipoCambioServce: TipoCambioService
  ) {
    this.form = this.fb.group({
      monto: ['', Validators.required],
      monedaOrigen: ['', Validators.required],
      monedaDestino: ['', Validators.required],
    });
  }

  onGenerarToken(): void {
    this.tipoCambioServce.generarToken().subscribe(res => {
      localStorage.setItem('token', res.datos);
      alert("token generado!")
    });
  }

  onConsultar(): void {
    if (this.form.valid) {
      this.tipoCambioServce.consultarTipoCambio(this.form.value).subscribe(res => {
        this.data = res.datos;
      });
    } else {
      alert("Error de validación: Todos los campos son obligatorios.")
    }
  }

}
