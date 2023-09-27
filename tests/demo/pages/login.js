exports.LoginPage = class LoginPage{


    constructor (page){

        this.page =page

        this.signin_button = page.getByRole('button', { name: 'Sign in' })
        this.username_textbox = page.locator('#ember20')
        this.password_textbox = page.locator('#ember21')
        this.clicklogin_button = page.getByText('Log In')
    }

    async gotoLoginPage(){
        await page.goto('https://www.77stg.io/home');
    }

    async login (username, password)
    {
        await this.signin_button.click()
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.clicklogin_button.click()
    }
    

}