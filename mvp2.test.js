import { test, expect } from "vitest";
import { decodeMessage } from "./mvp2.js";

test("should find a specific word (case-insensitive)", () => {
  const employeeMessage = "This is a test message.";
  const keyWord = "TEST";
  const message = decodeMessage(employeeMessage, keyWord);
  expect(message.decodedMessage).toBe(employeeMessage);
  expect(message.alertMessage).toBe(
    "Alert! The word 'TEST' was found in the message."
  );
});

test("if employeeMessage is empty, should return an empty message and no alert", () => {
  const employeeMessage = "";
  const keyWord = "carrot";
  const message = decodeMessage(employeeMessage, keyWord);
  expect(message.decodedMessage).toBe("There was no text in this message");
  expect(message.alertMessage).toBe("");
});

test("an object should be returned", () => {
  const employeeMessage = "This is a message.";
  const keyWord = "test";
  const message = decodeMessage(employeeMessage, keyWord);
  expect(typeof message).toBe("object"); // Check if it's an object
});
