/*
* YbreedFetcher.js - Allows the user to specify a breed of cat through the terminal and returns a description.
*/

const request = require('request');

// Capture the users cat breed they would like read about through the terminal
const args = process.argv;
// trim args down to only user supplied elements
args.splice(0, 2);


// Lets the user specify a cat breed through the terminal and print them the JSON body and description.
request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, function(error, response, body) {
  if (error) {
    handleRequestError(error);
  }
  handleData(body);
});

const handleData = (body) => {
  // Parsing the JSON (deserialization)
  const data = JSON.parse(body);
  // Handle scenarios where the cat breed is not found.
  if (data && data.length === 0) {
    console.log("Sorry, we couldn't find a breed of cat by that name. Please try again.");
  } else {
    //console.log(typeof data);
    console.log(`Here is a description for ${args[0]}: \n`);
    console.log(data[0].description);
  }
};

// Print message to terminal in the event that the request failed.
const handleRequestError = (error) => {
  console.log(`Sorry, your request failed: ${error}`);
};






