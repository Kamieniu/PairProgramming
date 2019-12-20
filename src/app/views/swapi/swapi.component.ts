import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swapi',
  template: `
    <section class="app-swapi">
      <app-swapi-character [character]=""></app-swapi-character>
    </section>
  `,
  styleUrls: ['./swapi.component.scss'],
})
export class SwapiComponent {
  constructor() {}
}
