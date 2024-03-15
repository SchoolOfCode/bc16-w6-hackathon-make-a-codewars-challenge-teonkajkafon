/*MVP 2

Search for a specific word within the input message and output an message in the console to warn of that key word.  
**Testing** test a message with the specific word to ensure the alert functionality works, insensitive to case.

Plan:
 - write a function that takes in a message (string to decode) and a keyword (word to search for). ✅

- convert both message and keyWord to lowercase for  case-insensitive searching. ✅

- check if message is empty. If so, set a default output message ("There was no text in this message"). Otherwise, it retains the original message. ✅

- search for the keyWord (lowercase) within the decodedMessage (also lowercase).✅

- if keyWord is found, return an alert message (Alert! The word "${keyWord}" was found in the message)✅

- returns an object containing both decodedMessage and alertMessage.✅

 - write the kata scenario.✅ 
*/

/**
 * Carrot, a seemingly innocent vegetable company, is suspected of using trained rabbits for industrial sabotage. As a tech-savvy intern at a rival company (Spring Greens Ltd), you have hacked the Carrot employees' email accounts.
 *
 * You need to set up alerts for any given key word that appears within the messages.
 *
 * For example, if the key word to search for is "destroy" and it appears in the message, the function should return the following warning:
 *
 * "Alert! The word "destroy" was found in the message."
 *
 * Things to consider: The messages are always strings, you need to handle uppercase and lowercase, if the message contains no text, then the output should be "There was no text in this message", the returned decoded message and alert messages should be part of one object.
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
