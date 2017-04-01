import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AudioModeProvider } from '../audiomode/audiomode';

@Injectable()
export class ListenerProvider {

  private server_uri = "https://nemo.ngrok.io/";
  private waiting_time = 1500;

	constructor(public http: Http, public audiomode: AudioModeProvider) {
	}

  listen_server(): void {
    this.http.get(this.server_uri)
      .map(res => res.json())
      .subscribe(data => {
         if(data.state) {
           this.audiomode.updateAudioMode('silent');
         } else {
           this.audiomode.updateAudioMode('normal');
         }
         setTimeout(() => {this.listen_server()}, this.waiting_time);
      }, error => {
         setTimeout(() => {this.listen_server()}, this.waiting_time);
      });
  }

}
