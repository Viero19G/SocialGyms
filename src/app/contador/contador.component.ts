import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
})
export class ContadorComponent implements OnInit {

    @Input() id: number;
    @Input() Name: string;
    @Input() Score: number;


    increment(){
      this.Score++;
    }

    decrement (){
      this.Score--;
    }

  constructor() { }

  ngOnInit() {}

}
