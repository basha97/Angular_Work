import { NgModule } from '@angular/core';
import { ProfileComponent } from 'app/main/pages/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { MatExpansionModule, MatIconModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

const routes : Routes = [
  {
      path     : 'profile',
      component: ProfileComponent,
      
  }
];

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    RouterModule.forChild(routes),

        MatExpansionModule,
        MatIconModule,

        FuseSharedModule
  ]
})
export class ProfileModule { }
