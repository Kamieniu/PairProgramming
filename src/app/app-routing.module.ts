import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'beers',
    //  Load Beerswith lazyLoading
  },
  {
    path: 'swapi',
    //  Load Swapi lazyLoading
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
