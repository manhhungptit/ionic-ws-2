import { WebSocketServer } from '@ionic-native/web-socket-server/ngx';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WebsocketServerService {

  constructor(private wsserver: WebSocketServer) {}

  async init() {
    if ((window as any)?.cordova) {
      console.log('Websocket init');
      this.wsserver.start(8888, {}).subscribe({
        next: server => console.log(server, `Websocket Server: Listening on ${server.addr}:${server.port}`),
        error: error => console.log(`Websocket Server: Unexpected error`, error),
      });

      console.log('Websocket Server: start handler');

      // --> this is never called
      this.wsserver.watchMessage().subscribe(msg => {
        console.log('Websocket Server: got msg: ', msg);
      });

    } else {
      console.log('Websocket Server: cant start, cordova not available');
    }
  }

  public stop() {
    return this.wsserver.stop();
  }

  public send() {}

}

