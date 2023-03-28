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
  optionsVisible = false;

  bgcolor1:string = '#141414';
  bgcolor2:string = '';
  deg:string = '';
  headercolor:string = 'black';
  btncolor:string = 'black';
  btnscolor:string = 'black';

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    if(this.bgcolor1 != '' && this.bgcolor2 != '' && this.deg != ''){
      document.body.style.background = `linear-gradient(${this.deg}, ${this.bgcolor1}, ${this.bgcolor2})`; 
    }
    else{
      document.body.style.background = `${this.bgcolor1}`;
    }
    
    let header = document.getElementById('header');
    let btn = document.getElementsByClassName('line') as HTMLCollectionOf<HTMLDivElement>;
    let btns = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLButtonElement>;
    if(header != null && btn != null && btns != null){
      header.style.color = `${this.headercolor}`;
      for(let i = 0; i < btn.length; i++){
        btn[i].style.background = `${this.btncolor}`;
      }
      for(let j = 0; j < btns.length; j++){
        btns[j].style.color = `${this.btnscolor}`;
      }
    }
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
    this.optionsVisible = true;
  }

  saveOptions(header:string, color1:string, color2:string, degrees:string, btnColor:string){
    this.headercolor = header;
    if(color1 != '' && color2 != '' && degrees != ''){
      this.bgcolor1 = color1;
      this.bgcolor2 = color2;
      this.deg = degrees;
    }
    else {
      this.bgcolor1 = color1;
    }
    this.btnscolor = btnColor;
    this.onLoad();
    this.optionsVisible = false;
  }
}

