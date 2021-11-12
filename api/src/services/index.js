const foods = require('./foods/foods.service.js');
const items = require('./items/items.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(foods);
  app.configure(items);
};
