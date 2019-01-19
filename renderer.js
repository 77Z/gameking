const { remote/*, ipcRenderer*/ } = require('electron')

/*document.getElementById('menu').addEventListener('click', (event) => {
    ipcRenderer.send('display-app-menu', {
        x: event.x,
        y: event.y
    })
})*/

document.getElementById('minimize').addEventListener('click', () => {
    remote.getCurrentWindow().minimize()
})

document.getElementById('maximize').addEventListener('click', () => {
    const currentWindow = remote.getCurrentWindow()
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize()
    } else {
        currentWindow.maximize()
    }
})