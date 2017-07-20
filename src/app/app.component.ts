import { ConfigService } from './config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  name: string;

  constructor(private config: ConfigService) {
    console.log("AppComponent constructor");
  }

  ngOnInit(): void {
    this.name = this.config.name;
  }
}
