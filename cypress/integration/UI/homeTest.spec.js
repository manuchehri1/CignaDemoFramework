import LoginLocators from '../../page-objects/locators/login';
import LoginPage from '../../page-objects/pages/loginPage'
import HomeLocators from '../../page-objects/locators/home';
import HomePage from '../../page-objects/pages/homePage'
import productsData from "../../fixtures/products"



describe('Home Page Tests', function() {
  
  before(function () {
      var url= Cypress.config('baseUrl');
      cy.visit(url);
    
  })
  

  it('Navigate to the Monitors page', function() {

      //action
      HomePage.move_to_category("monitor");
      
      // assertion
      cy.contains(productsData.Monitors[0].Name).should("be.visible");
  
  })

  it('Navigate to the Laptops page', function() {

     //action
     HomePage.move_to_category("notebook");
  
     // assertion
     cy.contains(productsData.Laptops[0].Name).should("be.visible");

  })


  it('Navigate to the Phones page', function() {

      //action
      HomePage.move_to_category("phone");
    

      // assertion
      cy.contains(productsData.Phones[0].Name).should("be.visible");

  })
  
})