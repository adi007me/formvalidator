import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { SmartScanForm } from '../../models/SmartScanForm'
import { Platform } from '@ionic/angular';
import { ValidationResultItem } from 'src/app/models/ValidationResults';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  constructor(private http: HTTP, private platform: Platform, private toastController: ToastController) { }

  validateForm(smartScanForm: SmartScanForm) {
    const url = 'http://13.75.106.59:5003/ai/humanaextract1';
    let formData:FormData = new FormData();

    formData.append('file', this.B64toBlob(smartScanForm.FormPages[0].imageData), 'file.name' + Math.random() + '.jpg');

    if (false && this.platform.is('cordova')) {
      return new Promise((resolve, reject) => {
        this.http.sendRequest(url,{ method: "post", data: formData }).then(value => {
          resolve(this.extractValidationResult(value.data));
        }).catch(error => {
          this.handleError(error);

          reject(error);
        });
      });
    } else {
      return new Promise((resolve, reject) => {
        fetch(url, {
            body: formData,
            method: 'POST'
        })
        .then(response => {
            return response.json()
        })
        .then(success => {
            return resolve(this.extractValidationResult(success));
        })
        .catch(error => {
            this.handleError(error);

            return reject(error);
        });
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

  private extractValidationResult(data) {
    let validationResults: ValidationResultItem[] = new Array();
    const response = data.response[0].file_response;
    const keys = Object.keys(response);

    (async () => {
      const toast = await this.toastController.create({
        message: 'Service Call Successful: ' + JSON.stringify(response),
        duration: 10000,
        showCloseButton: true
      });
      toast.present();
    })();

    keys.forEach(key => {
      const validationResultItem: ValidationResultItem = {
        key: key,
        value: response[key]
      };

      validationResults.push(validationResultItem);
    });

    return validationResults;
  }

  private handleError(error) {
    (async () => {
      const toast = await this.toastController.create({
        message: 'Service Call Failed : ' + error,
        duration: 10000,
        showCloseButton: true
      });
      toast.present();
    })();
  }
}
