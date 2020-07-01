/*Displaying / Hiding the conditions */
$("#password").focus(function(){
    $("#warnings").css("display", "block");
})
$("#password").blur(function(){
    $("#warnings").css("display", "none");
})
/*Testing the password everytime we change it*/
$("#password").keyup(function(){
    var myPassword= $("#password").val();
    //testing for small letters
    if(/[a-z]/g.test(myPassword)){
        $("#letter").removeClass("invalid");
        $("#letter").addClass("valid");
    }
    else{
         $("#letter").removeClass("valid");
         $("#letter").addClass("invalid");
    }
    //testing for capital letters
    if(/[A-Z]/g.test(myPassword)){
        $("#capital").removeClass("invalid");
        $("#capital").addClass("valid");
    }
    else{
        $("#capital").removeClass("valid");
        $("#capital").addClass("invalid");
    }
    //testing for small numbers
    if(/[0-9]/g.test(myPassword)){
        $("#number").removeClass("invalid");
        $("#number").addClass("valid");
    }
    else{
        $("#number").removeClass("valid");
        $("#number").addClass("invalid");
    }
    //testing for the length
    if(myPassword.length>=8){
        $("#length").removeClass("invalid");
        $("#length").addClass("valid");
    }
    else{
        $("#length").removeClass("valid");
        $("#length").addClass("invalid");
    }
    //testing for special characters
    if(/[!@$%^&*#]/.test(myPassword)){
        $("#special").removeClass("invalid");
        $("#special").addClass("valid");
    }
    else{
        $("#special").removeClass("valid");
        $("#special").addClass("invalid");
    }
})
//showing the password
$(".fa-eye").mouseenter(function(){
    $("#password").attr("type", "text");
})
$(".fa-eye").mouseleave(function(){
    $("#password").attr("type", "password");
})

