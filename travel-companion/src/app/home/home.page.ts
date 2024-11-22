import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';
import { DeviceInfoService } from '../services/device-info.service';
//import {defineCustomElements} from '@ionic/pwa-elements/loader'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {

  cameraService : CameraService;
  locationService : LocationService;
  deviceInfoService : DeviceInfoService;
  capturedImage: string | undefined;

  constructor(cameraService : CameraService, locationService : LocationService, deviceInfoService : DeviceInfoService) 
  {
    this.cameraService = cameraService;
    this.locationService = locationService;
    this.deviceInfoService = deviceInfoService;
  }

  async takePicture()
  {
    this.capturedImage = await this.cameraService.takePicture();
  }

  async getCurrentPosition() 
  {
    this.locationService.getCurrentPosition();
  }

  async getDeviceInfo() 
  {
    this.deviceInfoService.getDeviceInfo();
  }
}
