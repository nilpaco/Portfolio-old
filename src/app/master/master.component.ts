import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent {
  items: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/projects');
  }
}
