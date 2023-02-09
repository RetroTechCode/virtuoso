// Dependencies
const router = require('express').Router();
const { Auditioner } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const auditionerData = await Auditioner.create(req.body);

        req.session.save(() => {
            req.session.auditioner_id = auditionerData.id;
            req.session.logged_in = true;

            res.status(200).json(auditionerData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const auditionerData = await Auditioner.findOne({ where: { email: req.body.email } });
        if (!auditionerData) {
            res.status(400).json({ message: 'The email or password is incorrect. Please try again.' })
            return;
        }

        const passwordCheck = await auditionerData.checkPassword(req.body.password);
        if (!passwordCheck) {
            res.status(400).json({ message: 'The email or password is incorrect. Please try again.' })
            return;
        }

        req.session.save(() => {
            req.session.auditioner_id = auditionerData.id;
            req.session.logged_in = true;

            res.status(200).json({ auditioner: auditionerData, message: 'Successfully logged in!' });
        })
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