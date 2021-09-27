import CartLocators from '../locators/cart';

var CartPage = {

    
       move_to_cart: function() {
              cy.wait(2000);
              cy.get(CartLocators.cart_win()).click({ force: true });
            
       },
       


       get_total_price: function(){
            var totalPrice;
        cy.get(CartLocators.total_price).then(function($elem) {
            const totalPrice = $elem.text();       
            })
            
           return   Number(totalPrice);
       },


       place_order: function(name,country,city, creditCard, month, year) {
        cy.wait(2000);
        cy.get(CartLocators.place_order()).click({ force: true });
        cy.wait(1000);
        cy.get(CartLocators.place_order_name()).type(name);
        cy.wait(1000);
        cy.get(CartLocators.place_order_country()).type(country);
        cy.wait(1000);
        cy.get(CartLocators.place_order_city()).type(city);
        cy.wait(1000);
        cy.get(CartLocators.place_order_credit_card()).type(creditCard);
        cy.wait(1000);
        cy.get(CartLocators.place_order_month()).type(month);
        cy.wait(1000);
        cy.get(CartLocators.place_order_year()).type(year);
        cy.wait(1000);

        cy.get(CartLocators.place_order_purchase_btn()).click({ force: true });


      
 },

};

export default CartPage;

