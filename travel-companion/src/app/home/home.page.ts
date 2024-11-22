import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';
import { LocationService } from '../services/location.service';

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

  constructor(cameraService : CameraService, locationService : LocationService) 
  {
    this.cameraService = cameraService;
    this.locationService = locationService;
  }

  takePicture()
  {
    this.cameraService.takePicture();
  }

  async getCurrentPosition() 
  {
    this.locationService.getCurrentPosition();
  }
}
