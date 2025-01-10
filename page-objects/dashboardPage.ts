import{Page, Locator} from "@playwright/test";

/**
 * Represents the Dashboard Page.
 */
export class DashboardPage {
    readonly page: Page;

    /**
     * Initializes a new instance of the DashboardPage class.
     * @param page - The Playwright Page object.
     */
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigates to the dashboard landing page and waits for the 'Home' text to be visible.
     * 
     * @returns {Promise<void>} A promise that resolves when the 'Home' text is found and visible on the page.
     */
    async dashboardLandingPageCheck() {
        await this.page.getByText('Home').waitFor();
    }

   
    async getPortfolioValue() {
        return this.page.locator('.BalanceHeader_container__a_14e').getByText(/.*\d+\.\d+$/);       
    }
}