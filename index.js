
const breedName = process.argv[2];
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});


// let web = process.argv.slice(2)[0];

// let breed = process.argv.slice(2)[1];
// breedFetcher(web, breed);





// const breedFetcher = function(web, breed) {
//   request(web + breed, (error, response, body) => {
//     if (error) {
//       console.log(`Encountered ${error} error, Bye!`);
//       return;
//     }
//     const data = JSON.parse(body);
//     if (!error) {
//       if (data.length > 0) {
//         console.log(data[0]["description"]);
//       } else {
//         console.log(`${breed} breed not found.`);
//       }
//     }
//   });
// };

// let web = process.argv.slice(2)[0];

// let breed = process.argv.slice(2)[1];
// breedFetcher(web, breed);