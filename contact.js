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

    $('.btn[type="submit"]').attr('disabled','disabled');
    $('input[type="text"]').keyup(function(){
      var name = document.getElementById("name").value;
      var mail = document.getElementById('email').value;
      var sub = document.getElementById('inputAddress').value
      regex = /\S+@\S+\.\S+/;
      if((name.length >= 3) && (regex.test(mail)) && sub.length >= 5){
        $('.btn[type="submit"]').removeAttr('disabled');
        $("#submit-form").submit((e)=>{
          e.preventDefault()
          $.ajax({
              url:"https://script.google.com/macros/s/AKfycbxZR05CXbGRDC2UQG6f62jUY5lOTjCPRJGU07fB38VBHniLQZMJE5iZMll6PJ5736b2/exec",
              data:$("#submit-form").serialize(),
              method:"post",
              success:function (response){
                  window.alert("Good job! Thanks for submitting the form")
                  window.location.reload()
                  //window.location.href="https://google.com"
              },
              error:function (err){
                  alert("Something Error")
  
              }
          })
      })
      }
      else{
          $('.btn[type="submit"]').attr('disabled','disabled');
      }
  })