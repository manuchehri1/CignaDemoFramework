var CartLocators = {

    cart_win: function() {
           return ':nth-child(4) > .nav-link'
    },

    total_price: function() {
           return '#totalp'
    },

    place_order: function() {
       return '.col-lg-1 > .btn'
    },

    // Place Order Form elements

    place_order_name: function() {
       return '#name'
    },

    place_order_country: function() {
       return '#country'
    },
    place_order_city: function() {
       return '#city'
    },

    place_order_credit_card: function() {
       return '#card'
    },
    place_order_month: function() {
       return '#month'
    },

    place_order_year: function() {
       return '#year'
    },

    place_order_purchase_btn: function() {
       return '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    },

    place_order_close_btn: function() {
       return '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'
    },

    order_confirmation_message: function(){
           return '.sweet-alert > h2'
    },

    order_confirmation_ok_btn: function(){
           return '.confirm'
    }


    

    


    

    

    

    

    

};

export default CartLocators;