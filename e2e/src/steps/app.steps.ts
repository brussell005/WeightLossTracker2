import { Then } from 'cucumber';
import { AppPage } from '../pages/app.po';

const chaiAsExpected = require('chai').use(require('chai-as-promised'));
const expect = chaiAsExpected.expect;

const appPage: AppPage = new AppPage();

// Thens

Then(/^I see the main nav menu banner$/, async () => {
    expect(await appPage.getAppNavMenu()).to.be.true;
});