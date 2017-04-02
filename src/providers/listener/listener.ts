import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BackgroundMode } from '@ionic-native/background-mode';
import 'rxjs/add/operator/map';

import { AudioModeProvider } from '../audiomode/audiomode';

@Injectable()
export class ListenerProvider {

  private server_uri = "https://brainere.herokuapp.com/";
  private waiting_time = 1500;
  public listening = false;

	constructor(public http: Http,
              public audiomode: AudioModeProvider,
              public backgroundMode: BackgroundMode) {
	}

  enable() : void {
    this.listening = true;
    this.backgroundMode.enable();
    this.listen_server();
  }

  disable() : void {
    this.listening = false;
    this.backgroundMode.disable();
  }

  listen_server(): void {
    if(this.listening) {
      this.http.get(this.server_uri)
        .map(res => res.json())
        .subscribe(data => {
           if(data.state == "1") {
             this.audiomode.updateAudioMode('silent');
           } else if(data.state == "0") {
             this.audiomode.updateAudioMode('normal');
           }
           setTimeout(() => {this.listen_server()}, this.waiting_time);
        }, error => {
           setTimeout(() => {this.listen_server()}, this.waiting_time);
        });
    }
  }

}
