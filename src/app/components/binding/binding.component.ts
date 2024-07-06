import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  isEditable = true;

  str: string = "";

  userName: string = "";
  userNick: string = "";
  userEmail: string = "";

  // issetDatas :string[] = [];

  public isShowData = false;

  getDatas() {
    this.isShowData = !this.isShowData;
    // this.issetDatas = [
    //   this.userName,
    //   this.userNick,
    //   this.userEmail
    // ]
  }

}
