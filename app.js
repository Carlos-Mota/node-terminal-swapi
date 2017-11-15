//* Making a simple way to connect to SWAPI "https://swapi.co/api/"
//? Using nodeJS to SWAPI API to get user input and display the info

const https = require('https');

//* https://swapi.co/api/option1/?search=option2

const searchFilter = process.argv.slice(2); /* When the user writes something in the terminal
                                               we capture that and send it to  searchFilter */
const printMessage = (category, search) => {

}
