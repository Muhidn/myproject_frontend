import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  role!: string;

  // constructor(private route: ActivatedRoute) {
  //   this.role = this.route.snapshot.params["role"];
  // }

  constructor(){}

  ngOnInit(): void {
    this.role = localStorage.getItem('userRole') || '';
  }

}
