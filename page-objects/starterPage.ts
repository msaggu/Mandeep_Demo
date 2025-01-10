import{Page, Locator} from "@playwright/test";

export class StarterPage {
    readonly page: Page;

    constructor(page) {
        this.page = page;
    }

    async clickLogInButton() {
        const loginButton = this.page.getByRole('link', {name: "Log in"});
        await loginButton.click();
    }

    async enterUsername(username: string) {
        const emailField = this.page.getByLabel('Email');
        await emailField.fill(username)
    }

    async enterPassword(password: string) {
        const passwordField = this.page.getByLabel('Password');
        await passwordField.fill(password);
    }

    async clickContinueButton() {
        const continueButton = this.page.getByRole('button', {name: 'Continue'});
        await continueButton.click();
    }

    async loginToSite(username: string, password: string) {
        await this.clickLogInButton();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickContinueButton();  
    }
}