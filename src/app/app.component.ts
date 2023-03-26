import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  color1:string = 'grey';
  color2:string = 'pink';

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    document.body.style.background = `linear-gradient(45deg, ${this.color1}, ${this.color2})`;
  }

  title = 'App-Compatible';
  counter: number = 0;
  isActive = false;

  createInput() {
    if(this.counter < 5){
      this.counter = this.counter + 1 ;
      const input = document.createElement('input');
      input.type = 'text';
      input.id = `newInput${this.counter}`;
      input.placeholder = 'Add your task here :)';
      const container = document.getElementById("header");
      container?.appendChild(input);
      const newInput = document.getElementById(`newInput${this.counter}`);
      if(newInput != null){
        newInput.style.position = "relative";
        newInput.style.color = "brown";
        newInput.style.textShadow = "2px 2px 8px grey";
        newInput.style.fontWeight = "bold";
        newInput.style.border = "none";
        newInput.style.background = "transparent";
        newInput.style.left = "3%";
        newInput.style.marginBottom = "10%";
      }
    }
  }

  ToggleActive(){
    this.isActive =! this.isActive;
  }

  Exit(){
    window.close();
  }

  ToggleOptions(){
    const newcolor1 = prompt("Enter the first color:");
    const newcolor2 = prompt("Enter the second color:");
    if(newcolor1 != null && newcolor2 != null){
      this.color1 = newcolor1;
      this.color2 = newcolor2;
      document.body.style.background = `linear-gradient(45deg, ${this.color1}, ${this.color2})`;
    }
  }

  
}

