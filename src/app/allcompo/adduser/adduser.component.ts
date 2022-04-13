import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { xyzModel } from 'src/app/shared/xyz.model';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {

 

basic=new FormGroup({
  firstname : new FormControl('',Validators.required),
  lastname : new FormControl(''),
  email : new FormControl(''),
  contact : new FormControl('')
})

constructor(private api:ApiService,private fbobj:FormBuilder) { }

ngOnInit(): void {
}

submitfunc()
{
  console.log(this.basic.value)
  
}

xyzobj:xyzModel =new xyzModel();
postuserdetails()
{
  this.xyzobj.firstname=this.basic.value.firstname
  this.xyzobj.lastname=this.basic.value.lastname
  this.xyzobj.email=this.basic.value.email
  this.xyzobj.contact=this.basic.value.contact


  this.api.postuser(this.xyzobj)
  .subscribe(res=>{
    console.log(res);
    alert("user addes Successfully")
    this.basic.reset(); 
    
  })
}


updateuser()
{
  this.xyzobj.firstname=this.basic.value.firstname
this.xyzobj.lastname=this.basic.value.lastname
this.xyzobj.email=this.basic.value.email
this.xyzobj.contact=this.basic.value.contact


this.api.updateuser(this.xyzobj,this.xyzobj.id)
  .subscribe(res=>{
    alert("Successfully updated")
  })
}

}
