Put your plan, story, and any supporting material here, you could use the help of a readme markdown generator such as [readme.so](https://readme.so/)

# Project Title

Carrot, a seemingly innocent vegetable company, is suspected of using trained rabbits for industrial sabotage. As a tech-savvy intern at a rival company (Spring Greens Ltd), you have stumbled upon a series of encrypted messages hidden within Carrot's social media posts. These messages, believed to be in a simple ROT cipher, could expose their secret plans to world domination. Your mission is to crack the code and expose Carrot's evil plans!

## A team-based approach to development

### team members

Peter  
Jake  
Catherine

### our approach & evaluation

**Starting point:** We agreed to start at 9am with our planning and one MVP completed.  
**Check-ins:** We agreed to have group check-ins every 15 minutes.  
**5-min rule:** We set a rule that anyone stuck on something for more than 5 mins should bring the whole team onboard to help with problem solving.

## Brainstorming

As a team we brainstormed various ideas and discussed each one to guage how feasible it would be to implement them within the given timeframe. Our discussions also considered the adaptability of the idea, in order to plan for clear MVPs and tests.

![Alt text](.\res\jamboard-screenshot.png?raw=true "team brainstorming on jamboard")

## MVPs

### MVP 1

Read user input and display it
**Testing:** test for inputting different messages and assert they are returned.  
test that the output: is a string; gives a message when the output is anything other than a string.

#### Planning

**Plan:**

- write a function that takes in a message and returns it. ✅
- write the kata scenario.✅

### MVP 2

Search for a specific word within the input message and output an alertmessage in the console to warn of that key word.  
**Testing** test a message with the specific word to ensure the alert functionality works, insensitive to case.

#### Planning

** Plan: **

1. write a function that takes in a message (string to decode) and a keyword (word to search for). ✅

2. convert both message and keyWord to lowercase for case-insensitive searching. ✅

3. check if message is empty. If so, set a default output message ("There was no text in this message"). Otherwise, it retains the original message. ✅

4. search for the keyWord (lowercase) within the decodedMessage (also lowercase).✅

5. if keyWord is found, return an alert message (Alert! The word "${keyWord}" was found in the message)✅

6. returns an object containing both decodedMessage and alertMessage.✅

### MVP 3

Decoding a ROT cypher that shifts the alphabet by one letter and output an alertmessage in the console to warn of key words.
**Testing** test input messages are correctly decoded to confirm that rotation works as expected.

### MVP 4

Decoding a ROT cypher that shifts the alphabet by any given number of letters and output an alertmessage in the console to warn of key words.
**Testing** test input messages with different shift values are correctly decoded to confirm that rotation works as expected.

### MVP 5

Decoding a ROT cypher that shifts the alphabet by any given number of letters and output an alertmessage in the console to warn of key words. Your technology has become much more advanced, you can now detect bunny movements and warn your bosses of their thoughts: whiskers twitching, thumping, alert ears, binkies.
