import { Component } from '@angular/core';
import { IEmployee } from './component/employeemodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularCRUDapp';
  public empy: IEmployee = {} as IEmployee
}
