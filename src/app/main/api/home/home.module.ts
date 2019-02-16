import { NgModule } from '@angular/core';
import { HomeComponent } from 'app/main/api/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';

const routes: Routes = [
  {
      path     : 'home',
      component: HomeComponent
  }
];

@NgModule({
  declarations: [ 
    HomeComponent
   ],
  imports: [
    RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,

        FuseSharedModule
  ]
})
export class HomeModule { }
