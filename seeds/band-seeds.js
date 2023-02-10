const { Band } = require('../models');

const bandSeeds = [
  {
    band_name: "Secret Lab",
    username: "secretlab",
    manager_name: "Brick",
    post_content: "We're looking for a drummer to join our group!",
    date_created: `1/31/2023`,
    genre: "Funk",  
    fk_instrument: "Drums",
    need_date: `2/23/2023`,
    email: "brick@test.com",
    password: "bandPass1"
  },
  {
    band_name: "Binky182",
    username: "binky182",
    manager_name: "Travis",
    post_content: "From Columbus by the way. I'm on the hunt for a killer bass player!",
    date_created: `2/1/2023`,
    genre: "Folk",  
    fk_instrument: "Bass",
    need_date: `2/25/2023`,
    email: "travis@test.com",
    password: "bandPass2"
  },
  {
    band_name: "GitLab Punks",
    username: "gitlabPunks",
    manager_name: "Jake",
    post_content: "Columbus Slipknot tribute band Disasterpiece is looking to audition guitarists!",
    date_created: `2/10/2023`,
    genre: "Classic Rock",  
    fk_instrument: "Guitar",
    need_date: `3/1/2023`,
    email: "jake@statefarm.com",
    password: "bandPass3"
  },
  {
    band_name: "High Altitude Spy Balloons",
    username: "spyBalloons",
    manager_name: "Paul",
    post_content: "I'm looking for a drummer that's interested in playing for a prog/death metal band in Youngstown or the outlying area!",
    date_created: `2/8/2023`,
    genre: "Metal",  
    fk_instrument: "Drums",
    need_date: `3/1/2023`,
    email: "paul@beatles.com",
    password: "bandPass4"
  },


]

const seedAuditioners = () => Band.bulkCreate(bandSeeds);

module.exports = seedAuditioners;