const db = require('./Classes/Database');
const WebSocket = require('ws');
const EventEmitter = require('events');
require("dotenv").config();

class Client extends EventEmitter {
  constructor(token) {
    super();
    this.token = MTE0MTIwODUwMTkyNzAyNjcyOA.Gl6vJ6.1Pw1ajsOoAymxLt6MXsGcMuzFjexSdXXZIJbU8;
    this.db = db.init();
  }

  init() {
    const socket = new WebSocket(`wss://gateway.discord.gg/?v=9&encoding=json`);
    socket.on('open', () => {
      socket.send(JSON.stringify({
        op: 2,
        d: {
          token: this.token,
          intents: 513,
          properties: {
            $os: 'linux',
            $browser: 'my_library',
            $device: 'my_library'
          }
        }
      }));
    });
    socket.on('message', (data) => {
      const packet = JSON.parse(data);
      const { t, s, op, d } = packet;
      
    });
  }
}

module.exports = { Client };
require("../Tests/index")
