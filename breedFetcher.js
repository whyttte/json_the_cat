const request = require("request");

const web = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function(breedName, comeBack) {
  
  request(web + breedName, (error, response, body) => {
    if (error) {
      comeBack(error);
      return;
    }
    const data = JSON.parse(body);
    if (!error) {
      if (data.length > 0) {
        comeBack(null, (data[0]["description"]));
        return;
      } else {
        comeBack(`breed not found.`, null);
        return;
      }
    }
  });
};

module.exports = {fetchBreedDescription};
