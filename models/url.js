const level = require('level');
const db = level('url');

const get = async (key) => {
    return await db.get(key);
};

const set = async (key, url) => {
    return await db.put(key, url);
}
 
module.exports = { get, set };
