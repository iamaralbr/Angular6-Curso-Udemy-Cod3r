import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms'

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string
  @Input() errorMessage: string

  //@ContentChild(NgModel) input: NgModel
  input: NgModel // | FormControlName

  @ContentChild(NgModel) model: NgModel // @ContentChild(directive or element), usamos a diretiva NgModel

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.model
    if (this.input === undefined)
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel');
  }

  hasSuccess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean {
    return this.input.invalid && (this.input.dirty || this.input.touched)
  }
}
