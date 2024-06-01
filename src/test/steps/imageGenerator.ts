import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium, Page, Browser, expect } from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

import * as data from "../../helper/util/test-data/userDetails.json";
import { assert } from "console";


let count:number;
let browser: Browser;
let page: Page;
setDefaultTimeout(10 * 60 * 1000);

Given('a logged in user', async function () {
  await pageFixture.page.goto(process.env.BASEURL);


  let email = `//input[@id='email']`
  let password = `//input[@id='password']`
  let submit = `//button[text()='Sign in']`
  let verifySignin = `//div[@aria-label='Dishakhilari']`
  let loader = `//img[@alt='Leonardo.AI logo']`
  let maybeLaterButton = `//button[text()='Maybe Later']`


  await pageFixture.page.locator(email).fill("dishali.khilari12@gmail.com");
  await pageFixture.page.locator(password).fill("Disha@123");
  await pageFixture.page.locator(submit).click();

  try {
    await pageFixture.page.waitForSelector(maybeLaterButton, { state: 'visible' });
    await pageFixture.page.locator(maybeLaterButton).click();

  } catch {
    const maybeLaterButtonVisible = await pageFixture.page.locator(maybeLaterButton).isVisible();
    if (maybeLaterButtonVisible) {
      await pageFixture.page.locator(maybeLaterButton).click();
    }
  }

  const sucessSignin = await pageFixture.page.locator(verifySignin).textContent();
  assert(sucessSignin, "Dishakhilari");
  console.log('Login Success')



});

Given('the Image Generation page', async function () {
  let imageGeneration = "//p[text()='Image Generation']"
  let skipButton = `//button[text()='Skip']`
  let legacyModeButton = `//span[contains(@class, 'chakra-switch__track')]`
  let letsGoButton = `//button[contains(text(), "Let's Go")]`;

  await pageFixture.page.locator(imageGeneration).click();

  try {
    await pageFixture.page.waitForSelector(skipButton, { state: 'visible' });
    await pageFixture.page.locator(skipButton).click();
  } catch {
    const skipButtonVisibleButton = await pageFixture.page.locator(skipButton).isVisible();
    if (skipButtonVisibleButton) {
      await pageFixture.page.locator(skipButton).click();
    }
  }

  await pageFixture.page.waitForSelector(legacyModeButton, { state: 'visible' });
  const isActive = await pageFixture.page.locator(`${legacyModeButton}[data-active]`).isVisible();
  if (!isActive) {
    await pageFixture.page.locator(legacyModeButton).first().click();
  }

  try {
    await pageFixture.page.waitForSelector(letsGoButton, { state: 'visible' });
    await pageFixture.page.locator(letsGoButton).nth(1).click();
  } catch {
    const letsGoButtonVisibleButton = await pageFixture.page.locator(letsGoButton).nth(1).isVisible();
    if (letsGoButtonVisibleButton) {
      await pageFixture.page.locator(letsGoButton).nth(1).click();
    }
  }

});


Given('the {string} model', async function (username) {
  // Write code here that turns the phrase above into concrete actions
  let finetunedModel = `//p[text()='Finetuned Model']`
  let leonardoLighteningXL = `//p[text()='Leonardo Lightning XL']`

  await pageFixture.page.locator(finetunedModel).click();
  await pageFixture.page.locator(leonardoLighteningXL).nth(2).click();
});

Given('a prompt of {string}', async function (prompt) {
  // Write code here that turns the phrase above into concrete actions
  let searchPromptBar = "//textarea[@placeholder='Type a prompt ...']"

  await pageFixture.page.locator(searchPromptBar).fill(prompt)
});

When('Alchemy turned off', async function () {
  // Write code here that turns the phrase above into concrete actions
  let AlchemyButton = `//div[@class='css-0']`

  await pageFixture.page.waitForSelector(AlchemyButton, { state: 'visible' });
  const isActive = await pageFixture.page.locator(`${AlchemyButton}[data-active]`).isVisible();
  if (!isActive) {
    await pageFixture.page.locator(AlchemyButton).nth(2).click();
  }

});

Then('Login should be sucess with title as {string}', async function (app_title) {
  let text = "//div[@class='app_logo']"

  const name = await pageFixture.page.locator(text).textContent();
  if (name.length > 1) {
    await expect(name).toContain(app_title);
  }
  else {
    await console.log("Username and password are invalid");
  }
});

Then('image dimensions of 512 x 512', async function () {
  let dimention = `//span[text()='512 × 512']`;

  await pageFixture.page.locator(dimention).click();
});

Given('Number of Images is {string}', async function (number) {
  let addItem = `//div[text()='${number}']`;
  await pageFixture.page.locator(addItem).click();

});

Then('the generate button is clicked', async function () {
let tokenCount = `(//img[@alt='Leonardo.Ai']//following::p[@class='chakra-text css-17mvss9'])[3]`  
let generateButton = `(//p[text()='Generate'])[1]`;

const initialTokenCount = await pageFixture.page.locator(tokenCount).textContent();
count = parseInt(initialTokenCount, 10);
await pageFixture.page.locator(generateButton).click();
});

Then('the generated image displays successfully', async function () {
  let progressIndicator = `//p[@class='chakra-text css-5evhsu']`;

  await pageFixture.page.waitForSelector(progressIndicator, { state: 'visible' });
  await pageFixture.page.waitForSelector(progressIndicator, { state: 'detached' });

  let imageElement = `(//img[@alt='a successful end to end test'])[1]`;
    const imageGenerated = await pageFixture.page.locator(imageElement).isVisible();
    assert(imageGenerated, "Image is not generated.");

    let tokenCount = `(//img[@alt='Leonardo.Ai']//following::p[@class='chakra-text css-17mvss9'])[3]`;
  const finalTokenCount = await pageFixture.page.locator(tokenCount).textContent();
  const finalCount = parseInt(finalTokenCount, 10);
  assert(finalCount === count - 2, `Expected token count to decrease by 2, but it decreased by ${count - finalCount}`);
  console.log('Tokens Updated correctly hence image has been generated successfully')
});







