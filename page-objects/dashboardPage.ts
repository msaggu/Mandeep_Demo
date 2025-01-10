import{Page, Locator} from "@playwright/test";

export class DashboardPage {
    readonly page: Page;

    constructor(page) {
        this.page = page;
    }

    async dashboardLandingPageCheck() {
        return await this.page.getByText('Home').textContent();
    }

    async portfolioValueCheck() {
        return await this.page.locator('.BalanceHeader_container__a_14e').getByText(/.*\d+\.\d+$/).textContent();       
    }

}