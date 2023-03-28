$(document).ready(function(){
 let form = $('#register-form');
 let name = $('input[name="name"]');
 let email  = $('input[name="email"]');
 let company = $('input[name="company"]');
 let password = $('input[name="password"]');
 let confirmpassword = $('input[name="confirmpassword"]');
//  errors
 let name_error = $('#input-error-name');
 let email_error = $('#input-error-email');
 let company_error = $('#input-error-company');
 let password_error = $('#password_error');
 let confirm_error = $('#input-error-confirm-password');
//  functions
$(form).submit(function(e){
    e.preventDefault();
      if($(name).val()==""){
       name_error.html('<label style="color:red;">Name field is required</label>')
       }
       if($(email).val()==""){
        email_error.html('<label style="color:red;">Email field is required</label>')
       }
       if($(company).val()==""){
        company_error.html('<label style="color:red;">Company field is required</label>')
       }
    //    password validations
       if($(password).val()==""){
        password_error.html('<label style="color:red;">Password field is required</label>')
       }
       if($(confirmpassword).val()==""){
        confirm_error.html('<label style="color:red;">Please confirm your password</label>')
       }
       

});

// validation for password

$(password).on('keyup', function(e){
    if(password.val().length < 8){
    password_error.html('<label style="color:red;">Password must be greater then 8 digits</label>')
    }
   else{
        password_error.html('');
    }
});
$(confirmpassword).on('keyup', function(e){
if($(confirmpassword).val() == $(password).val() && password.val().length >= 8){
    confirm_error.html('<label style="color:green;">Password matched</label>')
}

if($(confirmpassword).val() != $(password).val()){
    confirm_error.html('<label style="color:red;">Password does not matched</label>')

}
});




});