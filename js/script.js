
function validateform()

{
    alert("We have received your message & will get back to you as soon as possible!"); 
    
    var name = document.myform.Name;
    var email = document.myform.Email;
    var message = document.myform.Message;

    if (username.value == "")
    {
        window.alert("Please enter your username.");
        username.focus();
        return false;
    }
    
    if (email.value == "")
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }

    

    if (message.value == "")
    {
        window.alert("Please provide a detailed description.");
        message.focus();
        return false;
    }
    return true;
   
}
