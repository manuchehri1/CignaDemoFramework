import LoginLocators from '../../page-objects/locators/login';
import LoginPage from '../../page-objects/pages/loginPage'



describe('Login Functionalities', function() {

    before(function () {
      cy.fixture('login').then(function (data) {
        this.data = data;
        var url= Cypress.config('baseUrl');
        cy.visit(url);
      })
    })

    beforeEach(function () {
        
         cy.get('#nameofuser').then(($btn) => {
            const text = $btn.text()
            
            if (text.includes('Welcome')) {
                    cy.get('#logout2').click();
            }

        })   
    })
    
  
    

    it('Login to DEMOBLAZE with correct credentials', function() {
      
        //action
       LoginPage.click_login_win();
       LoginPage.type_username(this.data.username_valid);
       LoginPage.type_password(this.data.password_valid);
        LoginPage.click_login_btn();

        // assertion
        cy.contains('Welcome '+this.data.username_valid).should("be.visible");
  
  })
  
    it('Login to DEMOBLAZE with incorrect credentials', function() {
      
       // action
       LoginPage.click_login_win();
       LoginPage.type_username("invalidUsernam");
       LoginPage.type_password("invalidPassword");
       LoginPage.click_login_btn();
  
       // assertion
        cy.on('window:alert',(txt)=>{
        expect(txt).to.contains('User does not exist.');
        })
  })


    it.skip('Login to DEMOBLAZE without credentials', function() {
      
       // action
       LoginPage.click_login_win();
       LoginPage.clear_username();
       LoginPage.clear_password();      
       LoginPage.click_login_btn();

       // assertion
       cy.on('window:alert',(txt)=>{
       expect(txt).to.contains('Please fill out');
       })
  })

  
  
})