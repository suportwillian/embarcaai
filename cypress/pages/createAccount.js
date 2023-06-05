require('@cypress/xpath');

const elements = {
    buttonAgree: '//a[@class="cookieConsentOK btn btn-primary"]',
    buttonEnter: '//a[contains(@href, "/sessions/new")]//span[@class="text-white font-weight-bold"]',
    accessAccount: '//h1[@class="mb-5"]',
    buttonRegisterNow: '//a[contains(@href, "/customer/new")]',
    titleCreateAccount: '//h2[@class="sub-title mb-5"]',
    inputName: '//input[@id="customer_name"]',
    inputEmail: '//input[@id="customer_email"]',
    inputPassword: '//input[@id="customer_password"]',
    inputConfirmPassword: '//input[@id="customer_password_confirmation"]',
    inputBirthdate: '//input[@id="customer_birthdate"]',
    inputPhone: '//input[@id="customer_phone"]',
    inputCpf: '//input[@id="customer_cpf"]',
    buttonCreateAccount: '//input[@name="commit"]',
    createSucess: '//div[@id="perfil"]'
}
 
export default elements;