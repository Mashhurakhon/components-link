import { Injectable } from '@angular/core';
import { signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  
  // price: number = 100;
  // count = signal(0);
  // total = computed(() => { this.price * this.count() });

  // plus() {
  //   this.count.update(value => value + 1);
  // }

  // minus() {
  //   if (this.count() > 0) {
  //     this.count.update(value => value - 1);
  //   }
  // }

  // getCount() {
  //   return this.count();
  // }
  // setTotal(){
  //   return this.total();
  // }
  
  // setCount(value: number): void {
  //   this.count.set(value);
  // }
}
