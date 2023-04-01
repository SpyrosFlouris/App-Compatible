import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  screenWidth = document.body.clientWidth;
  title = 'App-Compatible';
  isActive = false;
  optionsVisible = false;

  bgcolor1:string = '#141414';
  bgcolor2:string = '';
  deg:string = '';
  headercolor:string = 'grey';
  btncolor:string = 'grey';
  btnscolor:string = 'grey';

  ngOnInit() {
    this.onLoad();
  }

  onLoad() {
    if(this.bgcolor1 != '' && this.bgcolor2 != '' && this.deg != ''){
      document.body.style.background = `linear-gradient(${this.deg + "deg"}, ${this.bgcolor1}, ${this.bgcolor2})`; 
    }
    else if (this.bgcolor1 != ""){
      document.body.style.background = `${this.bgcolor1}`;
      this.bgcolor2 = '';
      this.deg = '';
    }
    
    let header = document.getElementById('header');
    let btn = document.getElementsByClassName('line') as HTMLCollectionOf<HTMLDivElement>;
    let btns = document.getElementsByClassName('slide') as HTMLCollectionOf<HTMLButtonElement>;
    if(header != null && btn != null && btns != null){
      if(this.headercolor != ""){
        header.style.color = `${this.headercolor}`;
      }
      if(this.btncolor != ""){
        for(let i = 0; i < btn.length; i++){
          btn[i].style.background = `${this.btncolor}`;
        }
      }
      if(this.btnscolor != ""){
        for(let j = 0; j < btns.length; j++){
          btns[j].style.color = `${this.btnscolor}`;
        }
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
  else if(color1 != '' && color2 != ''){
    this.bgcolor1 = color1;
    this.bgcolor2 = color2;
    this.deg = "45";
  }
    else {
      this.bgcolor1 = color1;
    }
    this.btnscolor = btnColor;
    this.onLoad();
    this.optionsVisible = false;
  }
}

