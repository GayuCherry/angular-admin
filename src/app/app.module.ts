import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Route,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'; 
import { QuestionComponent } from './question/question.component';
import{ToastrModule} from 'ngx-toastr';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { QuestionsComponent } from './question/questions/questions.component';
import { QuestionListComponent } from './question/question-list/question-list.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { QuestionService } from './services/question.service';
import { HomeComponent } from './home/home.component';
import { AdmindetailsComponent } from './admindetails/admindetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { ScoredetailsComponent } from './scoredetails/scoredetails.component';


const myRoutes:Route[]=[ {path:'home',component:HomeComponent},
                         {path:'admin',component:AdmindetailsComponent},
                         {path:'users',component:UserdetailsComponent},
                         {path:'payment',component:PaymentdetailsComponent},
                         {path:'score',component:ScoredetailsComponent},
                         {path:'ques',component:EditQuestionComponent},
                         {path:'quest',component:QuestionsComponent}, 
                         {path:'edit',component:QuestionComponent} 
                    ]
                    
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    QuestionListComponent,
    HomeComponent,
    AdmindetailsComponent,
    UserdetailsComponent,
    PaymentdetailsComponent,
    ScoredetailsComponent,
    EditQuestionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(myRoutes),
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AngularMaterialModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  exports:[
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }

