import { Component } from '@angular/core';
import {ImageService} from './image.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab-hall-of-fame';
  image: any = [];
  constructor(private imageservice: ImageService) { }

  ngOnInit(): void {
  }
  getImage(){
   this.image = this.imageservice.getImage();
   console.log(this.image);
}
}
