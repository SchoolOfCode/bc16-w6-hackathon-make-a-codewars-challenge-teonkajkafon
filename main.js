/**
 * Carrot, a seemingly innocent vegetable company, is suspected of using trained rabbits for industrial sabotage. As a tech-savvy intern at a rival company (Spring Greens Ltd), you have hacked the Carrot employees' email accounts.
 *
 * You need to set up alerts for any given key word that appears within the messages.
 *
 * For example, if the key word to search for is "destroy" and it appears in the message, the function should return the following warning:
 *
 * "Alert! The word "destroy" was found in the message."
 *
 * Things to consider:
 * *The messages are always strings, you need to handle uppercase and lowercase, if the message contains no text, then the output should be "There was no text in this message", the returned decoded message and alert messages should be part of one object.
 */

export function decodeMessage(message, keyWord) {
  const lowerkey = keyWord.toLowerCase();
  const decodedMessage =
    message !== "" ? message : "There was no text in this message"; // Set default for empty message
  let alertMessage = "";

  if (keyWord.toLowerCase && decodedMessage.toLowerCase().includes(lowerkey)) {
    alertMessage = `Alert! The word "${keyWord}" was found in the message.`;
  }
  console.log(decodedMessage, alertMessage);
  return { decodedMessage, alertMessage }; // Return both decoded message and any alert
}
