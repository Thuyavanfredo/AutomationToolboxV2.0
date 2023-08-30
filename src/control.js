const { contextBridge, ipcRenderer} = 'electron';
const MINUS = document.getElementById("minimize");
const CLOSE_APP = document.getElementById("close-app");
const LINK = document.getElementById("link");
// const MAIL = document.getElementById("mail");

MINUS.addEventListener("click", minimize);
CLOSE_APP.addEventListener("click", close_app);

LINK.addEventListener("click", ea);
// MAIL.addEventListener("click", ma);

function ea () {
    app.mainWindow.link();
}
// function ma () {
//     app.mainWindow.mail();
// }
function close_app () {
    app.mainWindow.close();
}
function minimize () {
    app.mainWindow.minimize();
}
