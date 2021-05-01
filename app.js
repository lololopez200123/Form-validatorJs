/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-undef */
const $form = $('#myForm');

const rules = {
  'details.name': {
    required: true,
    minlength: 2,
    maxlength: 35
  },
  'details.surname': {
    required: true,
    minlength: 2,
    maxlength: 50
  },
  'details.email': {
    required: true,
    email: true
  }
};

const messages = {
  'details.name': {
    required: 'Please provide your name',
    minlength: jQuery.validator.format("Enter at least {0} characters"),
    maxlength: jQuery.validator.format("Please don't insert more than {0} characters"),
  },
  'details.surname': {
    required: 'Please provide your surnname',
    minlength: jQuery.validator.format("Enter at least {0} characters"),
    maxlength: jQuery.validator.format("Please don't insert more than {0} characters"),
  },
  'details.email': {
    required: 'Please provide your email',
    email: 'Please provide a valid email'
  }
};

const success = (label) => {
  label.html("&nbsp;").addClass("checked");
};

const validEmail = (pattern = "") => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(pattern);

$.validator.addMethod("email", (value) => validEmail(value), "Please provide a valid email");

const options = {
  rules,
  messages,
  success
};

function init() {
  $form.validate(options);
}

// kick off everything
init();
