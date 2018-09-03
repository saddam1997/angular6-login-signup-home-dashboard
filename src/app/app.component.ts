import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, Subject, Subscription, of } from 'rxjs/index';
import { filter, switchMap, map, withLatestFrom } from 'rxjs/internal/operators';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations'

export interface Order {
  name: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {


  constructor(
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
   
  }

  ngOnDestroy() {
    
  }


}
