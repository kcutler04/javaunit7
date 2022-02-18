
let nameVal = 1;
while (nameVal){



let username = prompt ("Enter Username");

if (username.length <8)
{console.log ("Too short, user name must be 8 characters minimum");
nameVal=1;
}
else if (!isNaN(username[0])){
  console.log ("The username must start with a letter");
  nameVal=1;
}
else {
  for (let i =1;
  i<username.length; i++)

{if (!isNaN(username[i])){
  
   nameVal =0;
}


}
if (nameVal == 1){
  console.log ("Username must include a number");
}
}
}
console.log ("Username accepted");