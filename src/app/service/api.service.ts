import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  //create
  createuser(data:any){
    return this.http.post<any>('http://localhost:3000/empy',data)
  }

  //display
  getuser(){
    return this.http.get<any>('http://localhost:3000/empy')
  }

  //delete
  delete(user:any){
    return this.http.delete<any>('http://localhost:3000/empy/'+user.id)
  }

  //pass through params
  fetchdata(id:number){
    return this.http.get<any>('http://localhost:3000/empy/'+id)
  }


}
