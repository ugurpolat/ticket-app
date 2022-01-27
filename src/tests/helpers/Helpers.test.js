/* eslint-disable no-undef */
import { randomNumber } from "../../helpers/Helpers";

test("should generate random number", () => {
  const result = randomNumber(Math.pow(10, 5), Math.pow(10, 8));
  expect(result).toBeGreaterThan(100000);
});
