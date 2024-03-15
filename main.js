/**
 * Carrot, a seemingly innocent vegetable company, is suspected of using trained rabbits for industrial sabotage. As a tech-savvy intern at a rival company (Spring Greens Ltd), you have hacked the Carrot employees' email accounts.
 *
 * You need to set up alerts for any given key word that appears within the messages.
 *
 * For example, if the key word to search for is 'destroy' and it appears in the message, the function should return the following warning (note the single quotation marks!):
 *
 * "Alert! The word 'destroy' was found in the message."
 *
 * Things to consider: The messages are always strings, you need to handle uppercase and lowercase, if the message contains no text, then the output should be "There was no text in this message", the returned decoded message and alert messages should be part of one object.
 */

export function decodeMessage(message, keyWord) {
  // 2. Check if message is empty:
  //    - If empty, set message to be a default message
  //    - If not empty, use the original message
  const decodedMessage =
    message !== "" ? message : "There was no text in this message";

  // 3. Initialize an empty string for the alert message
  let alertMessage = "";

  // 4. Check if the lowercase keyword is found in the lowercase decoded message
  if (decodedMessage.toLowerCase().includes(keyWord.toLowerCase())) {
    // 5. If found, create an alert message with the keyword
    alertMessage = `Alert! The word '${keyWord}' was found in the message.`;
  }

  // 6. Return an object containing both the decoded message and any alert message
  return { decodedMessage, alertMessage };
}
