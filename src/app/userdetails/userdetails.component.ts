import { Component, OnInit } from '@angular/core';
import {QuestionService} from '../services/question.service';
import {Admin} from '../services/admin.model';
import{Router} from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  admin:Admin[];
  constructor(private questionservice:QuestionService, private myRoutes:Router) { 

      this.admin=this.questionservice.getUserData();
      console.log(this.admin);
  }
  ngOnInit() {
  }

}