import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./shared/components";
import { MenuoneComponent } from "./menuone/menuone.component";
import { AssesmentComponent } from "./screens/assesment/assesment.component";
import { EmailComponent } from "./screens/email/email.component";
import { MediaComponent } from "./screens/media/media.component";
import { SettingComponent } from "./screens/setting/setting.component";
import { ProfileComponent } from "./screens/profile/profile.component";
import { ChatComponent } from "./screens/chat/chat.component";

const routes: Routes = [
  {
    path: "home",
    component: MenuoneComponent,
  },
  {
    path: "assignment",
    component: AssesmentComponent,
  },
  {
    path: "mail",
    component: EmailComponent,
  },
  {
    path: "media",
    component: MediaComponent,
  },
  {
    path: "setting",
    component: SettingComponent,
  },
  {
    path: "account",
    component: ProfileComponent,
  },
  {
    path: "chat",
    component: ChatComponent,
  },
  {
    path: "",
    redirectTo: "home",
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
