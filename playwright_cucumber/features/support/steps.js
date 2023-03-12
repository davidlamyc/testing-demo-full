const { Given, When, Then } = require("@cucumber/cucumber");

Given("Go to website", { timeout: 60 * 1000 }, async function () {
    console.log(process.env.IS_LOCAL)
    await this.openUrl(process.env.IS_LOCAL ? "http://localhost:3000" : "http://localhost:9000");
});

Then("I check that nav elements exist", async function () {
    await this.page.click('text=nav 1');
    await this.page.click('text=nav 2');
    // await this.page.click('text=nav 3');
});