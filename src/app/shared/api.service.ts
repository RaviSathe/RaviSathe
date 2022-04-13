import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/posts"
  postuser(data:any)
  {
      return this.http.post<any>("http://localhost:3000/posts",data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  getuser()
  {
      return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  updateuser(data:any,id:number)
  {
      return this.http.put<any>("http://localhost:3000/posts/"+id,data)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  deleteuser(id:number)
  {
      return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
  }


  getcurrentdata(id:number)
  {
    return this.http.get(`${"http://localhost:3000/posts/"}/${id}`)   //update sathi ahe hee.
  }
}
