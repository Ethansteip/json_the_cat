/*
* index.js
*/

const { fetchBreedDescription } = require('./breedFetcher.js');

// Capture the users cat breed they would like read about through the terminal
const breedName = process.argv;
// trim args down to only user supplied elements
breedName.splice(0, 2);


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details: ", error);
  } else {
    console.log(desc);
  }
});