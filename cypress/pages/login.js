require('@cypress/xpath');

const elements = {
    inputUser: '//input[@id="email"]',
    inputPassword: '//input[@id="pass_log_id"]',
    buttonEnter: '//button[@type="submit"]',
    sucess: '//*[@id="links-logged"]/span/a'
}
 
export default elements;