const { showName } = require("../index");

test("should return the user Name when entered both the First and Last Name", () => {
  expect(showName("Ram", "Ji")).toBe("Hello Ram Ji");
});

test("should throw A warning when one or no parameter is provided", () => {
  expect(showName()).toBe("Please Provide Both the names");
});
