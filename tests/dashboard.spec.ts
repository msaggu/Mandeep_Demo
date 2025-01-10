import {test, expect} from "@playwright/test";
import {PageManager} from "../page-objects/pageManager";

/**
 * This test case will run before each test case in this file.
 * This test case navigates to the base URL before each test case.
 */
test.beforeEach(async ({page}) => {
    await page.goto(process.env.BASE_URL ?? '');
})

/**
 * This test case checks the portfolio value on the dashboard page.
 */
test('check portfolio value', async ({page}) => {
    const pageManager = new PageManager(page);
    await pageManager.onStarterPage().loginToSite(process.env.EMAIL ?? '', process.env.PASSWORD ?? '');
    await pageManager.onDashboardPage().dashboardLandingPageCheck(); 
    await expect(await pageManager.onDashboardPage().getPortfolioValue()).toHaveText('0.00');
})
