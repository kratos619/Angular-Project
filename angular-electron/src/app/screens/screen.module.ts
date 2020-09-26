import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AssesmentComponent } from './assesment/assesment.component';
import { EmailComponent } from './email/email.component';
import { ChatComponent } from './chat/chat.component';
import { MediaComponent } from './media/media.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [HomeComponent, AssesmentComponent, EmailComponent, ChatComponent, MediaComponent, SettingComponent, ProfileComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class ScreenModule { }
