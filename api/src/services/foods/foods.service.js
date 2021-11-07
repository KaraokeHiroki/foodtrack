// Initializes the `foods` service on path `/foods`
const { Foods } = require('./foods.class');
const createModel = require('../../models/foods.model');
const hooks = require('./foods.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/foods', new Foods(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('foods');

  service.hooks(hooks);
};
