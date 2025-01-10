import {Page} from "@playwright/test"
import {DashboardPage} from "../page-objects/dashboardPage";
import {StarterPage} from "../page-objects/starterPage";


export class PageManager {
    private readonly page: Page;
    private readonly starterPage: StarterPage;
    private readonly dashboardPage: DashboardPage;

    constructor(page) {
        this.page = page;
        this.starterPage = new StarterPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
    }

    onStarterPage() {
        return this.starterPage;
    }
    
    onDashboardPage() {
        return this.dashboardPage;
    }
}