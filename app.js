//* Making a simple way to connect to SWAPI "https://swapi.co/api/"
//? Using nodeJS to SWAPI API to get user input and display the info

const https = require('https');

//* https://swapi.co/api/option1/?search=option2

const searchFilter = process.argv.slice(2); /* When the user writes something in the terminal
                                               we capture that and send it to  searchFilter */
                                              
const getSearch = (category, search) => {
    //* we are gonna use the api call 
    //? this is the api url "https://swapi.co/api/people/?search=Luke                               
    const request = https.get(`https://swapi.co/api/${searchFilter[0]}/?search=${searchFilter[1]}`,
    response => {
    // Read the data
    
    let body = "";
    response.on("data", data => {
        body += data.toString();
        });
        
    response.on("end", () => {
        const info = JSON.parse(body);
         printMessage(info.results[0].name, info.results[0].mass);
        });
    });
}

getSearch(searchFilter[0], searchFilter[1]);

const printMessage = (name, mass) => {
    console.log(`This is ${name}, ${name} has the following mass of ${mass}`);
}