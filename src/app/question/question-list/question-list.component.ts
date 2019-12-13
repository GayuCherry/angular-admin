import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Question } from 'src/app/services/question.model';
import{ToastrService} from 'ngx-toastr';
// import { NotifierModule } from "angular-notifier";
// import { NotifierService } from "angular-notifier";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {
  ques:Question;
  
  constructor(private services : QuestionService,private toastr : ToastrService) { }
  
  ngOnInit() {
    this.services.refreshList();
    this.sortList();
  }
populateForm(ques : Question){
  console.log("list : ",this.services.list);
  this.services.formData = Object.assign({},ques);
  this.sortList();
}
QuestionForm(ques : Question){
  console.log("list : ",this.services.list);
  this.services.formData = Object.assign({},ques);
}
onDelete(SNo){
var txt;
var r=confirm("Are you sure want to delete this?")
if(r==true){
  this.services.deleteQuestion(SNo);
  this.toastr.warning('Deleted Successfully','EXM.Delete')
  this.services.refreshList();
  this.sortList();
  // console.log("ok");
  // this.services.refreshList();
}
else{
  console.log("cancel");
}
this.services.refreshList();
}

// onDelete(ques:Question) {  
//   if (confirm("Are you sure you want to delete this ?")) {   
//   this.services.deleteQuestion(ques).subscribe((res) => {  
//    // this.services.refreshList();
    
//   });  
sortList(){
  if(this.services.list){
    this.services.list.sort();
  }
  return this.services.list;
}
}