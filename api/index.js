const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showName(firstName, lastName) {
  if (firstName && lastName) {
    return `Hello ${firstName} ${lastName}`;
  }

  return "Please Provide Both the names";
}

function CreateUser(userName, password, confirmPassword) {
  if (password !== confirmPassword) {
    return "Entered Password Does Not Matches";
  }
  return `Account Created Successfully With userName:- ${userName}`;
}

// let userInput = [];

// rl.on("line", (input) => {
//   userInput.push(input);

//   if (userInput.length === 2) {
//     const [fname, lname] = userInput;
//     console.log(showName(fname, lname));
//     rl.close();
//   }
// });

if (require.main === module) {
  rl.question(
    "Do you want to create a account enter Y/N to proceed further ",
    (ans) => {
      if (ans === "Y") {
        rl.question("Enter the User Name for you Account ", (userName) => {
          rl.question("Enter the password ", (password) => {
            rl.question("Confirm the password ", (confirmPassword) => {
              console.log(CreateUser(userName, password, confirmPassword));
              rl.close();
            });
          });
        });
      } else {
        console.log("You Have a good day then...");
        rl.close();
      }
    }
  );
}

module.exports = { showName, CreateUser };
