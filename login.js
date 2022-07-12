let users = [
  {
    Name: "Admin",
    Pass: "123"
  },

  {
    Name: "Bob",
    Pass: "3"
  }
];

function LoginClick(){

  let user = document.getElementById('Username').value;

  let password = document.getElementById('Password').value;

  let found = false;
  let index = 0;

  for (let i = 0; i < users.length; i++) {
    if(user == users[i].Name){
        found = true;
        index = i;

    }
  }

  if(found == true){
    if(password == users[index].Pass){
      document.getElementById('DispText').innerHTML = "Wassup!" + users[index].Name;
    }
    else {
      document.getElementById('DispText').innerHTML = "Incorrect Password";
    }
  }
  else{
    document.getElementById('DispText').innerHTML = "User not found!";
  }
}//Login Function


function AddClick() {

  let user = document.getElementById('NewUsername').value;

  let password = document.getElementById('NewPassword').value;

  let found = false;

  for (let i = 0; i < users.length; i++) {
    if(user == users[i].Name){
        found = true;
    }
  }

  if(found == true) {
    document.getElementById('DispText').innerHTML = "User already exists";
  }
  else{
    let newUser = {
      Name: user,
      Pass: password
    };

    users.push(newUser);
    document.getElementById('DispText').innerHTML = "User added";

  }

}//Add new user function
