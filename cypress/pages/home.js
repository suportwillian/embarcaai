require('@cypress/xpath');

const elements = {
    home: '/html/body/header/div[1]/div[1]/div[1]/a',
    inputOrigin: '//input[@id="origin_text"]',
    selectOrigin: '/html/body/main/section[2]/div/div/form/div/div[1]/div/div[1]/ul/li[2]/span',
    inputDestination: '//input[@id="destination_text"]',
    selectDestination: '/html/body/main/section[2]/div/div/form/div/div[4]/div/div[1]/ul/li[1]/span',
    inputGoing: '//input[@id="departure"]',
    dateGoing: '<td class="day" data-date="1688083200000">30</td>',
    inputReturn: '//input[@id="return"]',
    buttonSearch: '//button[@type="submit"]',
    buttonReserve: '//*[@id="new_reservation"]/button',
    buttonOne: '//div[@class="seat available" and @data-number="1"]',
    buttonAdvance: '//a[@class="btn btn-primary submit"]',
    inputName: '//input[@id="order_reservations_attributes_0_seats_attributes_0_name"]',
    inputDoc: '//input[@id="order_reservations_attributes_0_seats_attributes_0_rg"]'
}

export default elements;