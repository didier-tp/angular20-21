import { browser, logging } from 'protractor';
import { ConversionPage } from './conversion.po';

describe('workspace-project App', () => {
  let page: ConversionPage;
  beforeEach(() => {
    page = new ConversionPage();
  })

it('should convert EUR to USD correctly', () => {
page.navigateTo();
page.getInputMontantElement().clear(); //clear default value
page.getInputMontantElement().sendKeys("200");
page.getSelectCodeDevSourceOptionElementContaining("Euro").click();
page.getSelectCodeDevCibleOptionElementContaining("Dollar").click();
page.getButtonConvertirElement().click();
browser.sleep(5000);
page.getMontantConvertiText().then((resConv)=>{
console.log("resConv=" + resConv);
expect(Number(resConv)).toBeCloseTo(217.4,0.1);
})
});

afterEach(async () => {
  // Assert that there are no errors emitted from the browser
  const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  expect(logs).not.toContain(jasmine.objectContaining({
    level: logging.Level.SEVERE,
  } as logging.Entry));
});
  

});
