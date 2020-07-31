import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { RadioOption } from './radio-option.model'

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // token
      useExisting: forwardRef(() => RadioComponent),
      multi: true // informa que o provider é um multi provider. Isso significa que um único token é capaz de receber múltiplos valores.
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options: RadioOption[]

  value: any
  onChange: Function
  onTouched: any

  constructor() { }

  ngOnInit(): void {
  }

  setValue(value: any): void {
    this.value = value
    this.onChange(this.value)
    this.onTouched()
  }

  writeValue(obj: any): void {
    this.value = obj
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void { 
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void { }
}
