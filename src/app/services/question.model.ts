export class Question{
    SNo:number;
    Questions:string;
    Option1:string;
    Option2:string;
    Option3:string;
    Option4:string;
    Testmodel:string;
    Answers:string;
    Mark:number;
    constructor(qsNo?,qques?,qop1?,qop2?,qop3?,qop4?,qtest?,qans?,qmark?){
        this.SNo=qsNo;
        this.Questions=qques;
        this.Option1=qop1;
        this.Option2=qop2;
        this.Option3=qop3;
        this.Option4=qop4;
        this.Testmodel=qtest;
        this.Answers=qans;
        this.Mark=qmark;
    }

}