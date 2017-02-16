import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MnFullpageService } from 'ng2-fullpage';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  item: FirebaseObjectObservable<any>;

  constructor(private location: Location, private fullpageService: MnFullpageService, af: AngularFire, private router: Router) {
        this.item = af.database.object('/projects');
   }

  goBack(): void {
      this.location.back();
  }

  ngOnInit() {
      if (this.router.navigated) {
        this.fullpageService.destroy('all');
      }
  }

}
