import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

declare var audio_mode;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  updateAudioMode(mode: String) {
    audio_mode.change_audio_mode(mode, ()=>{}, ()=>{});
  }

}
