import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './allcompo/about/about.component';
import { AdduserComponent } from './allcompo/adduser/adduser.component';
import { ContactComponent } from './allcompo/contact/contact.component';
import { TableComponent } from './allcompo/table/table.component';
import { UpdateComponent } from './allcompo/update/update.component';

const routes: Routes = [
  {
    path:'adduser',
    component:AdduserComponent                                 //ikde yevun active jhalay te
  },
  {
    path:'table',
    component:TableComponent                               //ikde yevun active jhalay te
  },
  {
    path:'about',
    component:AboutComponent                                 //ikde yevun active jhalay te
  },
  {
    path:'contact',
    component:ContactComponent                                 //ikde yevun active jhalay te
  },
  {
    path:'update/:id',
    component:UpdateComponent                                 //ikde yevun active jhalay te
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
