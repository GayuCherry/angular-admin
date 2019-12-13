import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Admin} from '../services/admin.model';
import{Router} from '@angular/router';
@Component({
  selector: 'app-admindetails',
  templateUrl: './admindetails.component.html',
  styleUrls: ['./admindetails.component.scss']
})
export class AdmindetailsComponent implements OnInit {
  admin:Admin[];
  constructor(private questionservice:QuestionService, private myRoutes:Router) { 

      this.admin=this.questionservice.getAdminData();
      console.log(this.admin);
  }

  ngOnInit() {
  }

}
