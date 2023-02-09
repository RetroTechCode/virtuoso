const { Auditioner } = require('../models');

const auditionerSeeds = [
  {
    first_name: "Joshua",
    last_name: "O",
    instrument: "Guitar",
    fk_genre: "Rock",    
    email: "test1@yahoo.com",
    password: "fakePass1"
  },
  {
    first_name: "Dana",
    last_name: "B",
    instrument: "Drums",
    fk_genre: "Folk",    
    email: "test2@yahoo.com",
    password: "fakePass2"
  },
  {
    first_name: "Warfa",
    last_name: "H",
    instrument: "Keyboards",
    fk_genre: "Country",    
    email: "test3@yahoo.com",
    password: "fakePass3"
  },
  {
    first_name: "Josh",
    last_name: "L",
    instrument: "Triangle",
    fk_genre: "R&B",
    email: "test4@yahoo.com",
    password: "fakePass4"
  },

]

const seedAuditioners = () => Auditioner.bulkCreate(auditionerSeeds);

module.exports = seedAuditioners;