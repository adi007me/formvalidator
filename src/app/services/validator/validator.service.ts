import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { SmartScanForm } from '../../models/SmartScanForm'
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  constructor(private http: HTTP, private platform: Platform) { }

  validateForm(smartScanForm: SmartScanForm) {
    const url = 'https://13.75.106.59:443/syntbots-ai/humana/ai/humanaextract1';
    let formData:FormData = new FormData();

    formData.append('file', this.B64toBlob(smartScanForm.FormPages[0].imageData), 'file.name' + Math.random() + '.jpg');

    return new Promise((resolve, reject) => {
      fetch(url, {
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            'Accept': 'application/json'
          },
          method: 'POST'
      })
      .then(response => {
        console.log(response);

        return response.json()
      })
      .then(success => {
          console.log(success);

          return resolve(success.response.file_response)
      })
      .catch(error => {
          console.log(error)

          return reject(error);
      });

      //Mock Data
      // setTimeout(() => {
      //   console.log('Mock Data');
        
      //   const mockResponse = [{
      //     key: 'First Name', value: "filled"
      //     }, {
      //       key: 'Last Name', value: "filled"
      //     }, {
      //       key: 'SSN', value: "missing"
      //   }];

      //   resolve(mockResponse)
      // }, 5000);
    });
  }

  private B64toBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);

    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: 'image/jpeg' });
  }
}
