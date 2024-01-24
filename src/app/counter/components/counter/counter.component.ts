import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2>Counter Component</h2>
    <p>Counter: {{ counter }}</p>
    <div class="container-buttons">
      <button (click)="increaseBy(1)">+1</button>
      <button (click)="resetCounter()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>
    </div>
  `,
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter() {
    this.counter = 10;
  }
}
