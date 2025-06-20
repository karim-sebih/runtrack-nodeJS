const fs = require('fs');
const path = require('path'); 
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to serve static files from the 'public' directory