const { app, BrowserWindow } = require('electron');
const Connection = require('./config/connection');

let connection = new Connection;
let db = connection.sqlConnection();

db.connect((err) => {
  if(err) throw err;
  console.log('Connection with batabase etablished !');
});

function createWindow () {

  win = new BrowserWindow({ width: 1200, height: 900, show: false, autoHideMenuBar: true, icon: './ressources/poker_icon2.png' });

  win.loadFile('views/pages/index.html');
  win.openDevTools();
  win.once('ready-to-show', ()=> {
    win.show();
  })
}

app.on('ready', createWindow);