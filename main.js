const {app, BrowserWindow, Menu} = require('electron');

const template = [
    {
        label: 'SOM HANDA DANDY STUFFFFFF',
        submenu: [
            {
                label: 'Reload',
                accelerator: "CmdOrCtrl+R",
                click() {
                    mainWindow.loadURL(`file://${__dirname}/index.html`)
                }
            },
            {
                label: "DEV TOOLS",
                accelerator: "CmdOrCtrl+Shift+I",
                click() {
                    mainWindow.webContents.openDevTools()
                }
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(template)

function createWindow () {
	
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1000, height: 800, frame: false})

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

    Menu.setApplicationMenu(menu);
    
    mainWindow.setProgressBar(0.37);

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}


app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  
  if (mainWindow === null) {
    createWindow();
  }
})