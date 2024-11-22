import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { CameraService } from '../services/camera.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {

  cameraService : CameraService;

  constructor(cameraService : CameraService) 
  {
    this.cameraService = cameraService;
  }

  takePicture()
  {
    this.cameraService.takePicture();
  }
}
