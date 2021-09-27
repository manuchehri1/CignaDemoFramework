
import HomeLocators from '../../page-objects/locators/home';
import HomePage from '../../page-objects/pages/homePage'
import CartPage from '../../page-objects/pages/cartPage'
import productsData from "../../fixtures/products"
import p_o_data from "../../fixtures/placeOrder"
import CartLocators from '../../page-objects/locators/cart';



describe('Home Page Tests', function() {
  
  before(function () {
      var url= Cypress.config('baseUrl');
      cy.visit(url);
    
  })
  

  it('Adding item from Phones page to the cart', function() {

      //action
      HomePage.move_to_category("phone");
      HomePage.select_item("1");
      HomePage.add_to_cart();
      

      // assertion
      cy.on('window:alert',(txt)=>{
        expect(txt).to.contains('Product added');
      })
  
  })


   it('Adding item from Monitors page to the cart and viewing it in the Cart', function() {

        //action
        HomePage.move_to_home_page();
        HomePage.move_to_category("monitor");
        HomePage.select_item("1");
        HomePage.add_to_cart();
        CartPage.move_to_cart();

        // assertion
        cy.url().should('include', 'www.demoblaze.com/cart')
        cy.contains(productsData.Monitors[0].Name).should("be.visible");
    })


   // By the way this skrip catch some bug there :)

    it('Validating the total price of two added items', function() {
        //action
        cy.reload();
        cy.wait(3000);
        // assertion
        const totalPrice = productsData.Phones[0].Price+productsData.Monitors[0].Price;
        cy.get(CartLocators.total_price()).invoke('text').then((str) => Number(str)).should('eq', totalPrice);

    })




  it.skip('Placing Order', function() {

        //action
        CartPage.place_order(p_o_data.name,p_o_data.country,p_o_data.city,p_o_data.credit_card,p_o_data.month,p_o_data.year);

        // assertion
        cy.get(CartLocators.order_confirmation_message).should('have.text', 'Thank you for your purchase!')
        cy.get(CartLocators.order_confirmation_ok_btn).click();

    })
  
})