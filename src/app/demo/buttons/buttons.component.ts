import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: `<button mat-button>
  Click me!></button>
  <mat-checkbox>Check me!</mat-checkbox>
  `,
  styleUrls: []
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
