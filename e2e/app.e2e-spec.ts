import { AdrianaPortfolioPage } from './app.po';

describe('adriana-portfolio App', function() {
  let page: AdrianaPortfolioPage;

  beforeEach(() => {
    page = new AdrianaPortfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
