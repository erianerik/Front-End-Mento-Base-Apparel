function ValidateEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(mailformat)) {
        document.formValid.email.focus();
        return true;
    }
    else {
        document.formValid.email.focus();
        $(".campoEmail").css('border','1px solid red');
        $(".emailError").css('display', 'block');
        $(".validText").css('display', 'block');
    }
}
