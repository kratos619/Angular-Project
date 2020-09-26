import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components";
import { MenuoneComponent } from "./menuone/menuone.component";

const routes: Routes = [
  {
    path: "homeOne",
    component: MenuoneComponent,
  },
  {
    path: "assignment",
    component: MenuoneComponent,
  },
  {
    path: "mail",
    component: MenuoneComponent,
  },
  {
    path: "media",
    component: MenuoneComponent,
  },
  {
    path: "setting",
    component: MenuoneComponent,
  },
  {
    path: "account",
    component: MenuoneComponent,
  },
  {
    path: "chat",
    component: MenuoneComponent,
  },
  {
    path: "",
    redirectTo: "homeOne",
    pathMatch: "full",
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
