const inquirer = require("inquirer");
const fs = require("fs");

const generateHTML = (username, location, age) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Generated Portfolio</title>
  </head>
  <body>
    <h1>${username}</h1>
    <p>I live in ${location}</p>
    <p>I am ${age}</p>
  </body>
</html>
`;
};

inquirer
  .prompt([
    { name: "username", message: "What is your name?", type: "input" },
    { name: "location", message: "Where do you live?", type: "input" },
    { name: "age", message: "How old are you?", type: "input" },
  ])
  .then((response) => {
    const text = generateHTML(
      response.username,
      response.location,
      response.age
    );
    console.log(response);
    fs.writeFile("index.html", text, (err) => {
      err ? console.log(err) : console.log("Success");
    });
  });
