import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';

const {Device} = Plugins;

@Injectable({
    providedIn: 'root'
})
export class DeviceInfoService {

    constructor() {
    }

    async getVersion() {
        const deviceInfo = await Device.getInfo();
        return deviceInfo.appVersion;
    }

    async getDeviceManufacturer() {
        const deviceInfo = await Device.getInfo();
        return deviceInfo.manufacturer;
    }

    async getDeviceModel() {
        const deviceInfo = await Device.getInfo();
        return deviceInfo.model;
    }

    async getDeviceOSVersion() {
        const deviceInfo = await Device.getInfo();
        return deviceInfo.osVersion;
    }

    async getDeviceUUID() {
        const deviceInfo = await Device.getInfo();
        return deviceInfo.uuid;
    }

    async checkForUpdate() {
        const deviceInfo = await Device.getInfo();
        console.log(deviceInfo.appVersion);
        console.log(deviceInfo.platform);
        const tempVersion = '1.1.0'; // Should get from the Backend
        if (deviceInfo.platform == 'android' && deviceInfo.appVersion < tempVersion) {
            // this.alertService.presentAlertPromptForUpdateApplication('downloading the latest update you will get the latest features, improvements and bug fixes of application.').then(result => {
            //     this.checkForUpdate();
            //     if (result.data) {
            //         this.iab.create('https://play.google.com/store/apps/details?id=com.droomme', '_system');
            //     }
            // });
        }
        if (deviceInfo.platform == 'ios' && deviceInfo.appVersion < tempVersion) {
            // this.alertService.presentAlertPromptForUpdateApplication('downloading the latest update you will get the latest features, improvements and bug fixes of application.').then(result => {
            //     this.check();
            //     if (result.data) {
            //         this.iab.create('https://apps.apple.com/kw/app/droom-shoppers-community/id1488256705', '_system');
            //     }
            // });
        }
    }

}
