const express = require('express');
const mongojs = require('mongojs');
const logger = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;



