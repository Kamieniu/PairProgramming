import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwapiRoutingModule } from './swapi-routing.module';
import { SwapiComponent } from './swapi.component';


@NgModule({
  declarations: [SwapiComponent],
  imports: [
    CommonModule,
    SwapiRoutingModule
  ]
})
export class SwapiModule { }
