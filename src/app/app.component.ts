import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  screenWidth = document.body.clientWidth;
  title = 'App-Compatible';
  counter: number = 0;
  isActive = false;

  color1:string = '#141414';
  color2:string = '#141414';

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    document.body.style.background = `linear-gradient(45deg, ${this.color1}, ${this.color2})`;
  }

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
      if(newInput != null && this.screenWidth >= 1024){
        newInput.style.position = "relative";
        newInput.style.color = "#E3E3E3";
        newInput.style.fontWeight = "bold";
        newInput.style.fontSize = "large";
        newInput.style.border = "none";
        newInput.style.background = "transparent";
        newInput.style.left = "4%";
        newInput.style.marginBottom = "5%";
      }
      else if(newInput != null && this.screenWidth >= 672 && this.screenWidth < 1023){
        newInput.style.position = "relative";
        newInput.style.color = "brown";
        newInput.style.fontSize = "large";
        newInput.style.fontWeight = "bold";
        newInput.style.border = "none";
        newInput.style.background = "transparent";
        newInput.style.left = "3%";
        newInput.style.marginBottom = "10%";
      }
      else if(newInput != null && this.screenWidth <= 671){
        newInput.style.position = "relative";
        newInput.style.color = "brown";
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

  showWidth(){
    alert(`${this.screenWidth}`);
  }

  
}

