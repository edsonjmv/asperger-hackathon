import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './view/list/list.component';
import { ListRoutingModule } from './list-routing.module';
import { CardComponent } from './components/card/card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ListComponent, CardComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatCardModule
  ]
})
export class ListModule { }
