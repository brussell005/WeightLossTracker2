
import { BasePage } from './base.po';

export class AppPage extends BasePage {
    private navMenu = '.navigation-items';

    async getAppNavMenu(): Promise<boolean> {
        return await this.isElementVisible(this.navMenu);
    }
}