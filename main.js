const { app, BrowserWindow } = require('electron');

function createWindow () {

  win = new BrowserWindow({ width: 1200, height: 900 });

  win.loadFile('views/index.html');
}

app.on('ready', createWindow);