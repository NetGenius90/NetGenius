$(document).ready(function(){
 let form = $('#register-form');
 let name = $('input[name="name"]');
 let email  = $('input[name="email"]');
 let company = $('input[name="company"]');
 let password = $('input[name="password"]');
 let confirmpassword = $('input[name="confirmpassword"]');
//  buttons
let submitBtn = $('#submit-btn');
let showBtn = $('#show-btn');
let hideBtn = $('#hide-btn');
let showBtn2 = $('#show-btn2');
let hideBtn2 = $('#hide-btn2');
//  errors
 let name_error = $('#input-error-name');
 let email_error = $('#input-error-email');
 let company_error = $('#input-error-company');
 let password_error = $('#password_error');
 let confirm_error = $('#input-error-confirm-password');
//  functions
password.prop('type','password');
confirmpassword.prop('type', 'password');
// password 

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
// validation on keyup
$(name).on('keyup', function(e){
    e.preventDefault()
    if(name.val() != ''){
        name_error.html('');
        submitBtn.prop('disabled',false);
    }
    else{
       name_error.html('<label style="color:red;">Name field is required</label>')
       submitBtn.prop('disabled',true);
    }
})

$(email).on('keyup', function(e){
    e.preventDefault()
    if(email.val() != ''){
        email_error.html('');
        submitBtn.prop('disabled',false);
    }
    else{
       email_error.html('<label style="color:red;">Email field is required</label>')
       submitBtn.prop('disabled',true);
    }
})
$(company).on('keyup', function(e){
    e.preventDefault()
    if(company.val() != ''){
        company_error.html('');
        submitBtn.prop('disabled',false);
    }
    else{
       company_error.html('<label style="color:red;">Company field is required</label>')
       submitBtn.prop('disabled',true);
    }
})


// validation for password

$(password).on('keyup', function(e){
    if(password.val().length < 8){
    password_error.html('<label style="color:red;">Password must be greater then 8 digits</label>')
    submitBtn.prop('disabled',true)
    }
   if(password.val != '' && password.val().length >=8){
        submitBtn.prop('disabled',false)
        password_error.html('');
    }
});
$(confirmpassword).on('keyup', function(e){
if($(confirmpassword).val() == $(password).val() && password.val().length >= 8){
    submitBtn.prop('disabled',false)
    confirm_error.html('<label style="color:green;">Password matched</label>')
}
if($(confirmpassword).val() != $(password).val()){
    submitBtn.prop('disabled',true)
    confirm_error.html('<label style="color:red;">Password does not matched</label>')

}
if(confirmpassword.val != '' && confirmpassword.val().length >=8 && $(confirmpassword).val() == $(password).val()){
    submitBtn.prop('disabled',false)
    confirm_error.html('');
}
});
// hide and show function for password
$(showBtn).on('click', function(e){
    e.preventDefault();
    password.prop('type', 'text');
    showBtn.hide();
    hideBtn.show();
});
$(hideBtn).on('click', function(e){
    e.preventDefault();
    password.prop('type', 'password');
    showBtn.show();
    hideBtn.hide();
});

// hide and show function for confirm password
$(showBtn2).on('click', function(e){
    e.preventDefault();
    confirmpassword.prop('type', 'text');
    showBtn2.hide();
    hideBtn2.show();
});
$(hideBtn2).on('click', function(e){
    e.preventDefault();
    confirmpassword.prop('type', 'password');
    showBtn2.show();
    hideBtn2.hide();
});




});