import { app, BrowserWindow } from 'electron';
import * as path from 'path';

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, './preload.js')
        }
    });
    console.log('NODE_ENE === ', process.env.NODE_ENV)
    if (process.env.NODE_ENV === 'development') {
        window.loadURL('http://127.0.0.1:3000/');
    } else {}
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})