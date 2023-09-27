import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/login'


test('test', async ({ page }) => {


const Login = new LoginPage()

Login.gotoLoginPage()
Login.login ('matan.sabag+4@netoplay.ltd','123456$M')

//  await page.goto('https://www.77stg.io/home');
// await page.getByRole('button', { name: 'Sign in' }).click();
//  await page.locator('#ember26').click();
//await page.locator('#ember26').fill('matan.sabag+4@netoplay.ltd');
//  await page.locator('#ember27').click();
// await page.locator('#ember27').fill('123456$M');
//  await page.getByText('Log In').click();
//await page.getByRole('link', { name: '221' }).click();
//await page.getByRole('complementary').locator('div').filter({ hasText: 'Logout' }).nth(2).click();
});