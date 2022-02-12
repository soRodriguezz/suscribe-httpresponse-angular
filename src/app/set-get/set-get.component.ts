import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-set-get',
  templateUrl: './set-get.component.html'
})
export class SetGetComponent implements OnInit {

  datos: any;

  get obtenerDatos() {
    return this.apiService.getDatos();
  }

  set datosSet(data: any) {
    this.datos = data;
  }

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.obtenerDatos.subscribe((resp: HttpResponse<any>) => {
      this.datosSet = resp.body.data;
    });
  }

}
