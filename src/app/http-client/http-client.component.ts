import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styles: [
  ]
})
export class HttpClientComponent implements OnInit {
  public datos$: any;
  constructor(
    private apiService: ApiService
  ) { }
  ngOnInit(): void {
    this.apiService.getDatos().subscribe({
      next: (data: HttpResponse<any>) => {
        console.log(data);
        console.log(data.body);
        console.log(data.headers);
        console.log(data.status);
        console.log(data.statusText);
        console.log(data.url);
        this.datos$ = data.body.data;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        console.log(err.url);
        console.log(err.status);
        console.log(err.headers);
        console.log(err.message);
      },
      complete: () => {
        console.log('se ejecuto');  // solo se ejecuta cuando es 200
      }
    });
  }
}