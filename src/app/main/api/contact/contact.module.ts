import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';
import { MatExpansionModule, MatIconModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';

const routes : Routes = [
  {
      path     : 'contact',
      component: ContactComponent,
      
  }
];

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    RouterModule.forChild(routes),

        MatExpansionModule,
        MatIconModule,

        FuseSharedModule
  ]
})
export class ContactModule { }
