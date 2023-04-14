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
    alert("retrieving data");
      const input1Value = localStorage.getItem('input1');
      if (input1Value) {
        alert("input1");
        (document.querySelector('[name="input1"]') as HTMLInputElement).value = input1Value;
      }
    
      const input2Value = localStorage.getItem('input2');
      if (input2Value) {
        (document.querySelector('[name="input2"]') as HTMLInputElement).value = input2Value;
      }
    
      const input3Value = localStorage.getItem('input3');
      if (input3Value) {
        (document.querySelector('[name="input3"]') as HTMLInputElement).value = input3Value;
      }
    
      const input4Value = localStorage.getItem('input4');
      if (input4Value) {
        (document.querySelector('[name="input4"]') as HTMLInputElement).value = input4Value;
      }
    
      const input5Value = localStorage.getItem('input5');
      if (input5Value) {
        (document.querySelector('[name="input5"]') as HTMLInputElement).value = input5Value;
      }

      const input6Value = localStorage.getItem('input6');
      if (input6Value) {
        (document.querySelector('[name="input6"]') as HTMLInputElement).value = input6Value;
      }

      const input7Value = localStorage.getItem('input7');
      if (input7Value) {
        (document.querySelector('[name="input7"]') as HTMLInputElement).value = input7Value;
      }

      const input8Value = localStorage.getItem('input8');
      if (input8Value) {
        (document.querySelector('[name="input8"]') as HTMLInputElement).value = input8Value;
      }

      const input9Value = localStorage.getItem('input9');
      if (input9Value) {
        (document.querySelector('[name="input9"]') as HTMLInputElement).value = input9Value;
      }
      const input10Value = localStorage.getItem('input10');
      if (input10Value) {
        (document.querySelector('[name="input10"]') as HTMLInputElement).value = input10Value;
      }

    this.onLoad();
  }

  saveToLocalStorage(inputName: string) {
    alert(`Saving input ${inputName} to localStorage`);
    const inputValue = (document.querySelector(`[name="${inputName}"]`) as HTMLInputElement).value;
    alert(`Input value is ${inputValue}`);
    localStorage.setItem(inputName, inputValue);
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