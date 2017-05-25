import { browser, element, by } from 'protractor';

export class AngularFormationBookStorePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('afp-root h1')).getText();
  }
}
