const { CreateUser } = require("../index");

test("should Create an account successfully", () => {
  expect(CreateUser("Darlan", "123", "123")).toBe(
    "Account Created Successfully With userName:- Darlan"
  );
});

test("should Throw a warning when the user mismatched the password", () => {
  expect(CreateUser("Darlan", "123", "12")).toBe(
    "Entered Password Does Not Matches"
  );
});
