var LoginLocators = {

    login_window: function() {
           return '#login2'
    },

    username_input: function() {
           return '#loginusername'
    },

    password_input: function() {
           return '#loginpassword'
    },

    login_button: function() {
        return '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    },

    close_button: function() {
       return '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'
     }


};

export default LoginLocators;