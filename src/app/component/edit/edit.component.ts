import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public empy: IEmployee = {} as IEmployee;
  public dataid : any;
  public data : any;

  usergender:gender[]= [
      {value: 'male', viewvalue: 'male'},
      {value: 'female', viewvalue: 'female'}
  ]

  userposition:position[]= [
    {value: 'Angular developer', viewvalue: 'Angular developer'},
    {value: 'Java developer', viewvalue: 'Java developer'},
    {value: 'React developer', viewvalue: 'React developer'},
]


  constructor(private api : ApiService,
    private activatedRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:Params)=>{
      this.dataid = param['get']('dataid');
    })
    this.api.fetchdata(this.dataid).subscribe((data:any)=>{
      this.empy = data;
      console.log(data);
    })
  }


  updatedata(){
    this.api.update(this.empy,this.dataid).subscribe((data:any)=>{
      this.router.navigate(['/view'])
    })
  }
}
