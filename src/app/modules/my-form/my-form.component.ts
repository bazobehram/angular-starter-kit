import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
  constructor() {}

  myForm!: FormGroup;
  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100)
      ])
    });
  }

  get name() {
    return this.myForm.get('name');
  }

  submit() {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }
}
