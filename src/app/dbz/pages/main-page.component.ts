import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import {
  CharacterInterface,
  NewCharacterInterface,
} from '../types/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): CharacterInterface[] {
    return this.dbzService.characters;
  }

  onAddCharacter(character: NewCharacterInterface): void {
    this.dbzService.addCharacter(character);
  }

  onDeleteCharacterById(id: string): void {
    this.dbzService.onDeleteCharacterById(id);
  }
}
