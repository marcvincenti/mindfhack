import { Component } from '@angular/core';
import { AudioModeProvider } from '../../providers/audiomode/audiomode';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public audiomode: AudioModeProvider) {
  }

  updateAudioMode(mode: String) {
    this.audiomode.updateAudioMode(mode);
  }

}
