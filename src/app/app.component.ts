import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  opened=false;
  
  title = 'AdminModule';
  public chartType: string = 'pie';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "listicon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/import_contacts-24px.svg")
    );
      this.matIconRegistry.addSvgIcon(
        "addicon",
        this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/create-24px.svg")
      );
    this.matIconRegistry.addSvgIcon(
      "deleteicon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/delete-24px.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "questionicon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/line_weight-24px.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "arrowicon",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/keyboard_arrow_down-24px.svg")
    );
    }
  
}


