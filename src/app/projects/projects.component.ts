import { Component, OnInit } from '@angular/core';
import { MnFullpageService } from 'ng2-fullpage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private fullpageService: MnFullpageService, private router: Router) { }

  ngOnInit() {
    if (this.router.navigated) {
      this.fullpageService.destroy('all');
    }
  }

}
