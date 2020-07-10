const { app, BrowserWindow } = require('electron');

function createMainWindow() {


    const mainWindow = new BrowserWindow({

        width: 500,
        height: 600,
        title: 'Image Shrink',
        webPreferences: {
            nodeIntegration: true
        }
    })


    //Load the index.html of the app

    mainWindow.loadFile('index.html')


    // Open the DevTools
    mainWindow.webContents.openDevTools()
}

/**
 * This will be called when Electron has finished
 * initialization and is ready to create browser windows
 * Some APIs can be used after this event occurs
 * */
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