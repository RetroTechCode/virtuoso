// post a new user

const router = require('express').Router();
const { Band } = require('../../models');

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
