import { Component, signal, computed } from '@angular/core';
import { SignalService } from '../../services/signal.service';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  public show = signal(false);

  change() {
    this.show.set(!this.show());
  }

  // isEditable = true;

  str: string = "";
  userName: string = '';
  userNick: string = '';
  userEmail: string = '';
  

  
  // count!: number;
  // constructor(private signalService: SignalService) {}
  // issetDatas :string[] = [];

  // public isShowData = false;

  // getDatas() {
  //   // this.isShowData = !this.isShowData;
  //   this.issetDatas = [
  //     this.userName.value = this.Name,
  //     this.userNick.value = this.Nick,
  //     this.userEmail.value = this.Email,
  //   ]
  // }

  // getCountQuery() {
  //   this.count = this.signalService.getCount();
  // }
  // getIncrement() {
  //   return this.setIncrement();
  // }

  // setIncrement() {
  //   this.signalService.plus();
  // }

  // setTotalQuery() {
  //   return this.signalService.setTotal();
  // }
}
