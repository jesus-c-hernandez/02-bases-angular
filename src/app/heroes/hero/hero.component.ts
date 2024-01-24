import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 32;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  public changeHeroName(): void {
    this.name = 'spiderman';
  }

  public changeHeroAge(): void {
    this.age = 25;
  }

  public resetHero(): void {
    this.name = 'ironman';
    this.age = 32;
  }
}
