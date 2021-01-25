function validateEmail(email) {
  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  if (!email) {
    return "Email is required";
  }

  if (!validEmailRegex.test(email)) {
    return "Please enter a valid email";
  }

  return "";
}

function validatePassword(password) {
  if (!password) {
    return "Password is required";
  }

  if (password.length < 8) {
    return "Minimum 8 characters";
  }

  return "";
}
