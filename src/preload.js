// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer, shell } = require("electron");
const { writeFile, readFile } = require("fs");
const { title } = require("process");
contextBridge.exposeInMainWorld('electronAPI', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    updateEvent:(buttonType)=>{

        // const networkSharePath = '\\catedcnas2.ap.cat.com\PSID-I\Automation analytics';

        // Replace 'file.txt' with the desired file name
        // const fileName = 'process.env.USERNAME+".json';

        // Full path of the file on the network share drive
        // const filePath = path.join(networkSharePath, fileName);

        // const path = "G:/Analytics/"+process.env.USERNAME+".json";
        const path = "//catedcnas2.ap.cat.com/PSID-I/Analytics/"+process.env.USERNAME+".json";
    
        readFile(path, (error, data) => {
            if (error) {
                // console.log(error);
                    writeFile(path, JSON.stringify([{
                        userName: process.env.USERNAME,
                        buttonType,
                    }], null, 2), (err) => {
                        if (err) {
                            console.log("Failed to write updated data to file");
                            return;
                        }
                        console.log("Updated file successfully");
                    });
                return;
            }
        })
        readFile(path, (error, data) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log(data)
            
            const parsedData = JSON.parse(data);
            
            // updating name in shipping_address
            parsedData.push({
                userName: process.env.USERNAME,
                buttonType,
            });
            
            writeFile(path, JSON.stringify(parsedData, null, 2), (err) => {
                if (err) {
                    console.log("Failed to write updated data to file");
                    return;
                }
                console.log("Updated file successfully");
            });
        });
    }
})
const API = {
    mainWindow: {
        close: () => ipcRenderer.send("app/close"),
        minimize: () => ipcRenderer.send("app/minimize"),
        link: () => ipcRenderer.send("app/link"),
        mail: () => ipcRenderer.send("app/mail")
    },
}

contextBridge.exposeInMainWorld("app", API);
