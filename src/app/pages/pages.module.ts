import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesRoutingModule } from './pages.router.module';
import { MyCounterComponent } from '../modules/my-counter/my-counter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyFormComponent } from '../modules/my-form/my-form.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from '../modules/my-counter/store/reduxer/counter-reducer';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  declarations: [HomePageComponent, MyCounterComponent, MyFormComponent]
})
export class PagesModule {}
