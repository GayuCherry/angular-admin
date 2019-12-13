import{Injectable} from '@angular/core';
import { Question } from './question.model';
import {Admin} from './admin.model';
import{HttpClient} from "@angular/common/http"

@Injectable({
    providedIn:'root'
})

export class QuestionService{

    formData:Question;
    list: Question[];
    admin:any;
    readonly rootURL="https://localhost:44354/api"

    constructor(private http : HttpClient){
        this.admin=[];
    }

getUserdetails(){
    return this.http.get(this.rootURL+'/register');   
}   
getUserData(){
    this.getUserdetails().subscribe((response)=>
    {
        this.admin=response;
        console.log(this.admin);
    });
    return this.admin;

} 
getAdmindetails(){
    return this.http.get(this.rootURL+'/Admin');
}
getAdminData(){
    this.getAdmindetails().subscribe((response)=>
    {
        this.admin=response;
        console.log(this.admin);
    });
    return this.admin;

} 
getScoredetails(){
    return this.http.get(this.rootURL+'/score');
}
getScoreData(){
    this.getScoredetails().subscribe((response)=>
    {
        this.admin=response;
        console.log(this.admin);
    });
    return this.admin;

} 
getPaidUsers(){
    return this.http.get(this.rootURL+'/paiduser');
}
getPaidUsersData(){
    this.getPaidUsers().subscribe((response)=>
    {
        this.admin=response;
        console.log(this.admin);
    });
    return this.admin;

} 
getQuestiontype(testmodel:string){
    testmodel = testmodel.toLowerCase();
    console.log(testmodel);
    return this.http.get(this.rootURL+'/values?testtype='+testmodel);
}
postQuestion(formData : Question){
   return this.http.post(this.rootURL+'/values',formData);
}
putQuestion(formData : Question){
    return this.http.put(this.rootURL+'/values/'+formData.SNo,formData);
 }
// deleteQuestion(SNo : number, formData){
//     let httpParams = new HttpParams();
//     httpParams.set('SNO', SNo.toString());
//     let headers = new Headers({ 'Content-Type': 'text/plain;charset=UTF-8' });

// let options = { params: httpParams };

//     return this.http.delete(this.rootURL+'/values/'+SNo, {params:{'SNo': SNo.toString()}, headers: {'Content-Type': 'application/json'}});
//  }
// deleteQuestion(formData:Question){  
//    // const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
//     return this.http.delete(this.rootURL+ '/values/'+formData.SNo); 
  
//   } 
deleteQuestion(SNo:number){
    console.log(SNo)
    
    this.http.delete("https://localhost:44354/api/Values?Sno="+SNo).subscribe((res)=>{
        console.log(res);
    })

} 
refreshList(){
    return this.http.get(this.rootURL+'/values').toPromise().then(res=>this.list=res as Question[]);
}
}