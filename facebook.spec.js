import { test, expect } from '@playwright/test';

// create facebook account using Relative xpath!
test ('locators', async ({ page }) => {

    await page.setViewportSize({ width: 360, height: 640 })
    await page.goto("https://www.facebook.com/");

    await page.click('//a[contains(@href, "r.php")]');

    await page.fill('//input[@name="firstname"]', 'Karthik');
    await page.fill('//input[@name="lastname"]', 'Lingadurai');

    await page.selectOption('//select[@name="birthday_day"]', '16');
    await page.selectOption('//select[@name="birthday_month"]', 'Oct');
    await page.selectOption('//select[@name="birthday_year"]', '1995');

    await page.click('//input[@name="sex"][@value="2"]');
    
    await page.fill('//input[@name="reg_email__"]', 'karthik@fb.com');
    await page.fill('//input[@name="reg_passwd__"]', 'myFbPass');
    
    await page.click('//button[@name="websubmit"]');

    await page.click('//a[contains(text(), "Already have an account")]');

    await page.fill('//input[@name="email"]', 'karthik@fb.com');
    await page.fill('//input[@id="pass"]', 'myPassword');

    await page.click('//button[@name="login"]');
    await page.click('//a[contains(text(), "Forgotten password?")]');
    await page.click('//a[contains(text(), "Cancel")]');

    await page.waitForTimeout(3000);
})
