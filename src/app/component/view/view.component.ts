import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { IEmployee } from '../../component/employeemodel';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  public empy: IEmployee = {} as IEmployee
  myemployee: any;

  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getmyuser();
  }

  getmyuser(){
    this.api.getuser().subscribe((res:any)=>{
      this.myemployee = res;
    })
  }

  deleteuser(user:any){
    if(confirm('Are you sure to delete?'))
      this.api.delete(user).subscribe(()=>{
        this.getmyuser();
      })
  }

}
