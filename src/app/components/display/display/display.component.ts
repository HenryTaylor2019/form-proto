import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Form } from 'src/app/models/form';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  @Input() 
  public forms$!: Observable<Form[]>;

  constructor() {}

  ngOnInit(): void {
  }

  show() {
    this.forms$.subscribe(sub => console.log(sub));
  }
}
