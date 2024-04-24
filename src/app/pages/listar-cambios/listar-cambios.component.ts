import { Component, OnInit } from '@angular/core';
import { TipoCambioService } from '../../data/services/tipo-cambio.service';

@Component({
  selector: 'app-listar-cambios',
  templateUrl: './listar-cambios.component.html',
  styleUrl: './listar-cambios.component.css'
})
export class ListarCambiosComponent implements OnInit {

  data: any[] = [];

  constructor(private tipoCambioServce: TipoCambioService) {
  }

  ngOnInit(): void {
    this.tipoCambioServce.listarCambios().subscribe(res => {
      this.data = res.datos;
      console.log(this.data);
      
    });
  }

  fechaLocal(fecha: string): string {
    const f = new Date(fecha);
    const diferenciaHoras = 5 * 60 * 60 * 1000;
    const fechaRestante = new Date(f.getTime() - diferenciaHoras);
    return fechaRestante.toISOString();
  }

}
