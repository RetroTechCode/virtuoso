const Auditioner = require('./Auditioner');
const Band = require('./Band');
const Stats = require('./Stats');

//create associations
Band.hasMany(Auditioner, {
    foreignKey: 'band_id',
    onDelete: 'CASCADE'
});

Auditioner.belongsTo(Band, {
    foreignKey: 'band_id'
})

Band.hasMany(Stats, {
    foreignKey: 'band_id',
    onDelete: 'CASCADE'
});

// Stats.belongsTo(Band, {
//     foreignKey: 'band_id'
// })

module.exports = {Auditioner, Band, Stats};