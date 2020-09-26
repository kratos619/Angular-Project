import { Injectable } from "@angular/core";

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, webFrame, remote } from "electron";
import * as childProcess from "child_process";
import * as fs from "fs";
import * as os from "os";
import * as path from "path";

@Injectable({
  providedIn: "root",
})
export class ElectronService {
  ipcRenderer: typeof ipcRenderer;
  webFrame: typeof webFrame;
  remote: typeof remote;
  childProcess: typeof childProcess;
  fs: typeof fs;
  electronScreen;
  desktopCapturer;
  os: typeof os;
  path: typeof path;
  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require("electron").ipcRenderer;
      this.desktopCapturer = window.require("electron").desktopCapturer;
      this.webFrame = window.require("electron").webFrame;
      this.electronScreen = window.require("electron").remote.screen;
      // If you wan to use remote object, pleanse set enableRemoteModule to true in main.ts
      // this.remote = window.require('electron').remote;

      this.childProcess = window.require("child_process");
      this.fs = window.require("fs");
      this.os = window.require("os");
      this.path = window.require("path");
    }
  }
  determineScreenShot() {
    const screenSize = this.electronScreen.getPrimaryDisplay().workAreaSize;
    const maxDimension = Math.max(screenSize.width, screenSize.height);
    return {
      width: maxDimension * window.devicePixelRatio,
      height: maxDimension * window.devicePixelRatio,
    };
  }

  takeScreenShot() {
    const thumbSize = this.determineScreenShot();
    console.log(thumbSize);

    let options = {
      types: ["screen"],
      thumbnailSize: thumbSize,
    };
    this.desktopCapturer.getSources(options).then((sources) => {
      for (const source of sources) {
        if (source.name === "Entire Screen" || source.name === "Screen 1") {
          const screenShotPath = this.path.join(
            this.os.tmpdir(),
            "screenShot.png"
          );
          this.fs.writeFileSync(
            screenShotPath.toString(),
            source.thumbnail.toPNG()
          );
          this.invokeNotificationAfterTakingScreenShot(screenShotPath);
        }
      }
    });
  }

  invokeNotificationAfterTakingScreenShot(icon) {
    let notification = {
      title: "Screen shot taken",
      body: "Screen shot taken....",
      icon: icon,
    };
    new window.Notification(notification.title, notification);
  }
}
