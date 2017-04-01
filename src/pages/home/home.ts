import { Component } from '@angular/core';
import { ListenerProvider } from '../../providers/listener/listener';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public listener: ListenerProvider) {
  }

}
