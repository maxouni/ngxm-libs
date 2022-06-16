import { Component } from '@angular/core';
import { PATH_INPUT, PATH_ROOT, PATH_TEXTAREA } from "../../app.constants";

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss']
})
export class PageMainComponent  {
  PATH_INPUT = PATH_ROOT + PATH_INPUT;
  PATH_TEXTAREA = PATH_ROOT + PATH_TEXTAREA;

  constructor() { }

  ngOnInit(): void {
  }

}
