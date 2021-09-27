var SignupLocators = {

    signup_window: function() {
           return '.nav-bottom-item-login a#signin2'
    },

    username_input: function() {
           return '#sign-username'
    },

    password_input: function() {
           return '#sign-password'
    },

    signup_button: function() {
        return '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    },

    close_button: function() {
       return '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary'
     }

};

export default SignupLocators;