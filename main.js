const { app, BrowserWindow } = require('electron')

process.env.NODE_ENV = 'production';

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname+'/img/Gear.ico',
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
