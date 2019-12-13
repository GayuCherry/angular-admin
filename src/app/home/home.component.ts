import { Component, OnInit } from '@angular/core';
import{Router,RouterModule} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router: Router) { }

  adminClick(){
    this.router.navigate(['/admin']);
   }
  userClick(){
    this.router.navigate(['/users']);
   }
   paymentClick(){
    this.router.navigate(['/payment']);
   }
   scoreClick(){
    this.router.navigate(['/score']);
   }
  ngOnInit() {
  }

}
