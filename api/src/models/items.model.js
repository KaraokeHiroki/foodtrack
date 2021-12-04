// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const items = sequelizeClient.define('items', {
    quality: {
      type: DataTypes.ENUM(
        'bad',
        'okay',
        'good',
        'excellent'
      ),
      allowNull: false,
      defaultValue: 'good'
    },
    where_bought: {
      type: DataTypes.STRING,
      allowNull: false
    },
    storage: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    must_use_immediately: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    notification_frequency: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    date_bought: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    sell_by: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    percent_wasted: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  items.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    items.belongsTo(models.foods);
    items.hasMany(models.notifications);
  };

  return items;
};
