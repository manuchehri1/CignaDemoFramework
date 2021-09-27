import HomeLocators from '../locators/home';

var HomePage = {

       move_to_home_page: function() {
              cy.get(HomeLocators.home_win()).click({ force: true });
       },

       // this method is used to move between categories: phone, notebook, monitor
       move_to_category: function(category_name) {
              cy.get(HomeLocators.category(category_name)).click({ force: true });
       },
       
       // this method is used to select product from page
       // e.g: if you want to select the second item from list: nth_item = 2
       select_item: function(nth_item) {
              cy.get(HomeLocators.item(nth_item)).click({ force: true });
       },
       
       
       add_to_cart: function() {
              cy.get(HomeLocators.add_to_cart_button()).click({ force: true });
              cy.wait(2000)
       },

      


};

export default HomePage;

