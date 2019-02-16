import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder
  ) { 
  //   this._fuseConfigService.config = {
  //     layout: {
  //         navbar   : {
  //             hidden: true
  //         },
  //         toolbar  : {
  //             hidden: true
  //         },
  //         footer   : {
  //             hidden: true
  //         },
  //         sidepanel: {
  //             hidden: true
  //         }
  //     }
  // };
   }

  ngOnInit() {
  }

}
