import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCounterComponent } from '../modules/my-counter/my-counter.component';
import { MyFormComponent } from '../modules/my-form/my-form.component';

const routes: Routes = [
  { path: 'my-form', component: MyFormComponent },
  { path: 'my-counter', component: MyCounterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
