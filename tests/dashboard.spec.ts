import {test, expect} from "@playwright/test";
import {PageManager} from "../page-objects/pageManager";

test.beforeEach(async ({page}) => {
    await page.goto(process.env.BASE_URL ?? '');
})

test('check portfolio value', async ({page}) => {
    const pageManager = new PageManager(page);
    await pageManager.onStarterPage().loginToSite(process.env.EMAIL ?? '', process.env.PASSWORD ?? '');

    //checking if the user has landed on the dashboard page after successful login
    expect(await pageManager.onDashboardPage().dashboardLandingPageCheck()).toEqual('Home'); 
    
    //checking the portfolio value
    expect(await pageManager.onDashboardPage().portfolioValueCheck()).toEqual('0.00');
})
