const fs = require('fs');
const data = {
  message: 'Hello from Node.js!',
  timestamp: new Date().toISOString()
};

fs.writeFileSync('nodejs/output.json', JSON.stringify(data, null, 2));
console.log('Node.js script executed and data saved to output.json');
