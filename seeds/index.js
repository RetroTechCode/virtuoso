const seedAuditioners = require('./auditioner-seeds');
const seedBands = require('./band-seeds');
const seedStats = require('./stats-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedAuditioners();
    console.log('\n----- AUDITIONERS SEEDED -----\n');
  
  await seedBands();
    console.log('\n----- BANDS SEEDED -----\n');

  await seedStats();
    console.log('\n----- STATS SEEDED -----\n');

  process.exit(0);
};

seedAll();