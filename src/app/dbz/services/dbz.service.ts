import { Injectable } from '@angular/core';
import {
  CharacterInterface,
  NewCharacterInterface,
} from '../types/character.interface';

import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: CharacterInterface[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Vegueta',
      power: 7500,
    },
  ];

  addCharacter(character: NewCharacterInterface): void {
    const newCharacter: CharacterInterface = { id: uuid(), ...character };
    this.characters.push(newCharacter);
  }

  onDeleteCharacterById(characterId: string): void {
    this.characters = this.characters.filter(({ id }) => id !== characterId);
  }
}
