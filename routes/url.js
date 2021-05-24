const express = require('express');
const router = express.Router();
const urlController = require('../controllers/url');

router.get('/:key', async (req, res) => {
    try {
        const { key } = req.params;
        if(!key) { res.status(418).json({ error: 'Key is required'}) }
        res.status(200).json({
            'url': await urlController.getURL(key)
        });
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }

});

router.post('/', async (req, res) => {
    try {
        const { url } = req.body;

        if(!url) {
            res.status(418).json({ error: 'URL is required.' });
        }
        res.status(200).json({
            'key': await urlController.generateKey(url)
        });
    } catch(err) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
