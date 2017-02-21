import { Component, OnInit } from '@angular/core';
import { MnFullpageService } from 'ng2-fullpage';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  items: FirebaseListObservable<any[]>;

  constructor(private fullpageService: MnFullpageService, private router: Router, af: AngularFire) {
    this.items = af.database.list('/projects');  
  }

  ngOnInit() {
    if (this.router.navigated) {
      this.fullpageService.destroy('all');
    }
  }

}
