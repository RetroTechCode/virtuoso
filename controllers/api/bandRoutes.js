// post a new user

const router = require('express').Router();
const { Band, Post, Stats } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const bandData = await Band.create(req.body);

    req.session.save(() => {
      req.session.user_id = bandData.id;
      req.session.logged_in = true;

      res.status(200).json(bandData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const bandData = await Band.findByPk(req.params.id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Stats,
        attributes: ['id', 'month_date', 'monthly_spotify_listeners', 'monthly_avg_stage_time'],
        include: [
          {
          model: Band,
          attributes: ['id', 'username', 'band_name', 'genre', 'profile_pic', 'email', 'manager_name']
          },
          ]},
        { model: Post,
          attributes: ['title', 'post_content', 'date_created'],
          include: [
            {
            model: Band,
            attributes: [['id', 'band_id'], 'username', 'band_name', 'genre', 'profile_pic', 'email', 'manager_name']
            },
            ]}],
    });
    const band = bandData.get({ plain: true });

    res.render('band', {
      ...band,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const bandData = await Band.findOne({ where: { username: req.body.username } });

    if (!bandData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await bandData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = bandData.id;
      req.session.logged_in = true;
      
      res.json({ user: bandData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
