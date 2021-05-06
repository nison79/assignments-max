import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  username: string = '';
  buttonOn: boolean = false;
  showContent: boolean = false;
  log : number[] = [];

  constructor() {}

  ngOnInit(): void {}


  onToggle() {
    this.showContent = !this.showContent;
    this.log.push(this.log.length + 1)
    
  }
}
