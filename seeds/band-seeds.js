const { Band } = require('../models');

const bandSeeds = [
  {
    band_name: "Secret Lab",
    username: "secretlab",
    manager_name: "Brick",
    genre: "Funk",  
    fk_instrument: "Drums",
    need_date: `2/23/2023`,
    email: "brick@test.com",
    phone: "(330) 123-4567",
    profile_pic: "/img/secretlab.jpg",
    password: "bandPass1",
    auditioner_id: 2,
  },
  {
    band_name: "Binky182",
    username: "binky182",
    manager_name: "Travis",
    genre: "Folk",  
    fk_instrument: "Bass",
    need_date: `2/25/2023`,
    email: "travis@test.com",
    phone: "(123) 456-7890",
    profile_pic: "/img/binky182.jpg",
    password: "bandPass2",
    auditioner_id: 3,
  },
  {
    band_name: "GitLab Punks",
    username: "gitlabPunks",
    manager_name: "Jake",
    genre: "Classic Rock",  
    fk_instrument: "Guitar",
    need_date: `3/1/2023`,
    email: "jake@statefarm.com",
    phone: "(614) 012-3456",
    profile_pic: "/img/gitlabpunks.jpg",
    password: "bandPass3",
    auditioner_id: 1,
  },
  {
    band_name: "High Altitude Spy Balloons",
    username: "spyBalloons",
    manager_name: "Paul",
    genre: "Metal",  
    fk_instrument: "Drums",
    need_date: `3/1/2023`,
    email: "paul@beatles.com",
    profile_pic: "/img/spyballoons.jpg",
    phone: "(212) 800-9898",
    password: "bandPass4"
  },


]

const seedAuditioners = () => Band.bulkCreate(bandSeeds);

module.exports = seedAuditioners;