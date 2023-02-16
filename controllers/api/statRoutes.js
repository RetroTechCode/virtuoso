// get post by ID, post and put by ID requests

const router = require('express').Router();
const { Stats } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/:id', async (req, res) => {
  try {
    const statData = await Stats.findByPk(req.params.id, {
      include: [
        {
        model: Band,
        attributes: ['username', 'band_name']
        }
      ],
    });
    // const stat = statData.get({ plain: true });

    res.render('editPost', {
      ...stat
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', withAuth, async (req, res) => {
  try {
    const statData = await Stats.create({
      ...req.body,
    band_id: req.session.user_id,
  });

  res.status(200).json(statData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Stats.update({
      title: req.body.title,
      post_content: req.body.post_content
    },
    {
      where: {
        id: req.params.id
      }
    }
    );

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;