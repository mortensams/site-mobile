import { SiteMobilePage } from './app.po';

describe('site-mobile App', () => {
  let page: SiteMobilePage;

  beforeEach(() => {
    page = new SiteMobilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
