const { Band } = require('../models');

const bandSeeds = [
  {
    band_name: "Secret Lab",
    manager_name: "Brick",
    post_content: "Guitar",
    genre: "Funk",  
    fk_instrument: "Triangle",
    need_date: `2/23/2023`,
    email: "brick@test.com",
    password: "bandPass1",
    auditioner_id: 2,
  },
  {
    band_name: "Binky182",
    manager_name: "Travis",
    post_content: "Folk",
    genre: "Folk",  
    fk_instrument: "Guitar",
    need_date: `2/25/2023`,
    email: "travis@test.com",
    password: "bandPass2",
    auditioner_id: 3,
  },
  {
    band_name: "GitLab Punks",
    manager_name: "Jake",
    post_content: "Guitar",
    genre: "Classic Rock",  
    fk_instrument: "Drums",
    need_date: `3/1/2023`,
    email: "jake@statefarm.com",
    password: "bandPass3",
    auditioner_id: 1,
  },


]

const seedAuditioners = () => Band.bulkCreate(bandSeeds);

module.exports = seedAuditioners;