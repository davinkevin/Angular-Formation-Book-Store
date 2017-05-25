import { AngularFormationBookStorePage } from './app.po';

describe('angular-formation-book-store App', () => {
  let page: AngularFormationBookStorePage;

  beforeEach(() => {
    page = new AngularFormationBookStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular Formation Book Store works !');
  });
});
