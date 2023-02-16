const Auditioner = require('./Auditioner');
const Band = require('./Band');
const Post = require('./Post');
const Stats = require('./Stats');

//create associations
Band.hasMany(Auditioner, {
    foreignKey: 'auditioner_id',
    onDelete: 'CASCADE'
});

Auditioner.belongsTo(Band, {
    foreignKey: 'auditioner_id'
})

Band.hasMany(Post, {
    foreignKey: 'band_id',
    onDelete: 'CASCADE'
});

Post.belongsTo(Band, {
    foreignKey: 'band_id',
});

Band.hasMany(Stats, {
    foreignKey: 'band_id',
    onDelete: 'CASCADE'
});

Stats.belongsTo(Band, {
    foreignKey: 'band_id'
})

module.exports = {Auditioner, Band, Post, Stats};