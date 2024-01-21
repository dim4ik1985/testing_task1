import ValidNumber from "../valid-number";

test("checking a valid card", () => {
  const result = new ValidNumber();
  expect(result.checkCard("4111111111111111")).toBe(true);
});

test("checking a invalid card", () => {
  const result = new ValidNumber();
  expect(result.checkCard("4111111111111115")).toBe(false);
});
