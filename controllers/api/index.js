const router = require('express').Router();
const auditionerRoutes = require('./auditionerRoutes');
const bandRoutes = require('./bandRoutes');
const postRoutes = require('./postRoutes');
// const statRoutes = require('./statRoutes');

router.use('/auditioners', auditionerRoutes);
router.use('/bands', bandRoutes);
router.use('/posts', postRoutes);
// router.use('/stats', statRoutes);

module.exports = router;
