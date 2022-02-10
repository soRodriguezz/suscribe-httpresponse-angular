import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

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
