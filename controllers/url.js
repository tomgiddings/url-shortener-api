const { nanoid } = require('nanoid');
const urlModel = require('../models/url');

const getURL = (key) => {
    return urlModel.get(key);
}
const generateKey = async (url) => {
    const key = nanoid(6);
    await urlModel.set(key, url);
    return key;
}

module.exports = { getURL, generateKey };
