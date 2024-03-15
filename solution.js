// This function decodes a message and checks for a keyword

export function decodeMessage(message, keyWord) {
  // 1. Check if message is empty:
  //    - If empty, set message to be a default message
  //    - If not empty, use the original message
  const decodedMessage =
    message !== "" ? message : "There was no text in this message";

  // 2. Initialize an empty string for the alert message
  let alertMessage = "";

  // 3. Check if the lowercase keyword is found in the lowercase decoded message
  if (decodedMessage.toLowerCase().includes(keyWord.toLowerCase())) {
    // 4. If found, create an alert message with the keyword
    alertMessage = `Alert! The word '${keyWord}' was found in the message.`;
  }

  // 5. Return an object containing both the decoded message and any alert message
  return { decodedMessage, alertMessage };
}
