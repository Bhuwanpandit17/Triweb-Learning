function validateUser(name, password) {
  if (name == "") {
    console.log("Invalid username");
    return;
  } else {
    if (password == "" || password.length < 8) {
    console.log("Invalid Password");
    return;
  }
}
  console.log("Successfully Validated");
}
let username = "";
let userpassword = "172";
validateUser(username, userpassword);