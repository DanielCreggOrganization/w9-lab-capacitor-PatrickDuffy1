// src/app/services/location.service.ts
import { Injectable } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor() { }

  async getCurrentPosition()
  {
    const coordinates = await Geolocation.getCurrentPosition();

    console.log('Current position:', coordinates);

    // Monitor actual position updates:
    navigator.geolocation.watchPosition((position) => {
      console.log('New position:', position);
    });
  }
}