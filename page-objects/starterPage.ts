import{Page, Locator} from "@playwright/test";

/**
 * Represents the Starter/Homepage page prior to login.
 */
export class StarterPage {
    readonly page: Page;

    /**
     * Initializes a new instance of the `StarterPage` class.
     * @param page - The Playwright `Page` object.
     */
    constructor(page) {
        this.page = page;
    }

    /**
     * Clicks the "Log in" button on the page.
     */
    async clickLogInButton() {
        const loginButton = this.page.getByRole('link', {name: "Log in"});
        await loginButton.click();
    }

    /**
     * Enters the provided username into the email field.
     * @param username - The username to be entered.
     */
    async enterUsername(username: string) {
        const emailField = this.page.getByLabel('Email');
        await emailField.fill(username)
    }

    /**
     * Enters the provided password into the password field.
     * @param password - The password to be entered.
     */
    async enterPassword(password: string) {
        const passwordField = this.page.getByLabel('Password');
        await passwordField.fill(password);
    }

    /**
     * Clicks the "Continue" button on the page.
     */
    async clickContinueButton() {
        const continueButton = this.page.getByRole('button', {name: 'Continue'});
        await continueButton.click();
    }

    /**
     * Logs into the site using the provided username and password.
     * @param username - The username to be entered.
     * @param password - The password to be entered.
     */
    async loginToSite(username: string, password: string) {
        await this.clickLogInButton();
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickContinueButton();  
    }
}