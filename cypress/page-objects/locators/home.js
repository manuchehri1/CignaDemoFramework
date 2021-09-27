var HomeLocators = {
       
       home_win: function() {
              return '.active > .nav-link'
       },


       category: function(category_name) {
           return '[onclick="byCat(\''+category_name+'\')"]'
       },

       item: function(nth_item) {
              return ':nth-child('+nth_item+') > .card > .card-block > .card-title > .hrefch'
       },

       add_to_cart_button: function() {
              return '.col-sm-12 > .btn'
       },


};

export default HomeLocators;