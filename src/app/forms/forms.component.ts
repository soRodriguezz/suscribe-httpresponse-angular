import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html'
})
export class FormsComponent implements OnInit {

  public exampleControl: FormControl;
  public exampreGroup: FormGroup;
  public exampleArray: FormArray;

  constructor(
    private fb: FormBuilder
  ) {
    this.exampleControl = fb.control('');

    this.exampreGroup = fb.group({
      email: '',
      password: ''
    });

    this.exampleArray = fb.array(
      [
        {
          pregunta: '123'
        },
        {
          tipo: '456'
        }
      ]
    );

    // this.example = _fb.control({value: 'my val', disabled: true});
  }
  ngOnInit(): void {
    // console.log(this.exampleControl);
    this.exampleArray.controls.forEach(element => console.log(element)); // listado de los objetos del array
    console.log(this.exampleArray.controls.length); // conteo
    console.log(this.exampleArray.controls.map(element => element.value)); // listado de los valores del array
  }




}
