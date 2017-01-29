var caesarShift = function(str, amount) {

  // Wrap the amount
  if (amount < 0)
    return caesarShift(str, amount + 26);

  // Make an output variable
  var output = '';

  // Go through each character
  for (var i = 0; i < str.length; i ++) {

    // Get the character we'll be appending
    var c = str[i];

    // If it's a letter...
    if (c.match(/[a-z]/i)) {

      // Get its code
      var code = str.charCodeAt(i);

      // Uppercase letters
      if ((code >= 65) && (code <= 90))
        c = String.fromCharCode(((code - 65 + amount) % 26) + 65);

      // Lowercase letters
      else if ((code >= 97) && (code <= 122))
        c = String.fromCharCode(((code - 97 + amount) % 26) + 97);

    }

    // Append
    output += c;

  }

  // All done!
  return output;

};

$(".login, .login *").click(function(){
  var current = false, pass;
  for (var i = 0; ids.passwords.length > i; i++) {
    if(caesarShift(ids.passwords[i],-2) == $(".user").val()){
      current = true;
      pass = caesarShift(ids.passwords[i],-2);
    }
    else {
    }
  }
  if(current) {
    $(".user").removeClass("error");
    $(".user").addClass("success");
    $(".login").text("Loggin you in...")
    setTimeout(function(){
      setTimeout(function(){
        $("html").addClass("animated");
        $("html").addClass("fadeOut");
      }, 2000)
      location.href = "../login/account.html#"+pass;
    }, 2000)
  }
  else {
    $(".user").addClass("error");
  }
})
