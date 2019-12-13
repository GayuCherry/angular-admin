import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Question } from 'src/app/services/question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  quest:Question;
  ids:any = [];

  constructor(private services:QuestionService,private toastr : ToastrService) {
  }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form?: NgForm){
  if(form != null)
  form.resetForm();
  this.services.formData = {
    SNo:null,
    Testmodel:'',
    Questions:'',
    Answers:'',
    Option1:'',
    Option2:'',
    Option3:'',
    Option4:'',
    Mark:null
  }
}

getAllIds(){
  let arr:any = this.services.list;
  if(this.ids.length === 0){
    arr.forEach(obj => {
      this.ids.push(obj.SNo);
    });
  }
  console.log("ids : ",this.services.list);
}

onSubmit(form :NgForm){
  this.getAllIds();
  if(this.ids.indexOf(this.services.formData.SNo) === -1)
  this.insertRecord(form);
  else
  this.updateRecord(form); 
}
insertRecord(form :NgForm){
this.services.postQuestion(form.value).subscribe(res=>{
  this.toastr.success('Added Successfully','Examen.AddQues')
  this.resetForm(form);
  this.services.refreshList();
});
}
updateRecord(form :NgForm){
  this.services.putQuestion(form.value).subscribe(res=>{
    this.toastr.info('Updated Successfully','Examen.UpdateQues')
    this.resetForm(form);
    this.services.refreshList();
  });
}
}

  