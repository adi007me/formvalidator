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
    const url = 'https://syntbots.eastasia.cloudapp.azure.com:5008/ai/humanaextract';
    let formData:FormData = new FormData();

    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    let httpOptions = { headers: headers };

    formData.append('file', this.B64toBlob(smartScanForm.FormPages[0].imageData), 'file.name' + Math.random() + '.jpg');

    if (this.platform.is('cordova')) {
        return this.http.post(url, formData, httpOptions);
    } else {
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(success => {
            console.log(success);

            return Promise.resolve(success)
        })
        .catch(error => {
            console.log(error)

            return Promise.resolve(error);
        })
    }
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
