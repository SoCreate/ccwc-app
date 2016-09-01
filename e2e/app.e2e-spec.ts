import { CcwcAppPage } from './app.po';

describe('ccwc-app App', function() {
  let page: CcwcAppPage;

  beforeEach(() => {
    page = new CcwcAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
