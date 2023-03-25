import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './views/menu/menu.component';
import { BannerComponent } from './views/banner/banner.component';
import { EmpComponent } from './views/emp/emp.component';
import { CardsComponent } from './views/cards/cards.component';
import { IndieComponent } from './views/indie/indie.component';
import { FooterComponent } from './views/footer/footer.component';

const routes: Routes = [
  {path:"menu", component: MenuComponent},
  {path:"banner", component: BannerComponent},
  {path:"emp", component: EmpComponent},
  {path:"cards", component: CardsComponent},
  {path:"indie", component: IndieComponent},
  {path:"footer", component: FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
