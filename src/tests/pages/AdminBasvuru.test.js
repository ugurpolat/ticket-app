import { render } from "react-dom";
import AdminBasvuru from "../../pages/AdminBasvuru";

const add = (a, b) => a + b;
test("should first", () => {
  const action = add(3, 4);
  expect(action).toBe(7);
});
