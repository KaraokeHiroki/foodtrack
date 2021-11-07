const foods = require('./foods/foods.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(foods);
};
