import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applist',
  templateUrl: 'applicationList.page.html',
  styleUrls: ['applicationList.page.scss']
})
export class ApplicationListPage {
    private title: string;

    private titles: Record<string, string> = {
        "submitted": "Submitted Applications",
        "pended": "Pended Applications",
        "all": "All Applications"
    }

    constructor(private route: ActivatedRoute) {
        route.params.subscribe((params) => {
            this.title = this.titles[params['listtype']];
        });
    }
}
