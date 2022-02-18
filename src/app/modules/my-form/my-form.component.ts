import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface FormModel {
  description: string;
}
@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss']
})
export class MyFormComponent implements OnInit {
  constructor() {}

  myForm!: FormGroup;
  myFormData: FormModel | null = null;
  ngOnInit() {
    this.myForm = new FormGroup({
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100)
      ])
    });
  }

  get description() {
    return this.myForm.get('description');
  }

  submit() {
    if (this.myForm.valid) {
      this.myFormData = this.myForm.value;
    }
  }

  clear() {
    this.myForm.reset();
    this.myFormData = null;
  }
}
