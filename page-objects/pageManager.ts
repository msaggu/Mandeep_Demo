import {Page} from "@playwright/test"
import {DashboardPage} from "./DashboardPage";
import {StarterPage} from "./StarterPage";


/**
 * The `PageManager` class is responsible for managing different pages within the application.
 * It provides methods to access specific page objects such as `StarterPage` and `DashboardPage`.
 */
export class PageManager {
    private readonly page: Page;
    private readonly starterPage: StarterPage;
    private readonly dashboardPage: DashboardPage;

    /**
     * Initializes a new instance of the PageManager class.
     * @param page - The page object used to initialize the different pages.
     */
    constructor(page: Page) {
        this.page = page;
        this.starterPage = new StarterPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
    }

    /**
     * Gets the StarterPage instance.
     * @returns The StarterPage instance.
     */
    onStarterPage(): StarterPage {
        return this.starterPage;
    }

    /**
     * Gets the DashboardPage instance.
     * @returns The DashboardPage instance.
     */
    onDashboardPage(): DashboardPage {
        return this.dashboardPage;
    }
}
