import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-thoughts',
  templateUrl: './my-thoughts.component.html',
  styleUrls: ['./my-thoughts.component.css']
})
export class MyThoughtsComponent implements OnInit {

  name: string

  @Input('ngModel') thoughts:string[ 
  ];

  constructor() { }

  ngOnInit() {
  }

}
