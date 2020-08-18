const electron = require('electron');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;
console.log(__dirname)
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });

    mainWindow.webContents.openDevTools();
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL(`http://localhost:4000`);
    } else {
        mainWindow.loadURL(`file://${path.join(__dirname, '/renderer/index.html')}`);
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', () => {
    createWindow();
});
app.allowRendererProcessReuse = true;