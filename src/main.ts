const { app, BrowserWindow } = require("electron")
const path = require("node:path")

const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    })

    const startScreenPath = path.join("src", "renderer", "home", "index.html");

    window.loadFile(startScreenPath)
}

app.whenReady().then(() => {
    createWindow()
})
