import{Page, Locator} from "@playwright/test";

/**
 * Represents the Dashboard/Landing page after login.
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
     * Navigates to the dashboard landing page and waits for the 'Home' locator to be visible.
     */
    async dashboardLandingPageCheck() {
        await this.page.getByText('Home').waitFor();
    }
   
    /**
     * Retrieves the portfolio value from the dashboard page.
     *
     * @returns {Promise<Locator>} A promise that resolves to a Locator object containing the portfolio value.
     */
    async getPortfolioValue() {
        return this.page.locator('.BalanceHeader_container__a_14e').getByText(/.*\d+\.\d+$/);       
    }
}