import { Component, OnInit } from '@angular/core';
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


  constructor() { }

  ngOnInit(): void {
  }

}
