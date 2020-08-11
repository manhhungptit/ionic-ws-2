import { NgModule } from '@angular/core';
import { WebsocketServerService } from './websocket-server.service';
import { WebSocketServer } from '@ionic-native/web-socket-server/ngx';


@NgModule({
  providers: [
    WebSocketServer,
    WebsocketServerService,
  ],
})
export class WebsocketServerModule {}
