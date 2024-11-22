// src/app/services/device-info.service.ts
import { Injectable } from '@angular/core';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class DeviceInfoService {
  constructor() { }

  async getDeviceInfo() 
  {
    const info = await Device.getInfo();

    console.log(info);

    // Log available browser information:
    console.log({
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language
    });
  }
}