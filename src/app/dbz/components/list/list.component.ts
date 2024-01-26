import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CharacterInterface } from '../../types/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() characterList: CharacterInterface[] = [];

  @Output()
  onDeleteCharacterId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacterById(characterId: string): void {
    this.onDeleteCharacterId.emit(characterId);
  }
}
