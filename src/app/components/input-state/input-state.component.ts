import { Component } from '@angular/core';
// import { InputState } from '../../models/input-state';
@Component({
  selector: 'app-input-state',
  templateUrl: './input-state.component.html',
  styleUrl: './input-state.component.css'
})
export class InputStateComponent {
  public inputContent!: string;
  public isDisabledBtn: boolean = true;
  public val: string = 'focus';
  public datas: string[] = [];
  addData() {
    this.datas.push(this.inputContent);
  }
  errorData(){
    this.val = 'warn';
    return (this.inputContent.length <= 3); 
  }
  nums: string = '1234567890'
  warnData() {
    this.val = 'error';
    return (this.nums.includes(this.inputContent[0]));
  }
  inputData() {
    if(!this.warnData()) {
      this.val = 'warn';
    }
    if(this.errorData()){
      this.val = 'error';
    }
    if (!this.warnData() && !this.errorData()) {
      this.val = 'success';
      this.isDisabledBtn = false;
    }
  }
}

