import { WeblifekitPage } from './app.po';

describe('weblifekit App', () => {
  let page: WeblifekitPage;

  beforeEach(() => {
    page = new WeblifekitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
