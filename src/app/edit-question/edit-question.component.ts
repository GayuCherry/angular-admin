import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../services/question.service';


@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.scss']
})
export class EditQuestionComponent implements OnInit {
  TestModel:any;
  dat:any;
    constructor(private questionservice:QuestionService)
    { 
  
    }
    sendTestModel(event)
    {
      console.log("test ",this.TestModel);
      console.log("Event : ",event.target.value);
      this.questionservice.getQuestiontype(this.TestModel).subscribe((dat)=>
        {
          console.log("dat : ",dat);
          this.dat = dat;
        })
      }
      ngOnInit()  {
  }

}
