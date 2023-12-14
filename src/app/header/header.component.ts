import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  currentLanguage: string;

  // Inject TranslateService in your component constructor
  constructor(private translate: TranslateService) {
    // Set the current language based on the default language or the language set by the user
    this.currentLanguage = translate.currentLang || translate.defaultLang;
  }

  // Switch language method
  switchLanguage(language: string) {
    this.translate.use(language);
    this.updateCurrentLanguage();
  }

  // Method to update the current language when it changes
  updateCurrentLanguage() {
    this.currentLanguage = this.translate.currentLang || this.translate.defaultLang;
  }

  // Method to get the image source path based on the current language
  getImagePath() {
    return `assets/images/${this.currentLanguage}.png`;
  }
}
