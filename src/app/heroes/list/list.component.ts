import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  public names: string[] = ['Luffy', 'Zoro', 'Sanji', 'Nami', 'Nico Robin'];
  public nameDeleted?: string;

  public deleteLastHero(): void {
    this.nameDeleted = this.names.pop();
  }

  public resetNames(): void {
    this.names = ['Luffy', 'Zoro', 'Sanji', 'Nami', 'Nico Robin'];
  }
}
