import { WebSocketServer } from '@ionic-native/web-socket-server/ngx';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class WebsocketServerService {

  constructor(private wsserver: WebSocketServer) {}

  init() {
    if ((window as any)?.cordova) {
      console.log('Websocket init', this.wsserver);
      const self = this;
      this.wsserver.start(8080, {
        onMessage: (x) => {
          // this is where callback function is called
          console.log("ON_MESSAGE", x)
        },
        onOpen: (x) => {
          console.log("ON_OPEN", x)
        }
      }).subscribe({
        next: server => {
          console.log(server, `Websocket Server: Listening on ${server.addr}:${server.port}`);
          
          // console.log('WSServer', JSON.stringify(self.wsserver))
          // for (const key in self.wsserver) {
          //   console.log('Key', key, self.wsserver[key]);
          // }
          // console.log('WSServer', JSON.stringify(self.wsserver.toString()))
          // self.wsserver.watchMessage().subscribe({
          //   next: result => {
          //     console.log('Websocket Server: got msg: ', result);
          //   },
          //   error: err => {
          //     console.log('Oh no', err.toString())
          //   }
          // });
          // self.wsserver.watchMessage().subscribe(msg => {
          //   console.log('Websocket Server: got msg: ', msg);
          // });
        },
        error: error => console.log(`Websocket Server: Unexpected error`, error),
      });

      console.log('Websocket Server: start handler');

      // // --> this is never called
      // this.wsserver.watchMessage().subscribe(msg => {
      //   console.log('Websocket Server: got msg: ', msg);
      // });

      

    } else {
      console.log('Websocket Server: cant start, cordova not available');
    }
  }

  public stop() {
    return this.wsserver.stop();
  }

  public send() {}

}

