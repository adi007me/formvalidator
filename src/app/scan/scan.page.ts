import { Component } from '@angular/core';
import { CameraService } from '../services/camera/camera.service';

@Component({
  selector: 'app-scan',
  templateUrl: 'scan.page.html',
  styleUrls: ['scan.page.scss']
})
export class ScanPage {
  private scannedImage: string;

  constructor(private cameraService: CameraService) {}

  takePicture() {
    this.cameraService.getPicture().then((imageData) => {
      this.scannedImage = 'data:image/jpeg;base64,' + imageData;
      console.log(imageData);
     }, (err) => {
      throw err;
     });;
  }
}
