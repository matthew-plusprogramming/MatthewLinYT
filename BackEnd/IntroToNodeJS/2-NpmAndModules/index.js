const fs = require('fs');
const express = require('express');

fs.writeFileSync('text.txt', 'Hello Text!');
console.log('Hello World');
