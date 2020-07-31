import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html'
})
export class RatingComponent implements OnInit {

  @Input() rate: number
  @Input() readOnly: boolean
  @Input() blockOnRate: boolean

  @Output() rated = new EventEmitter<number>()

  rates: number[] = [1, 2, 3, 4, 5]

  previousRate: number

  constructor() { }

  ngOnInit(): void {
    this.rate = 0
  }

  setRate(r: number) {
    if (!this.readOnly) {
      this.rate = r
      this.previousRate = undefined
      this.rated.emit(this.rate)
      if (this.blockOnRate) {
        this.readOnly = true
      }
    }
  }

  setTemporaryRate(r: number) {
    if (!this.readOnly) {
      if (this.previousRate === undefined) {
        this.previousRate = this.rate
      }
      this.rate = r
    }
  }

  clearTemporaryRate(r: number) {
    if (!this.readOnly) {
      if (this.previousRate !== undefined) {
        this.rate = this.previousRate
      }
      this.previousRate = undefined
    }
  }

}
