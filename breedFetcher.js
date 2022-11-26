/*
* breedFetcher.js - Allows the user to specify a breed of cat through the terminal and returns a description.
*/

const request = require('request');

// Lets the user specify a cat breed through the terminal and print them the JSON body and description.
const fetchBreedDescription = (breedName, callBack) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    //console.log(error);
    if (error) {
      console.log(error);
      return callBack(error, null);
    }
    const data = JSON.parse(body);
    // Handle scenarios where the cat breed is not found.
    if (data && data.length === 0) {
      //console.log("Sorry, we couldn't find a breed of cat by that name. Please try again.");
      return callBack("Sorry, we couldn't find a breed of cat by that name. Please try again.", null);
    } else {
      //console.log(typeof data);
      console.log(`Here is a description: \n`);
      //console.log(data[0].description);
      return callBack(null, data[0].description);
    }
  });
};


module.exports = { fetchBreedDescription };






