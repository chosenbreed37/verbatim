const fs = require('fs');

function tabFileToJson(inputFilePath, outputFilePath) {
  // Read the TAB-separated file
  const fileContent = fs.readFileSync(inputFilePath, 'utf8');

  // Split the content into lines
  const lines = fileContent.split('\n');

  // Extract header and column names
  const header = lines[0].split('\t');
  const jsonData = [];

  // Iterate through the remaining lines and convert to JSON
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].split('\t');
    const entry = {};

    for (let j = 0; j < header.length; j++) {
      entry[header[j].toLowerCase().replace('\r', '')] = line[j].replace('\r', '');
    }

    jsonData.push(entry);
  }

  // Convert JSON data to a string
  const jsonContent = JSON.stringify(jsonData, null, 2);

  // Write JSON content to the output file
  fs.writeFileSync(outputFilePath, jsonContent, 'utf8');

  console.log('Conversion complete. JSON file saved at', outputFilePath);
}

// Example usage
const inputFilePath = './quotes.tsv';
const outputFilePath = './quotes.json';
tabFileToJson(inputFilePath, outputFilePath);
