import { NgModule } from '@angular/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { ProfileModule } from '../pages/profile/profile.module';
import { ContactModule } from './contact/contact.module';


@NgModule({
  
  imports     : [
    
    FuseSharedModule,
    ProfileModule,
    ContactModule
],
declarations: []
})
export class ApiModule 
{
}
