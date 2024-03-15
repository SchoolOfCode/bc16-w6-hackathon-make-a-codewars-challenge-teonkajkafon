import { test, expect } from "vitest";
import { forwardMessage } from "./mvp1.js";

test("should display the entered message", () => {
  const carrotMessage =
    "Lavender, please stop eating all of my dandelion roots.";
  const receivedMessage = forwardMessage(carrotMessage);
  expect(receivedMessage).toBe(carrotMessage);
});
