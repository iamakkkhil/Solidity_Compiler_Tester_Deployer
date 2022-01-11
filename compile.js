// path is used to generate a valid path for the file inpedent of OS
const path = require('path');
// file system is used to read and write files
const fs = require('fs');
// solc is used to compile solidity files
const solc = require('solc');

const inboxPath = path.join(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// module.exports = solc.compile(source, 1);
module.exports = solc.compile(source, 1).contracts[":Inbox"]
