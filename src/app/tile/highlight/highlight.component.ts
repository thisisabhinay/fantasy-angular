import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.sass']
})
export class HighlightComponent implements OnInit {

  @Input("isLastChild") isLastChild: string;

  constructor() { }

  ngOnInit(): void {
  }

}
