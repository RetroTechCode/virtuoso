const router = require('express').Router();
const bandRoutes = require('./bandRoutes');
const auditionerRoutes = require('./auditionerRoutes');
// const statRoutes = require('./statRoutes');

router.use('/bands', bandRoutes);
router.use('/auditioners', auditionerRoutes);
// router.use('/stats', statRoutes);

module.exports = router;
