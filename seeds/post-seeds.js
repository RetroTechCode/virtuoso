const { Post } = require('../models');

const postSeeds = [
  {
    title: "Need Drummer",
    date_created: `1/31/2023`,
    post_content: "We're looking for a drummer to join our group!",
    band_id: 1
  },
  { 
    title: "Bassist in Columbus",
    date_created: `2/3/2023`,
    post_content: "From Columbus by the way. I'm on the hunt for a killer bass player!",
    band_id: 2
  },
  {
    title: "Slipknot-style Guitarist",
    date_created: `1/29/2023`,
    post_content: "Columbus Slipknot tribute band Disasterpiece is looking to audition guitarists!",
    band_id: 3
  },
  {
    title: "Youngstown Drummer",
    date_created: `2/8/2023`,
    post_content: "I'm looking for a drummer that's interested in playing for a prog/death metal band in Youngstown or the outlying area!",
    band_id: 4
  }
]

const seedPosts = () => Post.bulkCreate(postSeeds);

module.exports = seedPosts;