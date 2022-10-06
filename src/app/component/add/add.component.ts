import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { IEmployee } from '../../component/employeemodel';
interface gender{
  value: string;
  viewvalue: string;
}
interface position{
  value: string;
  viewvalue: string;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public empy: IEmployee = {} as IEmployee

  usergender:gender[]= [
      {value: 'male', viewvalue: 'male'},
      {value: 'female', viewvalue: 'female'}
  ]

  userposition:position[]= [
    {value: 'Angular developer', viewvalue: 'Angular developer'},
    {value: 'Java developer', viewvalue: 'Java developer'},
    {value: 'React developer', viewvalue: 'React developer'},
]

  constructor(private api : ApiService, private router : Router) { }

  ngOnInit(): void {
  }

  add(){
    this.api.createuser(this.empy).subscribe((data:IEmployee)=>{
      console.log(data);
      this.router.navigate(['/view'])
    },
    err=>{
      alert("something went wrong"),
      this.router.navigate(['/'])
    }
    )
  }

}
