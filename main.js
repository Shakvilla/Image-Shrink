const { app, BrowserWindow } = require('electron');

function createMainWindow() {


    const mainWindow = new BrowserWindow({

        width: 700,
        height: 800,
        title: 'Image Shrink',
        backgroundColor: '#2e2c29',
        webPreferences: {
            nodeIntegration: true
        },
    })


    //Load the index.html of the app

    mainWindow.loadFile(`./frontpage/index.html`)


    // Open the DevTools
    // mainWindow.webContents.openDevTools()
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