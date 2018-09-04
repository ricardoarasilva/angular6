// index.component.ts

import { Component, OnInit } from '@angular/core';
import { AdUnit } from './AdUnit';
import { NavigationEnd, Router } from '@angular/router';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];

  constructor(private adunitservice: AdunitService,router:Router) { 
    router.events.subscribe(val => {
      this.ngOnInit();
    });
  }

  ngOnInit() {
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
      this.adunits = data;
    });
  }

  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
      this.ngOnInit();
    });
  }
}