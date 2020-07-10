const { app, BrowserWindow } = require('electron');

process.env.NODE_ENV = 'development'

const isDev = process.env.NODE_ENV !== 'production' ? true : false
const isMac = process.platform === 'darwin' ? true : false


let mainWindow

function createMainWindow() {


    mainWindow = new BrowserWindow({

        width: 500,
        height: 600,
        title: 'Image Shrink',
        webPreferences: {
            nodeIntegration: true
        },
        icon: './assets/icons/camera-icon.png',
        resizable: isDev ? true : false
    })



    mainWindow.loadFile(`./frontpage/index.html`)


    mainWindow.webContents.openDevTools()
}


app.whenReady().then(createMainWindow)



app.on('window-all-closed', () => {

    if (process.platform !== 'darwin') {

        app.quit()
    }
})


app.on('activate', () => {


    if (BrowserWindow.getAllWindows().length === 0) {

        createMainWindow()

    }
})