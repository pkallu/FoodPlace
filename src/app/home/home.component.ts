import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log('showProfile');

   }

  ngOnInit() {
  }
  changeTabs($event: any) {
    console.log('showSearchRecipe');
    this.router.navigate(['./searchrecipe'], {relativeTo: this.route});
  }
  showProfile() {
    console.log('showProfile');
    this.router.navigate(['./profile'], {relativeTo: this.route});
  }
}
