$(document).ready(function() {
    $("#submit-form").validate({
    errorClass: "error fail-alert",
    validClass: "valid success-alert",
    rules: {
    name : {
    required: true,
    minlength: 3
    },
    Mail: {
    required: true,
    email: true
    },
    Subject: {
    required: true,
    minlength: 5
    },
    Message: {
      required: true,
      maxlength: 1000
      },
    },
    messages : {
        name: {
          minlength: "Name should be at least 3 characters"
        },
        Mail: {
          email: "The email should be in the format: abc@domain.tld"
        },
      }
    });
    });
    