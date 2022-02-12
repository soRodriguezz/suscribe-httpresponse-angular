import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html'
})
export class PadreComponent implements OnInit {
  nombrePadre: string = "Nombre Usuario";

  constructor(
    private dataService: DataService 
  ) { }

  ngOnInit(): void {
  }

  cambiarNombrePadre(): void {
    this.nombrePadre = 'Sebastian';
    this.dataService.nombreUsuario = this.nombrePadre;
  }

  hijoCambioNombre(nuevoNombre: string) {
    this.nombrePadre = nuevoNombre;
    this.dataService.nombreUsuario = nuevoNombre;
  }


}
