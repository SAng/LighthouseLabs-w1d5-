var assert = require("chai").assert;
var isValid = require("../luhn");

describe("Valid", function() {
  it("should return true if a sequence of numbers is a Luhn Algorithm", function() {
    var number = 79927398713;
    var result = isValid(number);
    assert.isTrue(result);
  });


  it("should return false if a sequence of numbers is not a Luhn Algorithm", function() {
    var number = 79927398712;
    var result = isValid(number);
    assert.isFalse(result);
  });

  it("should return false if an input is not a number", function() {
    var number = "sdfsdfdfd";
    var result = isValid(number);
    assert.isFalse(result);
  });
});

