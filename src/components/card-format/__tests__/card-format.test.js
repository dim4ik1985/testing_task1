import { regs } from "../card-format";
import CardFormat from "../card-format";

test("belonging to the mir payment system", () => {
  const result = new CardFormat();
  expect(result.checkFormat("2202456999")).toBe("mir");
});

test("belonging to the payment  VISA", () => {
  const result = new CardFormat();
  expect(result.checkFormat("4111111111111111")).toBe("visa");
});
