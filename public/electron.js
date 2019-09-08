const {app, BrowserWindow, ipcMain} = require('electron');

const path = require('path');
const isDev = require('electron-is-dev');
const os = require('os')
const fs = require('fs')

let mainWindow;


function createWindow() {
  BrowserWindow.addDevToolsExtension('/Users/bagjeongtae/Library/Application Support/google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/3.6.0_0');
  BrowserWindow.addDevToolsExtension('/Users/bagjeongtae/Library/Application Support/google/Chrome/Default/Extensions/lmhkpmbekcpmknklioeibfkpmmfibljd/2.17.0_0');
  mainWindow = new BrowserWindow({
    width: 1200, 
    height: 920,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

ipcMain.on('/readFileReq', async (event, args) => {
  let { basePath, selectedFile } = args

  fs.readFile(`${basePath}${selectedFile}`, 'utf8', (err, data) => {
    event.sender.send('/readFileRes', {
      content: data
    })
  })

})