import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})
export class HijoComponent implements OnInit {

  @Input('nombreExtrano') nombreHijo: string = 'Sin nombre';
  @Output('cambioNombreHijo') cambioNombreHijo = new EventEmitter<string>();

  constructor( 
    // private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  cambiarNombreComponent() {
    this.nombreHijo = 'Sebastian RODRIGUEZ ZAPATA';
    this.cambioNombreHijo.emit(this.nombreHijo);
    // this.dataService.nombreUsuario = this.nombreHijo;
  }

}
