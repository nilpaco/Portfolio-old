import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MnFullpageService } from 'ng2-fullpage';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {
  constructor(private location: Location, private fullpageService: MnFullpageService) {
   }

  goBack(): void {
      this.location.back();
  }

  ngOnInit() {
    this.fullpageService.destroy('all');
  }

}
