const http = require('http');
const fs = require('fs');
const path = require('path');
const WebSocketServer = require('websocket').server;

const server = http.createServer((req, res) => {
    res.writeHead(501, { 'Content-Type': 'text/plain; charset=UTF-8' });
    const reason = `\`${req.url}\` is not an implemented route`;
    res.end(reason);
});

const wsServer = new WebSocketServer({
    httpServer: server
  });

server.listen(8000);

const strConf = fs.readFileSync(path.join(__dirname, 'resources', 'tasks.json'), 'UTF-8', 'r').toString();
const tasks = JSON.parse(strConf);

wsServer.on('request', (request) => {
    var connection = request.accept(null, request.origin);
    connection.on('message', (message) => {
      if (message.type === 'utf8') {
          console.log(`WebSocket: ${message.utf8Data}`);
        let msg
        try {
            msg = JSON.parse(message.utf8Data);
        } catch (e) {
            connection.sendUTF(JSON.stringify({
                event: 'error',
                nm_error: e.message
            }));
            return;
        }
        switch(msg.event) {
            case 'getTask': 
                connection.sendUTF(JSON.stringify({
                    event: msg.event,
                    data: Object.values(tasks)
                }));
            break;
            case 'postTask':
            case 'updateTask':
                const items = [];
                msg.data.forEach(element => {
                    tasks[element.id] = {
                        ...(tasks[element.id] || {}),
                        ...element
                    };
                    items.push(tasks[element.id] );
                });
                connection.sendUTF(JSON.stringify({
                    event: msg.event, 
                    data: items
                }));
            break;
            case 'deleteTask':
                msg.data.forEach(element => {
                    delete tasks[element.id];
                });
                connection.sendUTF(JSON.stringify({
                    event: msg.event, 
                    data: msg.data
                }));
            break;
        }
      }
    });
  });

const { spawn } = require('child_process');
const sencha = spawn('sencha', ['app', 'watch'], {
    cwd: path.join(__dirname, '..', 'frontend', 'app'),
    detached: false
});

sencha.stdout.on('data', (data) => {
  console.log(`sencha stdout: ${data}`);
});

sencha.stderr.on('data', (data) => {
  console.log(`sencha stderr: ${data}`);
});

sencha.on('close', (code) => {
  console.log(`sencha child process exited with code ${code}`);
});

