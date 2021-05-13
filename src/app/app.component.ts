import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task2';
  val = 0;
  disb = true;

  inc(){
    this.val+=1;
    if(this.val>0)
      this.disb=false;
  }
  dec(){
    this.val-=1;
    if(this.val<=0)
      this.disb=true;
  }
}
