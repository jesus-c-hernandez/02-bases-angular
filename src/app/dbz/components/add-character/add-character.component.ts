import { Component, EventEmitter, Output } from '@angular/core';
import { NewCharacterInterface } from '../../types/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public emitNewCharacter: EventEmitter<NewCharacterInterface> =
    new EventEmitter();

  public character: NewCharacterInterface = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;
    this.emitNewCharacter.emit({ ...this.character });
    this.character = {
      name: '',
      power: 0,
    };
  }
}
