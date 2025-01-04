import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReduxComponent } from './redux/redux.component';

const routes: Routes = [
  {path:'' , component : ReduxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
