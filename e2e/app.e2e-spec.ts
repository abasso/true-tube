import { TrueTubePage } from './app.po';

describe('true-tube App', function() {
  let page: TrueTubePage;

  beforeEach(() => {
    page = new TrueTubePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
