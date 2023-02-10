const { Stats } = require('../models');

const statsSeeds = [
  {
    month_date: `11/15/2022`,
    monthly_spotify_listeners: 1299,
    monthly_avg_stage_time: 94,
    band_id: 1
  },
  {
    month_date: `12/15/2022`,
    monthly_spotify_listeners: 1281,
    monthly_avg_stage_time: 71,
    band_id: 1
  },
  {
    month_date: `1/15/2023`,
    monthly_spotify_listeners: 1461,
    monthly_avg_stage_time: 106,
    band_id: 1
  },
  {
    month_date: `2/15/2023`,
    monthly_spotify_listeners: 1529,
    monthly_avg_stage_time: 49,
    band_id: 1
  },
  {
    month_date: `11/15/2022`,
    monthly_spotify_listeners: 62,
    monthly_avg_stage_time: 32,
    band_id: 2
  },
  {
    month_date: `12/15/2022`,
    monthly_spotify_listeners: 83,
    monthly_avg_stage_time: 49,
    band_id: 2
  },
  {
    month_date: `1/15/2023`,
    monthly_spotify_listeners: 619,
    monthly_avg_stage_time: 93,
    band_id: 2
  },
  {
    month_date: `2/15/2023`,
    monthly_spotify_listeners: 1260,
    monthly_avg_stage_time: 101,
    band_id: 2
  },

  {
    month_date: `11/15/2022`,
    monthly_spotify_listeners: 4115,
    monthly_avg_stage_time: 59,
    band_id: 3
  },
  {
    month_date: `12/15/2022`,
    monthly_spotify_listeners: 3280,
    monthly_avg_stage_time: 116,
    band_id: 3
  },
  {
    month_date: `1/15/2023`,
    monthly_spotify_listeners: 1068,
    monthly_avg_stage_time: 61,
    band_id: 3
  },
  {
    month_date: `2/15/2023`,
    monthly_spotify_listeners: 902,
    monthly_avg_stage_time: 45,
    band_id: 3
  },

]

const seedStats = () => Stats.bulkCreate(statsSeeds);

module.exports = seedStats;