const request = require('request');
const args = process.argv.splice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  const data = JSON.parse(body);

  if (body === "[]") {
    return console.log("Error: Breed not found");
  }

  if (response.statusCode < 200 || response.statusCode > 203) {
    return console.log(response && response.statusCode);
  }

  if (error) {
    console.log("Error: ", error);
  }

  console.log(data[0].description);
});
