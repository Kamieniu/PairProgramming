import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapi-character',
  template: `
    <div class="app-swapi-character">
      <div class="name">
        Lucas
      </div>
      <div class="surname">
        Gorge
      </div>
    </div>
  `,
  styleUrls: ['./swapi-character.component.scss'],
})
export class SwapiCharacterComponent implements OnInit {}
