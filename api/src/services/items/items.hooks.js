const populate = context => {
  context.params.sequelize = {
    include: [{
      model: context.app.services.foods.Model,
      attributes: ['name'],
    }]
  };
  return context;
};


module.exports = {
  before: {
    all: [],
    find: [populate],
    get: [populate],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
