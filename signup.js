function validateForm() {
  var email = document.forms["signupForm"]["email"].value;
  var password = document.forms["signupForm"]["password"].value;
  var is_valid = false;

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
  let validEmail = validEmailRegex.test(email);

  document.getElementById("error-email").style.visibility = "collapse";
  document.getElementById("error-password").style.visibility = "collapse";
  is_valid = true;

  if (!validEmail) {
    document.getElementById("error-email").style.visibility = "visible";
    is_valid = false;
  }

  if (password.length < 8) {
    document.getElementById("error-password").style.visibility = "visible";
    is_valid = false;
  }

  return is_valid;
}
