const router = require('express').Router();
const { Auditioner, Band, Post, Stats } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: Band,
          attributes: ['band_name', 'manager_name'],
        },
        {
          model: Auditioner,
          attributes: [['id', 'auditioner_id'], 'first_name', 'last_name', 'username', 'instrument', 'years_played', 'email'],
        },
        // {
        // model: Stats,
        // attributes: [['id', 'stats_id'], 'month_date', 'monthly_spotify_listeners', 'monthly_avg_stage_time']
        // }
      ]
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/posts/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: Comment,
//           attributes: [['id','comment_id_test'], 'comment', 'post_id', 'user_id'],
//           include: {
//             model: User,
//             attributes: ['username', 'github']
//           }
//         },
//         {
//         model: User,
//         attributes: ['username', 'github']
//         }
//       ],
//     });
//     const post = postData.get({ plain: true });

//     res.render('editPost', {
//       ...post,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });




// router.get('/comments/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       attributes: [
//         ['id', 'post_id'], 'title', 'date_created', 'post_content', ['user_id', 'post_user_id']
//       ],
//       include: [
//         {
//           model: Comment,
//           attributes: ['id', 'comment', 'comment_date','user_id'],
//           include: {
//             model: User,
//             attributes: ['username', 'github']
//           }
//         },
//         {
//         model: User,
//         attributes: ['username', 'github']
//         }
//       ],
//     });
    
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//     });

//     const post = postData.get({ plain: true });
//     const user = userData.get({ plain: true });

//     res.render('singlePost', {
//       ...post,
//       ...user,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });





// Use withAuth middleware to prevent access to route
router.get('/band-profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const bandData = await Band.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post,
        attributes: ['title', 'post_content', 'date_created'],
        include: [
          {
          model: Band,
          attributes: ['username', 'band_name', 'email', 'manager_name']
          },
          // { model: Comment,
          // attributes: ['comment', 'comment', 'comment_date', 'user_id'],
          // include: {
          //   model: User,
          //   attributes: ['username', 'github']
          // }}
          ]}],
    });

    const band = bandData.get({ plain: true });

    res.render('band-profile', {
      ...band,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/post', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const bandData = await Band.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Post }],
    });

    const band = bandData.get({ plain: true });

    res.render('post', {
      ...band,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});




router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {    
    res.redirect('/profile');
    return;
  }  
  res.render('login');
});


router.get('/register-auditioner', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {    
    res.redirect('/profile');
    return;
  }  
  res.render('register-auditioner');
});


router.get('/register-band', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {    
    res.redirect('/profile');
    return;
  }  
  res.render('register-band');
});


module.exports = router;
