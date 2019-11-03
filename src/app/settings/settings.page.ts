import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {
    syntBotsUrl: string;

    constructor(private route: ActivatedRoute) {

    }

    syntBotsUrlChanged() {
        console.log()
    }
}
