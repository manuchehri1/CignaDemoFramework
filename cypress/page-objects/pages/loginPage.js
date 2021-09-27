import LoginLocators from '../locators/login';

var LoginPage = {

    click_login_win: function() {
        cy.get(LoginLocators.login_window()).click({ force: true });
    },
    type_username: function(username) {
        cy.wait(2000)
        cy.get(LoginLocators.username_input()).clear().type(username);
    },
    clear_username: function() {
        cy.wait(2000)
        cy.get(LoginLocators.username_input()).clear();
    },
    type_password: function(password) {
        cy.wait(1000)
        cy.get(LoginLocators.password_input()).type(password);
    },
    clear_password: function() {
        cy.wait(1000)
        cy.get(LoginLocators.password_input()).clear();
    },
    click_login_btn: function() {
        cy.wait(1000)
        cy.get(LoginLocators.login_button()).click();
    },

};

export default LoginPage;