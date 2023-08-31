const { contextBridge, ipcRenderer} = 'electron';
const MINUS = document.getElementById("minimize");
const CLOSE_APP = document.getElementById("close-app");
const LINK = document.getElementById("link");
const CHILD = document.getElementById("child");
const JT = document.getElementById("jt");

MINUS.addEventListener("click", minimize);
CLOSE_APP.addEventListener("click", close_app);
LINK.addEventListener("click", ea);
CHILD.addEventListener("click", cw);
JT.addEventListener("click", jtprep);

function ea () {
    app.mainWindow.link();
}
function jtprep () {
    app.mainWindow.jt();
}
function cw () {
    app.mainWindow.child();
}
function close_app () {
    app.mainWindow.close();
}
function minimize () {
    app.mainWindow.minimize();
}
