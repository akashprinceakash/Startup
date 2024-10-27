const express = require('express');
const routes = express.Router();

const quicksearchController = require('../Controllers/quickSearches');

routes.get('/quicksearch',quicksearchController.getQuickSearch);

module.exports=routes;
