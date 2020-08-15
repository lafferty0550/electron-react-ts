import {app, BrowserWindow} from 'electron';
import path from 'path';
import url from 'url';

let mainWindow: Electron.BrowserWindow | null;

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
        mainWindow.loadURL(
            url.format({
                pathname: path.join(__dirname, '../index.html'),
                protocol: 'file:',
                slashes: true
            })
        );
    }

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', () => {
    createWindow();
});
app.allowRendererProcessReuse = true;