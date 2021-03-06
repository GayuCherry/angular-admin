import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Admin} from '../services/admin.model';
import{Router} from '@angular/router';

@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.scss']
})
export class PaymentdetailsComponent implements OnInit {
  admin:Admin[];
  constructor(private questionservice:QuestionService, private myRoutes:Router) { 

      this.admin=this.questionservice.getPaidUsersData();
      console.log(this.admin);
  }
  ngOnInit() {
  }

}
