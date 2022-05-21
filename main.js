const { app, BrowserWindow, globalShortcut } = require("electron");

const createWindow = () => {
    const win = new BrowserWindow({
        fullscreen: true
    });

    win.loadFile("main/index.html");
    win.menuBarVisible = false;
}

app.whenReady().then(() => {
    globalShortcut.register("Alt+F4", () => { return; });
}).then(() => {
    globalShortcut.register("Ctrl+Shift+i", () => { app.quit(); })
}).then(createWindow)