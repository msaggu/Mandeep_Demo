import {test, expect} from "@playwright/test";
import {PageManager} from "../page-objects/pageManager";

test.beforeEach(async ({page}) => {
    await page.goto(process.env.BASE_URL ?? '');
})

test('check portfolio value', async ({page}) => {
    const pageManager = new PageManager(page);
    await pageManager.onStarterPage().loginToSite(process.env.EMAIL ?? '', process.env.PASSWORD ?? '');
    await pageManager.onDashboardPage().dashboardLandingPageCheck(); 
    await expect(await pageManager.onDashboardPage().getPortfolioValue()).toHaveText('0.00');
})
