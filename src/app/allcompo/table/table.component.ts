import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import { xyzModel } from 'src/app/shared/xyz.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  basic !:FormGroup
  userdataall:any;

  

  constructor(private api:ApiService,private fbobj:FormBuilder,private rout:ActivatedRoute) { }
  ngOnInit(): void {
    
    // this.api.getcurrentdata(this.rout.snapshot.params.id)
    
    // .subscribe((result)=>{
    //   console.log(result)
      
      
    //   this.userdataall=new FormGroup({
    //     firstname:new FormControl(result['firstname']),
    //     lastname:new FormControl(result['lastname']),
    //     email:new FormControl(result['email']),
    //     contact:new FormControl(result['contact'])
    //   })
    // })

    this.basic=this.fbobj.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      contact:['']
    })
      this.getAllUser();
    }

  getAllUser()
  {
    this.api.getuser()
    .subscribe((res)=>{
      this.userdataall=res
      console.log(this.userdataall)
    })
    // console.log(this.userdataall)
  }

  deleteuser(row : any)
  {
    this.api.deleteuser(row.id).subscribe(res=>{alert("Employee delete")})
   this.getAllUser()
  } 

  edituser(row:any)
  {

    this.xyzobj.id=row.id
    console.log(this.xyzobj)
      this.basic.controls['firstname'].setValue(row.firstname)
      this.basic.controls['lastname'].setValue(row.lastname)
      this.basic.controls['email'].setValue(row.email)
      this.basic.controls['contact'].setValue(row.contact)
  }
  xyzobj:xyzModel =new xyzModel();
 

}

