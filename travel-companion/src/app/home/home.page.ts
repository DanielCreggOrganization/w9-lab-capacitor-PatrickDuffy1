import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';
import { DeviceInfoService } from '../services/device-info.service';
import { NetworkInfoService } from '../services/network-info.service';
import { TextToSpeechService } from '../services/text-to-speech.service';
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
  networkInfoServive : NetworkInfoService;
  textToSpeechService : TextToSpeechService;
  capturedImage: string | undefined;

  constructor(cameraService : CameraService,
     locationService : LocationService,
      deviceInfoService : DeviceInfoService,
       networkInfoServive: NetworkInfoService,
       textToSpeechService : TextToSpeechService
      ) 
  {
    this.cameraService = cameraService;
    this.locationService = locationService;
    this.deviceInfoService = deviceInfoService;
    this.networkInfoServive = networkInfoServive;
    this.textToSpeechService = textToSpeechService;
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

  async getNetworkInfo() 
  {
    this.networkInfoServive.logCurrentNetworkStatus();
  }

  async generateTextToSpeech()
  {
    let text = "This is a sample text.";

    this.textToSpeechService.speak(text);
  }
}
