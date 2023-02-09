const Auditioner = require('./Auditioner');
const Band = require('./Band');
const Stats = require('./Stats');

//create associations
Band.hasMany(Auditioner, {
    foreignKey: 'instrument'
});

Band.hasMany(Stats, {
    foreignKey: 'id'
});

module.exports = {Auditioner, Band, Stats};