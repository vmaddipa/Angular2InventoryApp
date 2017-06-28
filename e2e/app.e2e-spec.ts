import { Angular2InventoryAppPage } from './app.po';

describe('angular2-inventory-app App', () => {
  let page: Angular2InventoryAppPage;

  beforeEach(() => {
    page = new Angular2InventoryAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
