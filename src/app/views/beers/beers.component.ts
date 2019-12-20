import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beers',
  template: `
    <div class="app-beers">
      <ul class="app-beers__list">
        <li class="app-beers__list-element" style="margin-bottom: 30px;">
          <div class="beer-image">
            <img src="someUrl" alt="" class="beer-image" />
          </div>
          <span class="beerName">
            Some Name
          </span>
          <span id="beerData">
            SomeValue &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SomeValue2 &nbsp;&nbsp;&nbsp;&nbsp;
            SomeValue3
          </span>
        </li>
        <li class="app-beers__list-element" style="margin-bottom: 30px;">
          <div class="beer-image">
            <img src="someUrl" alt="" class="beer-image" />
          </div>
          <span class="beerName">
            Some Name
          </span>
          <span id="beerData">
            SomeValue &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SomeValue2 &nbsp;&nbsp;&nbsp;&nbsp;
            SomeValue3
          </span>
        </li>
      </ul>
      <div id="loadMoreBeers">
        Load more beers
      </div>
    </div>
  `,
  styleUrls: ['./beers.component.scss'],
})
export class BeersComponent implements OnInit {
  constructor() {}
}
